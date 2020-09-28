export default {
  URL: process.env.VUE_APP_BACKEND,
  // URL: 'http://j3b107.p.ssafy.io:8000',

  ROUTES: {
    user: "/accounts/",
    signup: "/accounts/signup/",
    login: "/accounts/login/",
    logout: "/accounts/logout/",
    questions: "/questions/",
    videos: "/videos/",
    audios: "/audios/",
    coverletters: "/boards/",
    fullcourses: "/fullcourses/",
    results: "/results/",
  },
};
