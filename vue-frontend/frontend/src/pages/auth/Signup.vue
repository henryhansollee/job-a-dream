<template>
  <div class="wrapC table">
    <div class="middle mt-4">
      <h2 class="join">회원가입</h2>
      <input type="username" placeholder="username" v-model="signupData.username">
      <input type="email" placeholder="email" v-model="signupData.email">
      <input type="password" placeholder="password1" v-model="signupData.password1">
      <input type="password" placeholder="password2" v-model="signupData.password2">
      <div class="form-wrap">
        <button @click="signUp(signupData)">
          <span class="click">가입완료</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Signup",
  data() {
    return {
      signupData: {
        username: '',
        email: '',
        password1: '',
        password2: '',
      }
    };
  },

  methods: {
    ...mapActions([ "signUp" ]),
  },
};
</script>

<style>

</style>
