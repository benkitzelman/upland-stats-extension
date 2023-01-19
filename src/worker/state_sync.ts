import type { StateChangeMessage, UIMessage } from "@/types/worker_messaging";

export default (object: any) => {
  const observedState = new Proxy(object, {
    get(...args) {
      return Reflect.get(...args);
    },

    set(target: any, name: string, value: any, receiver: any) {
      syncState({ [name]: value });
      return Reflect.set(target, name, value, receiver);
    },
  });

  listenForStateRequests(observedState);
  return observedState;
};

const listenForStateRequests = (state: ProxyHandler<any>) => {
  chrome.runtime.onMessage.addListener(function (msg: UIMessage) {
    if (msg.action === "get-state") syncState(state);
  });

}
const syncState = async (state: any) => {
  await chrome.runtime.sendMessage({
    action: "state-changed",
    state,
  } as StateChangeMessage);
};
