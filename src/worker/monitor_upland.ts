import * as ClientMonitor from "../lib/client";
import Api from "../lib/api";
import * as Hood from "../services/neighbourhood";
import type { State } from "./state";

// Start monitoring the Upland tab for changes
export default async function (state: State) {
  state.loading = true;
  state.monitor = await ClientMonitor.instance(state);

  if (!state.monitor) throw new Error("Couldnt load client");

  state.session = await state.monitor.getSession();
  if (state.session) state.api = new Api(state.session.auth_token);

  state.loading = false;

  state.on("changed:currentCoordinates", async (newCoords) => {
    if (!state.api) return;

    state.loading = true;

    state.viewableNeighbourhoods = await Hood.neighbourhoodsWithin(
      newCoords,
      state.api
    );

    state.loading = false;
  });
}
