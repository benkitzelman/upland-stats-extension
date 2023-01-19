import { reactive } from "vue";

import type { GetSessionSettings } from "../lib/client/messages";
import type {
  Message as WorkerMessage,
  GetStateMessage,
} from "@/types/worker_messaging";

const State = reactive({
  session: undefined as GetSessionSettings["data"] | undefined,

  currentCoordinates: undefined as ScreenCoords | undefined,

  currentPropertyId: undefined as number | undefined,
});

export const syncWithWorker = async function () {
  chrome.runtime.onMessage.addListener(function (msg: WorkerMessage) {
    if (msg.action === "state-changed") {
      for (const prop of Object.keys(msg.state)) {
        console.log("set", prop, msg.state[prop]);
        (State as any)[prop] = msg.state[prop];
      }
    }
  });

  await chrome.runtime.sendMessage({ action: "get-state" } as GetStateMessage);
};

export default State;
