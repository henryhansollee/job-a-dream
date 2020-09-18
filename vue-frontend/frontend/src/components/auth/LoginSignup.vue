<template>
  <div class="login-block">
    <h3 class="text-center pt-5">Login</h3>
    <div class="inner-block">
      <div class="d-flex flex-column">
        <input class="m-1" type="email" placeholder="email" v-model="loginData.email">
        <input class="m-1" type="password" placeholder="password" v-model="loginData.password">
        <router-link v-if="isLoggedIn" to="/interview/list" class="m-1">시작하기</router-link>
        <button v-else class="m-1" @click="login(loginData)">로그인</button>
        <b-button v-b-modal.modal-1>회원가입</b-button>
      </div>
    </div>
    <div>
      <b-modal id="modal-1" title="BootstrapVue">
        <div>
          <input type="text" placeholder="username" v-model="signupData.username">
          <input type="email" placeholder="email" v-model="signupData.email">
          <input type="password" placeholder="password1" v-model="signupData.password">
          <button @click="signup(signupData)">회원가입</button>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "Login",
  data() {
    return {
      loginData: {
        email: '',
        password: '',
      },
      signupData: {
        username: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions(['login', 'signup'])
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
}
</script>

<style>
.login-block {
  width: 25rem;
  height: 20rem;
  background-color: #fffcf0;
}
.inner-block {
  margin-left: 20%;
  width: 15rem;
  height: 10rem;
  background-color: #fffcf0;
}
</style>