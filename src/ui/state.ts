import { reactive } from "vue";

import type { GetSessionSettings } from "../lib/client/messages";
import type {
  Message as WorkerMessage,
  GetStateMessage,
} from "@/types/worker_messaging";
import type { Neighbourhood } from "@/lib/api/types";

const State = reactive({
  session: undefined as GetSessionSettings["data"] | undefined,

  currentCoordinates: undefined as ScreenCoords | undefined,

  currentPropertyId: undefined as number | undefined,

  viewableNeighbourhoods: [] as Neighbourhood[],
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
