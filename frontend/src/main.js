import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueFullPage from "vue-fullpage.js";
import "@/assets/css/global.css";
import Vue2Tts from 'vue2-tts';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueFullPage);
Vue.use(Vue2Tts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
