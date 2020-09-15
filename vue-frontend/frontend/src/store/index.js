import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import cookies from "vue-cookies";
import router from "../router";

const BACK_URL = "http://127.0.0.1:8080";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authToken: cookies.get("auth-token"),
    isLoggedin: false,

    userData: {
      username: "",
      email: "",
      password: ""
    }
  },

  mutations: {
    SET_TOKEN(state, token) {
      router.push("/ilist");
      state.authToken = token;
      cookies.set("auth-token", token, 0);
      state.isLoggedin = true;
    },

    REMOVE_TOKEN(state) {
      if (state.adminToken) {
        cookies.remove("admin-token");
        state.adminToken = null;
      }
      state.authToken = null;
      cookies.remove("auth-token");
      state.isLoggedin = false;
      state.modal = true;
      router.push("/");
    },
    loginCheck(state) {
      if (!state.authToken) {
        state.isLoggedin = true;
      } else {
        state.isLoggedin = false;
      }
    }
  },

  actions: {
    logIn({ commit }, loginData) {
      axios
        .post(`${BACK_URL}/rest-auth/login/`, loginData)
        .then(response => {
          console.log(response);
          commit("SET_TOKEN", response.data.authToken);
        })
        .catch(err => {
          console.log(err);
        });
    },
    signUp({ commit }, signupData) {
      axios
        .post(`${BACK_URL}/rest-auth/signup/`, signupData)
        .then(response => {
          commit("SET_TOKEN", response.data);
          router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  modules: {}
});
