import Vue from 'vue'
import VueRouter from 'vue-router'

// Home
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // Home
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
