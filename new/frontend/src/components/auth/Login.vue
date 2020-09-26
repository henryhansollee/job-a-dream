<template>
  <div class="main-font login-block">
    <h3 class="text-center mb-4" style="margin-top: 36px">로그인</h3>
    <div class="login-inner-block">
      <div class="d-flex flex-column">
        <input
          type="email"
          :placeholder="email"
          v-model="loginData.email"
          class="mb-1"
          style="height:45px; font-family: fontawesome, 'Do Hyeon', sans-serif;"
        />
        <input
          type="password"
          :placeholder="password"
          v-model="loginData.password"
          class="mb-1 main-font"
          style="height: 45px; margin-top: 1px; font-family: fontawesome, 'Do Hyeon', sans-serif;"
        />
        <button
          variant="dark"
          @click="login(loginData)"
          class="mb-1 mt-4"
          style="height: 45px"
        >로그인</button>
      <v-btn
        color="primary"
        dark
        @click.stop="dialog = true"
      >
        회원가입
      </v-btn>

      <div class="signup-block main-font">
        <div class="signup-inner-block d-flex flex-column">
          <h3 class="text-center main-font mb-3 mt-4">회원가입</h3>
          <div class="d-flex flex-column">
            <input
              type="text"
              placeholder="이름"
              v-model="signupData.username"
              class="mb-1"
              style="font-family: fontawesome, 'Do Hyeon', sans-serif;"
            />
            <input
              type="email"
              placeholder="이메일"
              v-model="signupData.email"
              class="mb-1"
              style="font-family: fontawesome, 'Do Hyeon', sans-serif;"
            />
            <input
              type="password"
              placeholder="패스워드"
              v-model="signupData.password"
              class="mb-1"
              style="font-family: fontawesome, 'Do Hyeon', sans-serif;"
            />
            <button variant="dark" @click="signup(signupData)" class="mb-1 mt-3">회원가입</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "\uf0e0" + "  이메일",
      password: "\uf084" + "  패스워드",
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
  width: 45%;
  height: 25rem;
  background-color: #fffcf0;
  max-width: 500px;
  border-radius: 4px;
}
.login-inner-block {
  margin-top: 30px;
  margin-left: 13.5%;
  width: 75%;
  height: 10rem;
  background-color: #fffcf0;
}
.text-none {
  text-decoration: none;
  color: rgb(34, 29, 29);
}
.text-none:hover {
  text-decoration: none;
  color: rgb(19, 16, 16);
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
.cta {
  position: relative;
  margin: auto;
  padding: 17px 22px;
  transition: all 0.2s ease;
  background-color: transparent;
  border: none;
  outline: none;
}
.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 28px;
  background: #ffffff;
  opacity: 0.8;
  width: 56px;
  height: 56px;
  transition: all 0.3s ease;
}
.cta > span {
  position: relative;
  font-size: 20px;
  line-height: 18px;
  font-weight: 900;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  vertical-align: middle;
}
.Svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: black;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}
.cta:hover::before {
  width: 100%;
  background: #ffffff;
  opacity: 0.95;
}
.cta:hover .Svg {
  transform: translateX(0);
}
.cta:active {
  transform: scale(0.96);
}
</style>
