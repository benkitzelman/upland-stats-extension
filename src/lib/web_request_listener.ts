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

  console.log("UPDATED:", state.currentCoordinates);
};

const storeCurrentProperty = (id: number, state: any) => {
  state.currentPropertyId = id;
};

export const onCompletedHandler = (state: any) => ({ url }: OnCompletedDetails) => {
  console.log(">>", url);
  let match;
  if (url.indexOf("/api/map?") > -1) storeCurrentCoordinates(new URL(url), state);
  if (match = url.match(/\/api\/properties\/(\d+)$/)) storeCurrentProperty(parseInt(match[1], 10), state);
};
