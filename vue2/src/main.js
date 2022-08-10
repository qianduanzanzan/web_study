import Vue from "./vue-2.6.14/src/core/index";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => {
    console.log(h);
    return h(App);
  },
}).$mount("#app");
