import Vue from "vue";
import Vuex from "vuex";
import cookies from "vue-cookies";
import axios from "axios";
import BACKEND from "@/api/index";
import router from "@/router";
import Swal from "sweetalert2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: cookies.get("accessToken"),
    authCheck: "",
    user: "",
    userInfo: "",
    questions: [],
    videos: [],
    audios: [],
    coverletters: [],
    fullcourses: [],
    results: [],
    videoResult: "",
    audioResult: "",
    coverletterResult: "",
    fullcourseResult: "",
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
      // Swal.fire({
      //   text: "환영합니다.",
      //   icon: "success",
      // });
    },
    SET_USER(state, user) {
      state.user = user;
    },
    GET_USER(state, userInfo) {
      state.userInfo = userInfo;
    },
    GET_QUESTIONS(state, questions) {
      state.questions = questions;
    },
    GET_VIDEOS(state, videos) {
      state.videos = videos;
    },
    GET_VIDEO_RESULT(state, videoResult) {
      state.videoResult = videoResult;
    },
    GET_AUDIOS(state, audios) {
      state.audios = audios;
    },
    GET_AUDIO_RESULT(state, audioResult) {
      state.audioResult = audioResult;
    },
    GET_COVERLETTERS(state, coverletters) {
      state.coverletters = coverletters;
    },
    GET_COVERLETTER_RESULT(state, coverletterResult) {
      state.coverletterResult = coverletterResult;
    },
    GET_FULLCOURSES(state, fullcourses) {
      state.fullcourses = fullcourses;
    },
    GET_FULLCOURSE_RESULT(state, fullcourseResult) {
      state.fullcourseResult = fullcourseResult;
    },
    GET_RESULTS(state, results) {
      state.results = results;
    },
    EDIT_TAGS(state, tags) {
      state.tags = tags;
    },
  },

  actions: {
    getAuth({ commit, dispatch }, info) {
      axios
        .post(BACKEND.URL + info.location, info.data)
        .then((res) => {
          commit("SET_TOKEN", res.data.token);
          commit("SET_AUTH", res.data.user.id);
          commit("SET_USER", res.data.user);
          dispatch("getUser");
          router.push("/about");
          router.go();
        })
        .catch((err) => {
          Swal.fire({
            text: "입력 정보를 확인하세요.",
            icon: "error",
          });
          console.log(err);
        });
    },

    getUser({ getters, commit }) {
      axios
        .get(BACKEND.URL + BACKEND.ROUTES.user, getters.config)
        .then((response) => {
          commit("GET_USER", response.data);
        })
        .catch((error) => {console.log(error);});
    },

    signup({ dispatch }, signupData) {
      const info = {
        data: signupData,
        location: BACKEND.ROUTES.signup,
      };
      dispatch("getAuth", info);
      router.go();
    },

    login({ dispatch }, loginData) {
      const info = {
        data: loginData,
        location: BACKEND.ROUTES.login,
      };
      dispatch("getAuth", info);
    },

    logout({ commit }) {
      commit("SET_TOKEN", null);
      commit("SET_AUTH", null);
      cookies.remove("accessToken");
      cookies.remove("authCheck");
      router.push('/');
      router.go();
    },

    updateUser({ getters }, updatedUserData) {
      console.log(updatedUserData);
      axios
        .put(
          BACKEND.URL + BACKEND.ROUTES.user + `${cookies.get("authCheck")}`,
          updatedUserData,
          getters.config
        )
        .then(() => {
          router.go();
        })
        .catch((error) => {console.log(error)});
    },

    getQuestions({ getters, commit }) {
      axios
        .get(BACKEND.URL + BACKEND.ROUTES.questions, getters.config)
        .then((response) => {
          commit("GET_QUESTIONS", response.data);
        })
        .catch((error) => {console.log(error)});
    },

    createQuestion({ getters }, questionData) {
      axios
        .post(
          BACKEND.URL + BACKEND.ROUTES.questions,
          questionData,
          getters.config
        )
        .then(() => {})
        .catch((error) => console.log(error));
    },

    deleteQuestion({ getters, commit }, question_id) {
      axios
        .delete(
          BACKEND.URL + BACKEND.ROUTES.questions + `${question_id}`,
          getters.config
        )
        .then(() => {
          axios
            .get(BACKEND.URL + BACKEND.ROUTES.questions, getters.config)
            .then((response) => {
              commit("GET_QUESTIONS", response.data);
            })
            .catch((error) => {console.log(error)});
        })
        .catch((error) => {console.log(error)});
    },

    getVideos({ getters, commit }) {
      axios
        .get(BACKEND.URL + BACKEND.ROUTES.videos, getters.config)
        .then((response) => {
          commit("GET_VIDEOS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    createVideo({ getters }, videoData) {
      axios
        .post(BACKEND.URL + BACKEND.ROUTES.videos, videoData, getters.config)
        .then(() => {
          router.push("/videos/list/");
        })
        .catch((error) => {console.log(error);});
    },

    getVideoResult({ getters, commit }, video_id) {
      axios
        .get(
          BACKEND.URL + BACKEND.ROUTES.videos + `${video_id}`,
          getters.config
        )
        .then((response) => {
          commit("GET_VIDEO_RESULT", response.data);
        })
        .catch((error) => {console.log(error)});
    },

    deleteVideo({ getters }, video_id) {
      axios
        .delete(
          BACKEND.URL + BACKEND.ROUTES.videos + `${video_id}`,
          getters.config
        )
        .then(() => {
          router.push(`/videos/list/`);
          router.go();
        })
        .catch((error) => {console.log(error)});
    },

    getAudios({ getters, commit }) {
      axios
        .get(BACKEND.URL + BACKEND.ROUTES.audios, getters.config)
        .then((response) => {
          commit("GET_AUDIOS", response.data);
        })
        .catch((error) => {console.log(error);});
    },

    createAudio({ getters }, audioData) {
      axios
        .post(BACKEND.URL + BACKEND.ROUTES.audios, audioData, getters.config)
        .then(() => {
          router.push("/audios/list/");
        })
        .catch((error) => {console.log(error)});
    },

    getAudioResult({ getters, commit }, audio_id) {
      axios
        .get(
          BACKEND.URL + BACKEND.ROUTES.audios + `${audio_id}`,
          getters.config
        )
        .then((response) => {
          commit("GET_AUDIO_RESULT", response.data);
        })
        .catch((error) => {console.log(error)});
    },

    deleteAudio({ getters }, audio_id) {
      axios
        .delete(
          BACKEND.URL + BACKEND.ROUTES.audios + `${audio_id}`,
          getters.config
        )
        .then(() => {
          router.push(`/audios/list/`);
          router.go();
        })
        .catch((error) => {console.log(error)});
    },

    getCoverletters({ getters, commit }) {
      axios
        .get(BACKEND.URL + BACKEND.ROUTES.coverletters, getters.config)
        .then((response) => {
          commit("GET_COVERLETTERS", response.data);
        })
        .catch((error) => {console.log(error)});
    },

    createCoverletter({ getters }, coverletterData) {
      axios
        .post(
          BACKEND.URL + BACKEND.ROUTES.coverletters,
          coverletterData,
          getters.config
        )
        .then(() => {
          router.push("/coverletters/list/");
        })
        .catch((error) => {console.log(error)});
    },

    getCoverletterResult({ getters, commit }, coverletter_id) {
      axios
        .get(
          BACKEND.URL + BACKEND.ROUTES.coverletters + `${coverletter_id}`,
          getters.config
        )
        .then((response) => {
          commit("GET_COVERLETTER_RESULT", response.data);
        })
        .catch((error) => {console.log(error)});
    },

    updateCoverletter({ getters }, updatedCoverletterData) {
      axios
        .put(
          BACKEND.URL +
            BACKEND.ROUTES.coverletters +
            `${updatedCoverletterData.id}`,
          updatedCoverletterData,
          getters.config
        )
        .then(() => {
          router.push(`/coverletters/detail/${updatedCoverletterData.id}`);
        })
        .catch((error) => {console.log(error);});
    },

    deleteCoverletter({ getters }, coverletter_id) {
      axios
        .delete(
          BACKEND.URL + BACKEND.ROUTES.coverletters + `${coverletter_id}`,
          getters.config
        )
        .then(() => {
          router.push(`/coverletters/list/`);
          router.go();
        })
        .catch((error) => {console.log(error)});
    },

    getFullcourses({ getters, commit }) {
      axios
        .get(BACKEND.URL + BACKEND.ROUTES.fullcourses, getters.config)
        .then((response) => {
          commit("GET_FULLCOURSES", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    createFullcourse({ getters }, fullcourseData) {
      axios
        .post(
          BACKEND.URL + BACKEND.ROUTES.fullcourses,
          fullcourseData,
          getters.config
        )
        .then(() => {
          router.push("/fullcourses/list/");
        })
        .catch((error) => {console.log(error)});
    },

    getFullcourseResult({ getters, commit }, fullcourse_id) {
      axios
        .get(
          BACKEND.URL + BACKEND.ROUTES.fullcourses + `${fullcourse_id}`,
          getters.config
        )
        .then((response) => {
          commit("GET_FULLCOURSE_RESULT", response.data);
        })
        .catch((error) => {console.log(error);});
    },

    deleteFullcourse({ getters }, fullcourse_id) {
      axios
        .delete(
          BACKEND.URL + BACKEND.ROUTES.fullcourses + `${fullcourse_id}`,
          getters.config
        )
        .then(() => {
          router.push(`/fullcourses/list/`);
          router.go();
        })
        .catch((error) => {console.log(error)});
    },

    getResults({ getters, commit }) {
      axios
        .get(BACKEND.URL + BACKEND.ROUTES.results, getters.config)
        .then((response) => {
          commit("SET_RESULTS", response.data);
        })
        .catch((error) => {console.log(error)});
    },
  },
});