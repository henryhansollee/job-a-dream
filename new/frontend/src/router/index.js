import Vue from 'vue'
import VueRouter from 'vue-router'

// Home
import Home from '../views/Home.vue'

// Lists
import AudioListView from '../views/lists/AudioListView'
import CoverLetterListView from '../views/lists/CoverLetterListView'
import FullCourseListView from '../views/lists/FullCourseListView'
import VideoListView from '../views/lists/VideoListView'
import YoutubeListView from '../views/lists/YoutubeListView'

Vue.use(VueRouter)

const routes = [
  // Home
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // Lists
  {
    path: '/audio/list',
    name: 'AudioListView',
    component: AudioListView
  },
  {
    path: '/coverletter/list',
    name: 'CoverLetterListView',
    component: CoverLetterListView
  },
  {
    path: '/fullcourse/list',
    name: 'FullCourseListView',
    component: FullCourseListView
  },
  {
    path: '/video/list',
    name: 'VideoListView',
    component: VideoListView
  },
  {
    path: '/youtube/list',
    name: 'YoutubeListView',
    component: YoutubeListView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
