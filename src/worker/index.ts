import { loadClient } from "./state";

console.log("Starting worker...");

loadClient().then(
  () => console.log("Worker started"),
  (err) => console.error("Unhandled Worker error", err)
);
