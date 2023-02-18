import * as Hood from "../services/neighbourhood";
import * as Property from "../services/property";
import { debounce } from "../lib/single_invocation";
import type { StateChangeMessage, UIMessage } from "@/types/worker_messaging";
import type { State } from "./state";

export default (state: State) => {
  listenForStateRequests(state);
  trackViewportState(state);
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

let controller: AbortController | undefined;
const abortExistingRequestsAndReset = () => {
  controller?.abort();
  controller = new AbortController();
  controller.signal.addEventListener("abort", (...args: any[]) =>
    console.log("ABORTING", ...args)
  );
  return controller;
};

const trackViewportState = (state: State) => {
  state.on(
    "changed:currentCoordinates",
    debounce(250, async (newCoords) => {
      if (!state.api) return;

      const abortController = abortExistingRequestsAndReset();
      const opts = { signal: abortController.signal };

      state.loading = true;

      try {
        // track visible neighbourhoods
        state.viewableNeighbourhoods = await Hood.neighbourhoodsWithin(
          newCoords,
          state.api,
          opts
        );

        // track visible properties if we can deduce the neighbourhood yield
        state.viewableProperties =
          state.viewableNeighbourhoods?.length === 1
            ? (await Property.propertiesWithRent(
                state.viewableNeighbourhoods,
                newCoords,
                state.api,
                opts
              )) || []
            : undefined;
      } catch (err) {
        console.warn(err);
      } finally {
        state.loading = false;
        controller = undefined;
      }
    })
  );
};
