<template>
  <div>
    <Header />
    <h1>SignupView</h1>
    <div>
      <input type="text" placeholder="username" v-model="signupData.username">
      <input type="email" placeholder="email" v-model="signupData.email">
      <input type="password" placeholder="password1" v-model="signupData.password">
      <button @click="signup(signupData)">회원가입</button>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import { mapActions } from "vuex";

export default {
  name: "SignupView",
  components: {
    Header,
  },
  data() {
    return {
      signupData: {
        username: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions(["signup"]),
  }
};

</script>

<style>

</style>