/* eslint-disable prettier/prettier */
/* eslint-disable no-cond-assign */

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

export const onCompletedHandler = (state: any) => ({ url }: OnCompletedDetails) => {
  console.log(">>", url);

  if (url.indexOf("/api/map?") > -1) {
    storeCurrentCoordinates(new URL(url), state)
  }
};
