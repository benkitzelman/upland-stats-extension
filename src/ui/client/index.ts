import * as Cheerio from 'cheerio';
import * as Messages from './messages';
import * as Errors from '../errors';

export type ClientMonitor =
  ReturnType<typeof createClientMonitor>;

const MESSAGE_TIMEOUT_MS = 5 * 1000;

const createClientMonitor = function(tab: any) {
  window.chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['./dist/client/injected_client.js']
  });

  let eventId = 0;

  const messageResolvers: { [eventId: number]: Function } = {};

  return {
    listen() {
      window.chrome.runtime.onMessage.addListener(function(msg: Messages.ClientMessage, sender: any) {
        const resolver = messageResolvers[msg.eventId];
        resolver && resolver(msg);
        delete messageResolvers[msg.eventId];
      });
    },

    message<T extends keyof typeof Messages>(message: T, ...params: any[]): Promise<ReturnType<typeof Messages[T]>> {
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

        window.chrome.scripting.executeScript({
          target: {tabId: tab.id},
          func  : Messages[message],
          args  : [eventId, ...params] as any
        });
      });
    },

    async getHTML() {
      const { source } = await this.message("getPageSource");
      return Cheerio.load(source);
    }
  };
};


let monitor: ClientMonitor | undefined;

export const instance = (tab?: any) => {
  if (monitor) return monitor;
  if(!tab) throw new Errors.ClientError("Cannot initialise an instance of the client monitor without a tab");

  monitor = createClientMonitor(tab);
  return monitor;
};

export default createClientMonitor;
