import state from "./state";
import keepInSyncWithUI from "./state_sync";
import monitorUpland from "./monitor_upland";

console.log("Starting worker...");

// Ensure state changes are also updated in the UI state
keepInSyncWithUI(state);

// start monitoring the upland tab
monitorUpland(state).then(
  () => console.log("Worker started"),
  (err) => console.error("Unhandled Worker error", err)
);
