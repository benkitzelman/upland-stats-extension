/* eslint-disable prettier/prettier */
/* eslint-disable no-cond-assign */

import type { Monitor } from "..";

export type OnCompletedDetails = {
  url: string;
};

const storeCurrentCoordinates = (url: URL, state: any) => {
  const coord = (prop: string) => parseFloat(url.searchParams.get(prop) || "0");

  state.currentCoordinates = ["north", "south", "east", "west"].reduce(
    (coords, direction) => {
      coords[direction] = coord(direction);
      return coords;
    },
    {} as any
  );
};

const storeSession = async (state: any, monitor: Monitor) => {
  state.session = await monitor.getSession();
};

export const onCompletedHandler = (state: any, monitor: Monitor) => ({ url }: OnCompletedDetails) => {
  console.log(">>", url);

  if (url.indexOf("/api/map?") > -1) {
    storeCurrentCoordinates(new URL(url), state)
  }
  if (url.indexOf("/api/authentication") > -1) {
    storeSession(state, monitor).catch((err) => console.warn("Error updating session:", err));
  }
};
