import Vue from 'vue'
import VueRouter from 'vue-router'

// home
import Home from '../views/Home.vue'

// auth
import ProfileView from '../views/auth/ProfileView'

// interview
import InterviewListView from '../views/interview/InterviewListView'
import InterviewCreateView from '../views/interview/InterviewCreateView'
import InterviewUpdateView from '../views/interview/InterviewUpdateView'
import InterviewDetailView from '../views/interview/InterviewDetailView'

// community
import CommunityListView from '../views/community/CommunityListView'
import CommunityCreateView from '../views/community/CommunityCreateView'
import CommunityUpdateView from '../views/community/CommunityUpdateView'
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
    path: '/profile',
    name: 'ProfileView',
    component: ProfileView
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
    path: '/interview/detail/:id/update',
    name: 'InterviewUdateView',
    component: InterviewUpdateView
  },
  {
    path: '/interview/detail/:id',
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
    path: '/community/detail/:id/update',
    name: 'CommunityUpdateView',
    component: CommunityUpdateView
  },
  {
    path: '/community/detail/:id',
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
