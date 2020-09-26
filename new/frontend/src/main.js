import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'
import VueFullPage from 'vue-fullpage.js'

Vue.config.productionTip = false
Vue.use(VueFullPage);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
