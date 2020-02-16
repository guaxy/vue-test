import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router";
import { formatDate } from "@/filters";

Vue.config.productionTip = false;
Vue.filter("formatDate", formatDate);

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
