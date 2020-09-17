<template>
  <div class="login-block">
    <h3 class="text-center pt-5">Login</h3>
    <div class="inner-block">
      <div class="d-flex flex-column">
        <input class="m-1" type="email" placeholder="email" v-model="loginData.email">
        <input class="m-1" type="password" placeholder="password" v-model="loginData.password">
        <button class="m-1" @click="login(loginData)">로그인</button>
        <router-link class="text-right text-dark text-decoration-none" to="/signup">회원가입</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "Login",
  data() {
    return {
      loginData: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions(['login'])
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