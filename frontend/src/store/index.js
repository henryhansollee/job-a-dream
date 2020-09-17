import Vue from 'vue'
import Vuex from 'vuex'
import cookies from 'vue-cookies'
import axios from 'axios'
import BACKEND from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: cookies.get('accessToken'),
  },
  getters: {
    isLoggedIn: state => !!state.accessToken,
    config: () => ({ headers: { Authorization: `JWT ${cookies.get('accessToken')}`}}),
  },
  mutations: {
    SET_TOKEN(state, token){
      state.accessToken = token
      cookies.set('accessToken', token) 
    }, 
  },
  actions: {
    authData({ commit }, info) {
      axios.post(BACKEND.URL + info.location, info.data)
        .then(res => {
          console.log(res)
          commit('SET_TOKEN', res.data.token)
        })
        .catch(err => {console.log(err)})
    },

    // 회원가입
    signup({ dispatch }, signupData) {
      const info = {
        data: signupData,
        location: BACKEND.ROUTES.signup
      }
      dispatch('authData', info)
    },

    // 로그인
    login( { dispatch }, loginData){
      const info = {  
        data: loginData,
        location: BACKEND.ROUTES.login
      }       
      dispatch('authData', info)
    },

    // 로그아웃
    logout({ commit }) {
      axios.post(BACKEND.URL + BACKEND.ROUTES.logout)
        .then( ()=> {
          commit('SET_TOKEN', null)
          cookies.remove('accessToken')
        })
        .catch(err => console.log(err))
    },
  },
  modules: {
  }
})
