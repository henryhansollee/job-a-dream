<template>
  <div>
    <div class="login-input">
      <form>
        <h4 class="mb-4 our-main-font">관리자 로그인</h4>
        <div class="form-group mb-1">
          <div class="container">
            <input
              class="login-email"
              v-model="loginData.email"
              id="email"
              placeholder="email"
              type="email"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="container">
            <input
              class="login-pw"
              v-model="loginData.password"
              type="password"
              placeholder="password"
              @keypress.enter="logIn(loginData)"
            />
          </div>
        </div>
      </form>
      <div class="login-sumit">
        <div class="container mb-3">
          <button
            type="submit"
            class="submit-btn"
            @click="logIn(loginData)"
            data-dismiss="modal"
          >로그인</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      loginData: {
        email: '',
        password: '',
      }
    }
  },
  methods:{
    ...mapActions(['logIn'])
  }
};
</script>

<style>

</style>