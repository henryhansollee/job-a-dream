export default {
  URL: process.env.VUE_APP_BACKEND,
  ROUTES: {
    signup: "/accounts/signup/",
    login: "/accounts/login/",
    logout: "/accounts/logout/",
    community: "/boards/",
    interview: "/videos/",
  },
};
