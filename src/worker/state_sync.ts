import type { StateChangeMessage, UIMessage } from "@/types/worker_messaging";
import type { State } from "./state";

export default (state: State) => {
  listenForStateRequests(state);
  return state;
};

let isSyncing = false;
const listenForStateRequests = (state: State) => {
  chrome.runtime.onMessage.addListener(function (msg: UIMessage) {
    if (msg.action === "get-state") {
      syncState(state);

      if (!isSyncing) {
        state.on("changed", (newState) => syncState(newState));
        isSyncing = true;
      }
    }
  });
};

const syncState = async (state: State) => {
  try {
    await chrome.runtime.sendMessage({
      action: "state-changed",
      state,
    } as StateChangeMessage);
  } catch (err) {
    console.warn("Worker send message:", err);
  }
};
