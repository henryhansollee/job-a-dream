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
    questions: [],
    videos: [],
    audios: [],
    coverletters: [],
    fullcourses: [],
    results: [],
  },

  getters: {
    isLoggedIn: (state) => !!state.accessToken || !!state.authCheck,
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
    GET_QUESTIONS(state, questions) {
      state.questions = questions;
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

    // 질문 리스트
    getQuestions({ getters, commit }) {
      axios
        .get(
          BACKEND.URL + BACKEND.ROUTES.interview + "questions",
          getters.config
        )
        .then((response) => {
          console.log(response, "질문 리스트");
          commit("GET_QUESTIONS", response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 질문 추가
    createQuestion({ getters }, questionData) {
      axios
        .post(
          BACKEND.URL + BACKEND.ROUTES.interview + "questions",
          questionData,
          getters.config
        )
        .then(() => {
          console.log("질문 추가 성공");
        })
        .catch((err) => console.log(err));
    },
    // 질문 삭제
    deleteQuestion({ getters }, question_id) {
      axios
        .delete(
          BACKEND.URL + BACKEND.ROUTES.interview + `${question_id}`,
          getters.config
        )
        .then(() => {
          console.log('삭제완료')
        })
        .catch((err) => {
          console.log(err);
        });
    },
    


  },
  modules: {
  }
})
