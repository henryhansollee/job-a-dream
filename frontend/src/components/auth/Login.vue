<template>
  <div>
    <h1>Login</h1>
    <div>
      <input type="email" placeholder="email" v-model="loginData.email">
      <input type="password" placeholder="password" v-model="loginData.password">
      <button @click="login(loginData)">로그인</button>
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

</style>