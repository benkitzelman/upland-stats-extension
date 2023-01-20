import type { Monitor } from "@/lib/client";
import type Api from "@/lib/api";
import type { GetSessionSettings } from "../lib/client/messages";
import type { Neighbourhood } from "@/lib/api/types";

// TYPES -----------
export type ScreenCoords = {
  north: number;
  south: number;
  east: number;
  west: number;
};

export type State = typeof state & {
  on: (event: string, handler: EvtHandler) => void;
  off: (event: string, handler?: EvtHandler) => void;
};

type EvtHandler = (...args: any) => any;

// STATE -----------
const state = {
  monitor: undefined as Monitor | undefined,

  session: undefined as GetSessionSettings["data"] | undefined,

  api: undefined as Api | undefined,

  currentCoordinates: undefined as ScreenCoords | undefined,

  currentPropertyId: undefined as number | undefined,

  viewableNeighbourhoods: [] as Neighbourhood[],
};

// EVENTS -----------
const eventHandlers: { [evt: string]: EvtHandler[] } = {};

const callEventHandlers = (evt: string, ...args: any[]) => {
  const handlers = eventHandlers[evt];
  if (!handlers || handlers.length === 0) return;

  for (const handler of handlers) handler(...args);
};

// EVENTABLE STATE ------------
const stateProxy = new Proxy(state, {
  get(...args) {
    return Reflect.get(...args);
  },

  set(target: any, name: string, value: any, receiver: any) {
    const hasSet = Reflect.set(target, name, value, receiver);
    if (hasSet) {
      callEventHandlers(`changed:${name}`, value, target[name]);
      callEventHandlers("changed", target);
    }

    return hasSet;
  },
});

const State: State = Object.assign(stateProxy, {
  on: (event: string, handler: EvtHandler) => {
    if ((eventHandlers[event] || []).indexOf(handler) > -1) return;

    eventHandlers[event] ||= [];
    eventHandlers[event].push(handler);
  },

  off: (event: string, handler?: EvtHandler) => {
    if (handler) {
      const idx = (eventHandlers[event] || []).indexOf(handler);
      if (idx === -1) return;

      eventHandlers[event] = eventHandlers[event].splice(idx, 1);
      return;
    }

    eventHandlers[event] = [];
  },
});

export default State;