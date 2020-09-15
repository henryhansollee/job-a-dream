<template>
  <div>
    <form>
      <h4>로그인</h4>
      <input v-model="loginData.email" placeholder="email" type="email" />
      <input
        v-model="loginData.password"
        type="password"
        placeholder="password"
        @keypress.enter="logIn(loginData)"
      />
    </form>
    <button type="submit" class="submit-btn" @click="logIn(loginData)">
      로그인
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      loginData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["logIn"])
  }
};
</script>

<style>

</style>
