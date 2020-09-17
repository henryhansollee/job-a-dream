import Vue from 'vue'
import VueRouter from 'vue-router'

// home
import Home from '../views/Home.vue'

// auth
import Signup from '../views/auth/SignupView'

Vue.use(VueRouter)

const routes = [
  // home
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // auth
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
