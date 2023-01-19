import * as ClientMonitor from "../lib/client";
import Api from "../lib/api";
import stateSync from "./state_sync";

import type { GetSessionSettings } from "../lib/client/messages";

export type ScreenCoords = {
  north: number;
  south: number;
  east: number;
  west: number;
};

const State = stateSync({
  monitor: undefined as ClientMonitor.Monitor | undefined,

  session: undefined as GetSessionSettings["data"] | undefined,

  api: undefined as Api | undefined,

  currentCoordinates: undefined as ScreenCoords | undefined,

  currentPropertyId: undefined as number | undefined,
});

export default State;

export const loadClient = async () => {
  State.monitor = await ClientMonitor.instance(State);

  if (!State.monitor) throw new Error("Couldnt load client");

  State.session = await State.monitor.getSession();
  if (State.session) State.api = new Api(State.session.auth_token);
};
