import Vue from 'vue'
import Vuex from 'vuex'
import cookies from 'vue-cookies'
import axios from 'axios'
import BACKEND from '@/api/index'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: cookies.get('accessToken'),
    authCheck: '',
    interviews: [],
    communitys: [],
  },

  getters: {
    isLoggedIn: state => !!state.accessToken && !!state.authCheck,
    config: () => ({ headers: { Authorization: `JWT ${cookies.get('accessToken')}`}}),
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.accessToken = token
      cookies.set('accessToken', token) 
    },
    SET_AUTH(state, id) {
      state.authCheck = id
      cookies.set('authCheck', id)
    },
    SET_USER(state, user) {
      state.user = user
    },
    SET_INTERVIEWS(state, interviews) {
      state.interviews = interviews
    },
    SET_COMMUNITYS(state, communitys) {
      state.communitys = communitys
    },
  },

  actions: {
    // ----- AUTH -----

    // Auth
    getAuth({ commit }, info) {
      axios.post(BACKEND.URL + info.location, info.data)
        .then(res => {
          console.log(res)
          commit('SET_TOKEN', res.data.token)
          commit('SET_AUTH', res.data.user.id)
          commit('SET_USER', res.data.user)
        })
        .catch(err => {console.log(err)})
    },

    // Signup
    signup({ dispatch }, signupData) {
      const info = {
        data: signupData,
        location: BACKEND.ROUTES.signup
      }
      dispatch('getAuth', info)
      router.go()
    },

    // Login
    login({ dispatch }, loginData){
      const info = {  
        data: loginData,
        location: BACKEND.ROUTES.login
      }       
      dispatch('getAuth', info)
    },

    // Logout
    logout({ commit }) {
      commit('SET_TOKEN', null)
      commit('SET_AUTH', null)
      cookies.remove('accessToken')
      cookies.remove('authCheck')
      router.push({ name: 'Home'})
      router.go()
    },

    // ----- INTERVIEW -----
  
    // Interview List
    getInterviews() {},

    // Interview Create
    createInterview({ getters }, interviewData) {
      console.log(interviewData)
      axios.post(BACKEND.URL + BACKEND.ROUTES.interview, interviewData, getters.config)
      .then(() => {
        router.push('/interview/list/')
      })
      .catch(err => console.log(err))
    },

    // Interview Detail
    getInterview() {},

    // Interview Update
    updateInterview() {},

    // Interview Delete
    deleteInterview() {},

    // ----- COMMUNITY -----

    // Community List
    getCommunitys() {
      axios.get(BACKEND.URL + BACKEND.ROUTES.community)
        .then(res => this.commit('SET_COMMUNITYS', res.data))
        .catch(err => console.log(err))
    },

    // Community Create
    createCommunity({ getters }, communityData) {
      console.log(communityData)
      axios.post(BACKEND.URL + BACKEND.ROUTES.community, communityData, getters.config)
        .then(() => {
          router.push('/community/list')
        })
        .catch(err => console.log(err))
    },

    // Community Detail
    getCommunity({ getters, commit }, data) {
      axios.get(BACKEND.URL + BACKEND.ROUTES.community + `${data.id}`, getters.config)
        .then((res) => {
          commit('SET_COMMUNITYS', res.data)
        })
        .catch(err => console.log(err))
    },

    // Community Update
    updateCommunity({ getters}, data) {
      console.log(data)
      axios.put(BACKEND.URL + BACKEND.ROUTES.community + `${data.id}`, data.communityData, getters.config)
        .then(() => {
          router.push(`/community/detail/${data.id}`)
        })
        .catch(err => console.log(err))
    },
    
    // Community Delete
    deleteCommunity({ getters }, data) {
      console.log(data)
      axios.delete(BACKEND.URL + BACKEND.ROUTES.community + `${data.id}`, getters.config)
        .then(() => {
          router.push(`/community/list`)
          router.go()
        })
        .catch(err => console.log(err))
    },
  },
  modules: {
  }
})
