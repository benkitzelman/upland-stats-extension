import { S as SharedState, b as debounce, n as neighbourhoodsWithin, i as instance, U as UplandApi } from "./index.js";
const state = {
  ...SharedState,
  api: void 0,
  monitor: void 0
};
const eventHandlers = {};
const callEventHandlers = (evt, ...args) => {
  const handlers = eventHandlers[evt];
  if (!handlers || handlers.length === 0)
    return;
  for (const handler of handlers)
    handler(...args);
};
const stateProxy = new Proxy(state, {
  get(...args) {
    return Reflect.get(...args);
  },
  set(target, name, value, receiver) {
    const hasSet = Reflect.set(target, name, value, receiver);
    if (hasSet) {
      callEventHandlers(`changed:${name}`, value, target[name]);
      callEventHandlers("changed", target);
    }
    return hasSet;
  }
});
const State = Object.assign(stateProxy, {
  on: (event, handler) => {
    if ((eventHandlers[event] || []).indexOf(handler) > -1)
      return;
    eventHandlers[event] || (eventHandlers[event] = []);
    eventHandlers[event].push(handler);
  },
  off: (event, handler) => {
    if (handler) {
      const idx = (eventHandlers[event] || []).indexOf(handler);
      if (idx === -1)
        return;
      eventHandlers[event] = eventHandlers[event].splice(idx, 1);
      return;
    }
    eventHandlers[event] = [];
  }
});
const keepInSyncWithUI = (state2) => {
  listenForStateRequests(state2);
  trackVisibleNeighbourhoods(state2);
  return state2;
};
let isSyncing = false;
const listenForStateRequests = (state2) => {
  chrome.runtime.onMessage.addListener(function(msg) {
    if (msg.action === "get-state") {
      syncState(state2);
      if (!isSyncing) {
        state2.on("changed", (newState) => syncState(newState));
        isSyncing = true;
      }
    }
  });
};
const syncState = async (state2) => {
  try {
    await chrome.runtime.sendMessage({
      action: "state-changed",
      state: state2
    });
  } catch (err) {
    console.warn("Worker send message:", err);
  }
};
const trackVisibleNeighbourhoods = (state2) => {
  state2.on(
    "changed:currentCoordinates",
    debounce(500, async (newCoords) => {
      if (!state2.api)
        return;
      state2.loading = true;
      state2.viewableNeighbourhoods = await neighbourhoodsWithin(
        newCoords,
        state2.api
      );
      state2.loading = false;
    })
  );
};
async function monitorUpland(state2) {
  state2.loading = true;
  keepInSyncWithUI(state2);
  state2.monitor = await instance(state2);
  state2.screenDimensions = await state2.monitor.getScreenDimensions();
  if (!state2.monitor)
    throw new Error("Couldnt load client");
  state2.session = await state2.monitor.getSession();
  if (state2.session)
    state2.api = new UplandApi(state2.session.auth_token);
  state2.loading = false;
}
console.log("Starting worker...");
monitorUpland(State).then(
  () => console.log("Worker started"),
  (err) => console.error("Unhandled Worker error", err)
);