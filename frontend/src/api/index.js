export default {
  URL: process.env.VUE_APP_BACKEND,
  // URL: 'http://j3b107.p.ssafy.io:8080',
  // URL: 'http://localhost:8080',
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
