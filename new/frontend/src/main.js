import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'
import VueFullPage from 'vue-fullpage.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@/assets/css/global.css";

Vue.config.productionTip = false
Vue.use(VueFullPage);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
