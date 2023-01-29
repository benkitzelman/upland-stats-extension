import state from "./state";
import monitorUpland from "./monitor_upland";

console.log("Starting worker...");

// start monitoring the upland tab
monitorUpland(state).then(
  () => console.log("Worker started"),
  (err) => console.error("Unhandled Worker error", err)
);
