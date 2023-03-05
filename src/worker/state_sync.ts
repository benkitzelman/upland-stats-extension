import * as Hood from "../services/neighbourhood";
import * as Property from "../services/property";
import time from "../lib/timer";
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

      // start echoing state changes once someone has registered interest in getting state
      if (!isSyncing) {
        state.on("changed", (newState) => syncState(newState));
        isSyncing = true;
      }
    }
  });
};

const syncState = async (state: State) => {
  return await time({ root: "worker", label: "stateSync" }, async () => {
    try {
      await chrome.runtime.sendMessage({
        action: "state-changed",
        state,
      } as StateChangeMessage);
    } catch (err) {
      console.warn("Worker send message:", err);
    }
  });
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

let trackingState = false;

const trackViewportState = (state: State) => {
  if (trackingState) return;

  state.on(
    "changed:currentCoordinates",
    async (newCoords) => {
      time({ root: "worker", label: `trackViewportState ${JSON.stringify(newCoords)}` }, async (timerOpts) => {
        if (!state.api) return;
        const abortController = abortExistingRequestsAndReset();
        const opts = { signal: abortController.signal, timerOpts };

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
      });
    }
  );

  trackingState = true;
};
