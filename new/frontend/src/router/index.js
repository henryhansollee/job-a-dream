import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

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

// Result
import Result from '../views/result/Result'

Vue.use(VueRouter)

const routes = [
  // Audio
  {
    path: '/audio/list',
    name: 'AudioList',
    component: AudioList,
    meta: {
      title: '잡아드림 | 음성분석'
    }
  },
  {
    path: '/audio/create',
    name: 'AudioCreate',
    component: AudioCreate,
    meta: {
      title: '잡아드림 | 음성분석 시작'
    }
  },
  {
    path: '/audio/detail/:id',
    name: 'AudioDetail',
    component: AudioDetail,
    meta: {
      title: '잡아드림 | 음성분석 결과'
    }
  },

  // CoverLetter
  {
    path: '/coverletter/list',
    name: 'CoverLetterList',
    component: CoverLetterList,
    meta: {
      title: '잡아드림 | 자소서분석'
    }
  },
  {
    path: '/coverletter/create',
    name: 'CoverLetterCreate',
    component: CoverLetterCreate,
    meta: {
      title: '잡아드림 | 자소서분석 시작'
    }
  },
  {
    path: '/coverletter/detail/:id',
    name: 'CoverLetterDetail',
    component: CoverLetterDetail,
    meta: {
      title: '잡아드림 | 자소서분석 결과'
    }
  },
  {
    path: '/coverletter/detail/:id/update',
    name: 'CoverLetterUpdate',
    component: CoverLetterUpdate,
    meta: {
      title: '잡아드림 | 자소서분석 수정'
    }
  },

  // FullCourse
  {
    path: '/fullcourse/list',
    name: 'FullCourseList',
    component: FullCourseList,
    meta: {
      title: '잡아드림 | 풀코스분석'
    }
  },
  {
    path: '/fullcourse/create',
    name: 'FullCourseCreate',
    component: FullCourseCreate,
    meta: {
      title: '잡아드림 | 풀코스분석 시작'
    }
  },
  {
    path: '/fullcourse/detail/:id',
    name: 'FullCourseDetail',
    component: FullCourseDetail,
    meta: {
      title: '잡아드림 | 풀코스분석 결과'
    }
  },

  // Video
  {
    path: '/video/list',
    name: 'VideoList',
    component: VideoList,
    meta: {
      title: '잡아드림 | 영상분석'
    }
  },
  {
    path: '/video/create',
    name: 'VideoCreate',
    component: VideoCreate,
    meta: {
      title: '잡아드림 | 영상분석 시작'
    }
  },
  {
    path: '/video/detail/:id',
    name: 'VideoDetail',
    component: VideoDetail,
    meta: {
      title: '잡아드림 | 영상분석 결과'
    }
  },

  // Youtube
  {
    path: '/youtube/list',
    name: 'YoutubeList',
    component: YoutubeList,
    meta: {
      title: '잡아드림 | 면접 참고 영상'
    }
  },
  {
    path: '/youtube/detail/:id',
    name: 'YoutubeDetail',
    component: YoutubeDetail,
    meta: {
      title: '잡아드림 | 면접 참고 영상 보기'
    }
  },

  // Result
  {
    path: '/result',
    name: 'Result',
    component: Result,
    meta: {
      title: '잡아드림 | 통계 및 분석'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '잡아드림';
  const isAuthenticated = store.getters.isLoggedIn;
  if (isAuthenticated) {
    next()
  } else if (to.name === 'LoginView' || to.name === 'SignupView') {
    next()
  } else {
    next({name: 'LoginView'})
  }
});

export default router
