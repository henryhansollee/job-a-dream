export default {
  URL: process.env.VUE_APP_BACKEND,
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
    results: "/results",
  },
};
