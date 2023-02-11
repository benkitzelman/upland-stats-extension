import * as Cheerio from "cheerio";
import * as Messages from "./messages";
import * as Parsers from "./page_parsers";
import * as WebRequestListener from "./web_request_listener";
import * as Errors from "../errors";
import * as Constants from "../constants";
import type { Hood } from "@/services/neighbourhood";

declare global {
  const chrome: any;
}

export type Monitor = PromisedType<ReturnType<typeof createClientMonitor>>;

const MESSAGE_TIMEOUT_MS = 5 * 1000;

export const getTab = async () => {
  return ((await chrome.tabs.query({ url: Constants.TAB_URL, active: true, currentWindow: true })) || [])[0];
};

const isRespondingToRequest = (msg: Messages.ClientMessage): msg is Messages.ClientResponseMessage => !!msg.eventId;

const createClientMonitor = async function (tab: any, state: any) {
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["injected_client.js"],
    });
  } catch (err: any) {
    console.log(`Could not create client monitor: ${err.message}`);
    console.error(err);
  }

  let eventId = 0;

  const messageResolvers: { [eventId: number]: Function } = {};

  return {
    listen() {
      chrome.webRequest.onCompleted.addListener(
        WebRequestListener.onCompletedHandler(state, this),
        { urls: [Constants.API_BASE_URL + "/*"] }
      );

      chrome.runtime.onMessage.addListener(function (
        msg: Messages.ClientMessage,
        sender: any
      ) {
        if (msg.action === "windowResize") {
          state.screenDimensions = msg.data;
        } else if (isRespondingToRequest(msg)) {
          const resolver = messageResolvers[msg.eventId];
          resolver && resolver(msg);
          delete messageResolvers[msg.eventId];
        }
      });
    },

    message<T extends keyof typeof Messages>(
      message: T,
      ...params: any[]
    ): Promise<ReturnType<typeof Messages[T]>> {
      const id = ++eventId;

      return new Promise(function (resolve, reject) {
        messageResolvers[id] = resolve;

        setTimeout(() => {
          const resolver = messageResolvers[id];

          if (resolver) {
            reject();
            delete messageResolvers[id];
          }
        }, MESSAGE_TIMEOUT_MS);

        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: Messages[message],
          args: [eventId, ...params] as any,
        });
      });
    },

    async getPage() {
      const { data } = await this.message("getPageSource");
      return Parsers.parserFor(Cheerio.load(data));
    },

    async getSession() {
      const { data } = await this.message("getSessionSettings");
      return data;
    },

    async getScreenDimensions() {
      const { data } = await this.message("getScreenDimensions");
      return data;
    },

    async markNeighbourhoods(hoods: Hood[]) {
      const { ok } = await this.message("markNeighbourhoods", hoods);
      return ok;
    },
  };
};

let monitor: Monitor | undefined;

export const instance = async (state?: any, tab?: any) => {
  if (monitor) return monitor;

  const currentTab = tab || (await getTab());

  if (!currentTab)
    throw new Errors.ClientError(
      "Cannot initialise an instance of the client monitor without a tab"
    );
  if (!state)
    throw new Errors.ClientError(
      "Cannot initialise an instance of the client monitor without AppState"
    );

  monitor = await createClientMonitor(currentTab, state);
  monitor?.listen();
  return monitor;
};

export default createClientMonitor;
