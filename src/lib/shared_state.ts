import type { GetSessionSettings, ScreenDimensions } from "./client/messages";
import type { Neighbourhood } from "./api/types";
import type { ExtendedProperty } from "./api/models/property";

const SharedState = {
  offline: true,

  loading: false,

  session: undefined as GetSessionSettings["data"] | undefined,

  currentCoordinates: undefined as ScreenCoords | undefined,

  currentPropertyId: undefined as number | undefined,

  viewableNeighbourhoods: [] as Neighbourhood[],

  viewableProperties: [] as ExtendedProperty[] | undefined,

  screenDimensions: undefined as ScreenDimensions | undefined,
};

export default SharedState;
