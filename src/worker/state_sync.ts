import * as Hood from "../services/neighbourhood";
import * as Property from "../services/property";
import { debounce } from "../lib/single_invocation";
import type { StateChangeMessage, UIMessage } from "@/types/worker_messaging";
import type { State } from "./state";

export default (state: State) => {
  listenForStateRequests(state);
  trackVisibleNeighbourhoods(state);
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

const trackVisibleNeighbourhoods = (state: State) => {
  state.on(
    "changed:currentCoordinates",
    debounce(500, async (newCoords) => {
      if (!state.api) return;

      state.loading = true;

      state.viewableNeighbourhoods = await Hood.neighbourhoodsWithin(
        newCoords,
        state.api
      );

      state.viewableProperties =
        state.viewableNeighbourhoods?.length === 1
          ? (await Property.propertiesWithRent(
              state.viewableNeighbourhoods,
              newCoords,
              state.api
            )) || []
          : undefined;

      state.loading = false;
    })
  );
};
