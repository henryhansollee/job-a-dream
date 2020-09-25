import Vue from 'vue'
import VueRouter from 'vue-router'

// Home
import Home from '../views/Home.vue'

// Audio
import AudioList from '../views/audio/AudioList'
import AudioCreate from '../views/audio/AudioCreate'
import AudioDetail from '../views/audio/AudioDetail'

// CoverLetter
import CoverLetterList from '../views/coverletter/CoverLetterList'
import CoverLetterCreate from '../views/coverletter/CoverLetterCreate'
import CoverLetterDetail from '../views/coverletter/CoverLetterDetail'
import CoverLetterUpdate from '../views/coverletter/CoverLetterUpdate'

// FullCourse
import FullCourseList from '../views/fullcourse/FullCourseList'
import FullCourseCreate from '../views/fullcourse/FullCourseCreate'
import FullCourseDetail from '../views/fullcourse/FullCourseDetail'

// Video
import VideoList from '../views/video/VideoList'
import VideoCreate from '../views/video/VideoCreate'
import VideoDetail from '../views/video/VideoDetail'

// Youtube
import YoutubeList from '../views/youtube/YoutubeList'
import YoutubeDetail from '../views/youtube/YoutubeDetail'

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
  {
    path: '/audio/create',
    name: 'AudioCreate',
    component: AudioCreate
  },
  {
    path: '/audio/detail/:id',
    name: 'AudioDetail',
    component: AudioDetail
  },

  // CoverLetter
  {
    path: '/coverletter/list',
    name: 'CoverLetterList',
    component: CoverLetterList
  },
  {
    path: '/coverletter/create',
    name: 'CoverLetterCreate',
    component: CoverLetterCreate
  },
  {
    path: '/coverletter/detail/:id',
    name: 'CoverLetterDetail',
    component: CoverLetterDetail
  },
  {
    path: '/coverletter/detail/:id/update',
    name: 'CoverLetterUpdate',
    component: CoverLetterUpdate
  },

  // FullCourse
  {
    path: '/fullcourse/list',
    name: 'FullCourseList',
    component: FullCourseList
  },
  {
    path: '/fullcourse/create',
    name: 'FullCourseCreate',
    component: FullCourseCreate
  },
  {
    path: '/fullcourse/detail/:id',
    name: 'FullCourseDetail',
    component: FullCourseDetail
  },

  // Video
  {
    path: '/video/list',
    name: 'VideoList',
    component: VideoList
  },
  {
    path: '/video/create',
    name: 'VideoCreate',
    component: VideoCreate
  },
  {
    path: '/video/detail/:id',
    name: 'VideoDetail',
    component: VideoDetail
  },

  // Youtube
  {
    path: '/youtube/list',
    name: 'YoutubeList',
    component: YoutubeList
  },
  {
    path: '/youtube/detail/:id',
    name: 'YoutubeDetail',
    component: YoutubeDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
