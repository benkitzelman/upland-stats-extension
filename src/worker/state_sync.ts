import type { StateChangeMessage, UIMessage } from "@/types/worker_messaging";
import type { State } from "./state";

export default (state: State) => {
  listenForStateRequests(state);
  state.on("changed", (newState) => syncState(newState));
  return state;
};

const listenForStateRequests = (state: State) => {
  chrome.runtime.onMessage.addListener(function (msg: UIMessage) {
    if (msg.action === "get-state") syncState(state);
  });
};

const syncState = async (state: State) => {
  await chrome.runtime.sendMessage({
    action: "state-changed",
    state,
  } as StateChangeMessage);
};
