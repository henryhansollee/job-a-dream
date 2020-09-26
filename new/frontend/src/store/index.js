import Vue from "vue";
import Vuex from "vuex";
import cookies from "vue-cookies";
import axios from "axios";
import BACKEND from "@/api/index";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: cookies.get("accessToken"),
    authCheck: "",
  },

  getters: {
    isLoggedIn: (state) => !!state.accessToken && !!state.authCheck,
    config: () => ({
      headers: { Authorization: `JWT ${cookies.get("accessToken")}` },
    }),
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.accessToken = token;
      cookies.set("accessToken", token);
    },
    SET_AUTH(state, id) {
      state.authCheck = id;
      cookies.set("authCheck", id);
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },

  actions: {
    // ----- AUTH -----

    // Auth
    getAuth({ commit }, info) {
      axios
        .post(BACKEND.URL + info.location, info.data)
        .then((res) => {
          console.log(res);
          commit("SET_TOKEN", res.data.token);
          commit("SET_AUTH", res.data.user.id);
          commit("SET_USER", res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // Signup
    signup({ dispatch }, signupData) {
      const info = {
        data: signupData,
        location: BACKEND.ROUTES.signup,
      };
      dispatch("getAuth", info);
      router.go();
    },

    // Login
    login({ dispatch }, loginData) {
      const info = {
        data: loginData,
        location: BACKEND.ROUTES.login,
      };
      dispatch("getAuth", info);
    },

    // Logout
    logout({ commit }) {
      commit("SET_TOKEN", null);
      commit("SET_AUTH", null);
      cookies.remove("accessToken");
      cookies.remove("authCheck");
      router.push({ name: "Home" });
      router.go();
    },
  },
  modules: {
  }
})
