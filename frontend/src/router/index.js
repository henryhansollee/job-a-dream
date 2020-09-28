import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

// Audio
import AudioList from '../views/audios/AudioList'
import AudioCreate from '../views/audios/AudioCreate'
import AudioDetail from '../views/audios/AudioDetail'

// CoverLetter
import CoverLetterList from '../views/coverletters/CoverLetterList'
import CoverLetterCreate from '../views/coverletters/CoverLetterCreate'
import CoverLetterDetail from '../views/coverletters/CoverLetterDetail'
import CoverLetterUpdate from '../views/coverletters/CoverLetterUpdate'

// FullCourse
import FullCourseList from '../views/fullcourses/FullCourseList'
import FullCourseCreate from '../views/fullcourses/FullCourseCreate'
import FullCourseDetail from '../views/fullcourses/FullCourseDetail'

// Video
import VideoList from '../views/videos/VideoList'
import VideoCreate from '../views/videos/VideoCreate'
import _VideoCreate from '../views/videos/_VideoCreate'
import VideoDetail from '../views/videos/VideoDetail'

// Youtube
import YoutubeList from '../views/youtubes/YoutubeList'
import YoutubeDetail from '../views/youtubes/YoutubeDetail'

// Result
import Result from '../views/results/Result'

Vue.use(VueRouter)

const routes = [
  // Audio
  {
    path: '/audios/list',
    name: 'AudioList',
    component: AudioList,
    meta: {
      title: '잡아드림 | 음성분석'
    }
  },
  {
    path: '/audios/create',
    name: 'AudioCreate',
    component: AudioCreate,
    meta: {
      title: '잡아드림 | 음성분석 시작'
    }
  },
  {
    path: '/audios/detail/:id',
    name: 'AudioDetail',
    component: AudioDetail,
    meta: {
      title: '잡아드림 | 음성분석 결과'
    }
  },

  // CoverLetter
  {
    path: '/coverletters/list',
    name: 'CoverLetterList',
    component: CoverLetterList,
    meta: {
      title: '잡아드림 | 자소서분석'
    }
  },
  {
    path: '/coverletters/create',
    name: 'CoverLetterCreate',
    component: CoverLetterCreate,
    meta: {
      title: '잡아드림 | 자소서분석 시작'
    }
  },
  {
    path: '/coverletters/detail/:id',
    name: 'CoverLetterDetail',
    component: CoverLetterDetail,
    meta: {
      title: '잡아드림 | 자소서분석 결과'
    }
  },
  {
    path: '/coverletters/detail/:id/update',
    name: 'CoverLetterUpdate',
    component: CoverLetterUpdate,
    meta: {
      title: '잡아드림 | 자소서분석 수정'
    }
  },

  // FullCourse
  {
    path: '/fullcourses/list',
    name: 'FullCourseList',
    component: FullCourseList,
    meta: {
      title: '잡아드림 | 풀코스분석'
    }
  },
  {
    path: '/fullcourses/create',
    name: 'FullCourseCreate',
    component: FullCourseCreate,
    meta: {
      title: '잡아드림 | 풀코스분석 시작'
    }
  },
  {
    path: '/fullcourses/detail/:id',
    name: 'FullCourseDetail',
    component: FullCourseDetail,
    meta: {
      title: '잡아드림 | 풀코스분석 결과'
    }
  },

  // Video
  {
    path: '/videos/list',
    name: 'VideoList',
    component: VideoList,
    meta: {
      title: '잡아드림 | 영상분석'
    }
  },
  {
    path: '/videos/create',
    name: 'VideoCreate',
    component: VideoCreate,
    meta: {
      title: '잡아드림 | 영상분석 시작'
    }
  },
  {
    path: '/videos/_create',
    name: '_VideoCreate',
    component: _VideoCreate,
    meta: {
      title: '잡아드림 | 영상분석 시작'
    }
  },
  {
    path: '/videos/detail/:id',
    name: 'VideoDetail',
    component: VideoDetail,
    meta: {
      title: '잡아드림 | 영상분석 결과'
    }
  },

  // Youtube
  {
    path: '/youtubes/list',
    name: 'YoutubeList',
    component: YoutubeList,
    meta: {
      title: '잡아드림 | 면접 참고 영상'
    }
  },
  {
    path: '/youtubes/detail/:id',
    name: 'YoutubeDetail',
    component: YoutubeDetail,
    meta: {
      title: '잡아드림 | 면접 참고 영상 보기'
    }
  },

  // Result
  {
    path: '/results',
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
