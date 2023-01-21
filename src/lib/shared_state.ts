import type { GetSessionSettings } from "./client/messages";
import type { Neighbourhood } from "./api/types";

const SharedState = {
  loading: false,

  session: undefined as GetSessionSettings["data"] | undefined,

  currentCoordinates: undefined as ScreenCoords | undefined,

  currentPropertyId: undefined as number | undefined,

  viewableNeighbourhoods: [] as Neighbourhood[],
};

export default SharedState;
