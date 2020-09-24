import Vue from 'vue'
import VueRouter from 'vue-router'

// home
import Home from '../views/Home.vue'

// interview
import InterviewListView from '../views/interview/InterviewListView'
import InterviewAboutView from '../views/interview/InterviewAboutView'
import InterviewStarView from '../views/interview/InterviewStarView'
import InterviewResultView from '../views/interview/InterviewResultView'
import InterviewCreateView from '../views/interview/InterviewCreateView'
import InterviewDetailView from '../views/interview/InterviewDetailView'
import InterviewUpdateView from '../views/interview/InterviewUpdateView'
import InterviewSearchView from '../views/interview/InterviewSearchView'

// community
import CommunityListView from '../views/community/CommunityListView'
import CommunityCreateView from '../views/community/CommunityCreateView'
import CommunityDetailView from '../views/community/CommunityDetailView'
import CommunityUpdateView from '../views/community/CommunityUpdateView'

// resume
import ResumeCreateView from '../views/resume/ResumeCreateView'
import ResumeDetailView from '../views/resume/ResumeDetailView'
import ResumeUpdateView from '../views/resume/ResumeUpdateView'

// coverletter
import CoverletterListView from '../views/coverletter/CoverletterListView'
import CoverletterCreateView from '../views/coverletter/CoverletterCreateView'
import CoverletterUpdateView from '../views/coverletter/CoverletterUpdateView'
import CoverletterDetailView from '../views/coverletter/CoverletterDetailView'

Vue.use(VueRouter)

const routes = [
  // home
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // interview
  {
    path: '/interview/list/',
    name: 'InterviewListView',
    component: InterviewListView
  },
  {
    path: '/interview/about/',
    name: 'InterviewAboutView',
    component: InterviewAboutView
  },
  {
    path: '/interview/star/',
    name: 'InterviewStarView',
    component: InterviewStarView
  },
  {
    path: '/interview/result/',
    name: 'InterviewResultView',
    component: InterviewResultView
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
  {
    path: '/interview/search',
    name: 'InterviewSearchView',
    component: InterviewSearchView
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

  // resume
  {
    path: '/resume/create',
    name: 'ResumeCreateView',
    component: ResumeCreateView
  },
  {
    path: '/resume/',
    name: 'ResumeDetailView',
    component: ResumeDetailView
  },
  {
    path: '/resume/update',
    name: 'ResumeUpdateView',
    component: ResumeUpdateView
  },

  // coverletter
  {
    path: '/coverletter/list',
    name: 'CoverletterListView',
    component: CoverletterListView
  },
  {
    path: '/coverletter/create',
    name: 'CoverletterCreateView',
    component: CoverletterCreateView
  },
  {
    path: '/coverletter/detail/:id',
    name: 'CoverletterDetailView',
    component: CoverletterDetailView
  },
  {
    path: '/coverletter/detail/:id/update',
    name: 'CoverletterUpdateView',
    component: CoverletterUpdateView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
