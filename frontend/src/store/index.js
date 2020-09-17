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
          commit('SET_TOKEN', res.data.key)
          commit('SET_USER_ID', res.data.user)
        })
        .catch(
          err => {
            console.log(err)
          }
        )
    },
    signup({ dispatch }, signupData) {
      const info = {
        data: signupData,
        location: BACKEND.ROUTES.signup
      }
      dispatch('authData', info)
    },
  },
  modules: {
  }
})
