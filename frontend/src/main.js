import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueFullPage from "vue-fullpage.js";

import "fullpage-vue/src/fullpage.css";
import VueFullpage from "fullpage-vue";

import "@/assets/css/global.css";
import VueDictaphone from "vue-dictaphone";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
Vue.use(VueDictaphone);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueFullPage);

Vue.use(VueFullpage);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
