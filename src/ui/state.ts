import { reactive } from "vue";
import SharedState from "../lib/shared_state";

import type {
  Message as WorkerMessage,
  GetStateMessage,
} from "@/types/worker_messaging";

const State = reactive({
  ...SharedState,
});

export const syncWithWorker = async function () {
  chrome.runtime.onMessage.addListener(function (msg: WorkerMessage) {
    if (msg.action === "state-changed") {
      for (const prop of Object.keys(msg.state)) {
        (State as any)[prop] = msg.state[prop];
      }
    }
  });

  await chrome.runtime.sendMessage({ action: "get-state" } as GetStateMessage);
};

export default State;
