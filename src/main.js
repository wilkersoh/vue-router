import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/styles/tailwind.css";
import "./index.css";

// createApp(App)
//   .use(store)
//   .use(router)
//   .mount("#app");
const app = createApp(App);

[store, router].forEach((x) => app.use(x));

app.mount("#app");
