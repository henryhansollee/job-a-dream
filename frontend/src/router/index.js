import Vue from 'vue'
import VueRouter from 'vue-router'

// home
import Home from '../views/Home.vue'

// auth
import Signup from '../views/auth/SignupView'

// interview
import InterviewListView from '../views/interview/InterviewListView'
import InterviewCreateView from '../views/interview/InterviewCreateView'
import InterviewDetailView from '../views/interview/InterviewDetailView'

// community
import CommunityListView from '../views/community/CommunityListView'
import CommunityCreateView from '../views/community/CommunityCreateView'
import CommunityDetailView from '../views/community/CommunityDetailView'

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

  // interview
  {
    path: '/interview/list',
    name: 'InterviewListView',
    component: InterviewListView
  },
  {
    path: '/interview/create',
    name: 'InterviewCreateView',
    component: InterviewCreateView
  },
  {
    path: '/interview/detail',
    name: 'InterviewDetailView',
    component: InterviewDetailView
  },

  // community
  {
    path: '/community/list',
    name: 'CommunityListView',
    component: CommunityListView
  },
  {
    path: '/community/create',
    name: 'CommunityCreateView',
    component: CommunityCreateView
  },
  {
    path: '/community/detail',
    name: 'CommunityDetailView',
    component: CommunityDetailView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
