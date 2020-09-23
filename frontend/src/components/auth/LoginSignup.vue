<template>
  <router-link v-if="isLoggedIn" to="/interview/list/" class="btn btn-dark main-font mr-5">시작하기</router-link>
  <div v-else class="main-font login-block">
    <h3 class="text-center pt-5 mb-4">로그인</h3>
    <div class="login-inner-block">
      <div class="d-flex flex-column">
        <b-form-input type="email" placeholder="이메일" v-model="loginData.email" class="mb-1" />
        <b-form-input type="password" placeholder="패스워드" v-model="loginData.password" class="mb-1" />
        <b-button variant="dark" @click="login(loginData)" class="mb-1 mt-3">로그인</b-button>
        <b-button v-b-modal.modal-1 variant="light" class="mb-1">회원가입</b-button>
      </div>
    </div>
    <div class="main-font">
      <b-modal id="modal-1" title="BootstrapVue" hide-header hide-footer>
        <div class="signup-block main-font">
          <div class="signup-inner-block d-flex flex-column">
            <h3 class="text-center main-font mb-3 mt-4">회원가입</h3>
            <div class="d-flex flex-column">
              <b-form-input
                type="text"
                placeholder="이름"
                v-model="signupData.username"
                class="mb-1"
              />
              <b-form-input type="email" placeholder="이메일" v-model="signupData.email" class="mb-1" />
              <b-form-input
                type="password"
                placeholder="패스워드"
                v-model="signupData.password"
                class="mb-1"
              />
              <b-button variant="dark" @click="signup(signupData)" class="mb-1 mt-3">회원가입</b-button>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
      signupData: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["login", "signup"]),
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style>
.login-block {
  width: 70%;
  height: 20rem;
  background-color: #fffcf0;
  max-width: 500px;
}
.login-inner-block {
  margin-left: 20%;
  width: 60%;
  height: 10rem;
  background-color: #fffcf0;
}
.signup-block {
  margin: 0;
  width: 100%;
  height: 17rem;
  background-color: #fffcf0;
}
.signup-inner-block {
  margin-left: 25%;
  width: 50%;
  height: 10rem;
  background-color: #fffcf0;
}
</style>