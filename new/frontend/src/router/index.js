import Vue from 'vue'
import VueRouter from 'vue-router'

// Home
import Home from '../views/Home.vue'

// Audio
import AudioList from '../views/audio/AudioList'

// CoverLetter
import CoverLetterList from '../views/coverletter/CoverLetterList'

// FullCourse
import FullCourseList from '../views/fullcourse/FullCourseList'

// Video
import VideoList from '../views/video/VideoList'

// Youtube
import YoutubeList from '../views/youtube/YoutubeList'

Vue.use(VueRouter)

const routes = [
  // Home
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // Audio
  {
    path: '/audio/list',
    name: 'AudioList',
    component: AudioList
  },

  // CoverLetter
  {
    path: '/coverletter/list',
    name: 'CoverLetterList',
    component: CoverLetterList
  },

  // FullCourse
  {
    path: '/fullcourse/list',
    name: 'FullCourseList',
    component: FullCourseList
  },

  // Video
  {
    path: '/video/list',
    name: 'VideoList',
    component: VideoList
  },

  // Youtube
  {
    path: '/youtube/list',
    name: 'YoutubeList',
    component: YoutubeList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
