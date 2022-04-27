import { createApp } from "vue";
import { createPinia } from "pinia";
import directives from "./directives";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
// console.log(app);
app.use(ElementPlus);
app.use(createPinia());
app.use(router);
app.use(directives);
app.mount("#app");
app.config.errorHandler = (error) => {
    console.error(error);
};
