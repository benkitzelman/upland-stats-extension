import * as Cheerio from "cheerio";
import * as Messages from "./messages";
import * as Parsers from "./page_parsers";
import * as WebRequestListener from "../web_request_listener";
import * as Errors from "../errors";
import * as Constants from "../constants";
import type UplandApi from "../api";

declare global {
  const chrome: any;
}

export type Monitor = PromisedType<ReturnType<typeof createClientMonitor>>;

export type AppState = {
  monitor: Monitor | undefined;

  session: Messages.GetSessionSettings["data"] | undefined;

  api: UplandApi | undefined;

  currentCoordinates: ScreenCoords | undefined;

  currentPropertyId: number | undefined;
};

const MESSAGE_TIMEOUT_MS = 5 * 1000;

export const getTab = async () => {
  return ((await chrome.tabs.query({
    url: "*://*.upland.me/",
  })) || [])[0];
};

const createClientMonitor = async function (tab: any, state: AppState) {
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
        WebRequestListener.onCompletedHandler(state),
        { urls: [Constants.API_BASE_URL + "/*"] }
      );

      chrome.runtime.onMessage.addListener(function (
        msg: Messages.ClientMessage,
        sender: any
      ) {
        const resolver = messageResolvers[msg.eventId];
        resolver && resolver(msg);
        delete messageResolvers[msg.eventId];
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
  };
};

let monitor: Monitor | undefined;

export const instance = async (state?: AppState, tab?: any) => {
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
