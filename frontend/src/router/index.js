import Vue from 'vue'
import VueRouter from 'vue-router'

// home
import Home from '../views/Home.vue'

// auth
import ProfileView from '../views/auth/ProfileView'

// interview
import InterviewListView from '../views/interview/InterviewListView'
import InterviewCreateView from '../views/interview/InterviewCreateView'
import InterviewDetailView from '../views/interview/InterviewDetailView'
import InterviewUpdateView from '../views/interview/InterviewUpdateView'

// community
import CommunityListView from '../views/community/CommunityListView'
import CommunityCreateView from '../views/community/CommunityCreateView'
import CommunityDetailView from '../views/community/CommunityDetailView'
import CommunityUpdateView from '../views/community/CommunityUpdateView'

// Test
import Test from '../views/Test'

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
    path: '/interview/list/',
    name: 'InterviewListView',
    component: InterviewListView
  },
  {
    path: '/interview/create/',
    name: 'InterviewCreateView',
    component: InterviewCreateView
  },
  {
    path: '/interview/detail/:id',
    name: 'InterviewDetailView',
    component: InterviewDetailView
  },
  {
    path: '/interview/detail/:id/update',
    name: 'InterviewUdateView',
    component: InterviewUpdateView
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
    path: '/community/detail/:id',
    name: 'CommunityDetailView',
    component: CommunityDetailView
  },
  {
    path: '/community/detail/:id/update',
    name: 'CommunityUpdateView',
    component: CommunityUpdateView
  },

  // Test
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
