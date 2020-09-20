<template>
  <div class="login-block">
    <h3 class="text-center pt-5 mb-3">로그인</h3>
    <div class="inner-block">
      <router-link v-if="isLoggedIn" to="/interview/list/" class="m-1">시작하기</router-link>
      <div v-else class="d-flex flex-column">
        <b-form-input type="email" placeholder="이메일" v-model="loginData.email" class="mb-1" />
        <b-form-input type="password" placeholder="패스워드" v-model="loginData.password" class="mb-1" />
        <b-button variant="dark" @click="login(loginData)" class="mb-1">로그인</b-button>
        <b-button v-b-modal.modal-1 variant="light" class="mb-1">회원가입</b-button>
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
    ...mapGetters(["isLoggedIn"]),
  },
}
</script>

<style>
.login-block {
  width: 70%;
  height: 20rem;
  background-color: #fffcf0;
  max-width: 500px;
}
.inner-block {
  margin-left: 20%;
  width: 60%;
  height: 10rem;
  background-color: #fffcf0;
}
</style>