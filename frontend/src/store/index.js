import Vue from 'vue'
import Vuex from 'vuex'
import cookies from 'vue-cookies'
import axios from 'axios'
import BACKEND from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    SET_TOKEN(state, token){
      state.authToken = token
      cookies.set('auth-token', token) 
    }, 
  },
  actions: {
    authData({ commit }, info) {
      axios.post(BACKEND.URL + info.location, info.data)
        .then(res => {
          console.log(res)
          commit('SET_TOKEN', res.data.token)
        })
        .catch(
          err => {console.log(err)})
    },
    signup({ dispatch }, signupData) {
      const info = {
        data: signupData,
        location: BACKEND.ROUTES.signup
      }
      dispatch('authData', info)
    },
    login( { dispatch }, loginData){
      const info = {  
        data: loginData,
        location: BACKEND.ROUTES.login
      }       
      dispatch('authData', info)
    },
  },
  modules: {
  }
})
