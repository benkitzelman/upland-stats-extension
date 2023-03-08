import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { syncWithWorker } from "./state";

import "./assets/main.css";

const app = createApp(App);

app.use(router);

syncWithWorker().catch((err) => console.error(err));

export default app;
