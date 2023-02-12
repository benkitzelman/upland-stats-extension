import * as ClientMonitor from "../lib/client";
import Api from "../lib/api";
import keepInSyncWithUI from "./state_sync";
import type { State } from "./state";

// Start monitoring the Upland tab for changes
export default async function (state: State) {
  chrome.tabs.onUpdated.addListener(() => startOrStop(state));

  chrome.tabs.onActivated.addListener(() => startOrStop(state));

  return startOrStop(state);
}

const startOrStop = async (state: State) => {
  try {
    const tab = await ClientMonitor.getTab();
    if (!tab) {
      state.offline = true;
      return ClientMonitor.stop();
    }

    state.offline = false;
    state.loading = true;

    // Ensure state changes are also updated in the UI state
    keepInSyncWithUI(state);

    // monitor play.upland.me for changes of interest and change state if / when required
    state.monitor = await ClientMonitor.instance(state, tab);
    state.screenDimensions = await state.monitor.getScreenDimensions();

    if (!state.monitor) throw new Error("Couldnt load client");

    // grab the users session details to make authenticated requests to the upland api
    state.session = await state.monitor.getSession();
    if (state.session) state.api = new Api(state.session.auth_token);

    state.loading = false;
  } catch (err) {
    console.error("Could not start worker:", err);
  }
};
