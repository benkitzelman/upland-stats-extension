import type { GetSessionSettings, ScreenDimensions } from "./client/messages";
import type { Neighbourhood } from "./api/types";

const SharedState = {
  loading: false,

  session: undefined as GetSessionSettings["data"] | undefined,

  currentCoordinates: undefined as ScreenCoords | undefined,

  currentPropertyId: undefined as number | undefined,

  viewableNeighbourhoods: [] as Neighbourhood[],

  screenDimensions: undefined as ScreenDimensions | undefined,
};

export default SharedState;
