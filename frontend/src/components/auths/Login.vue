<template>
  <div class="main-font login-block">
    <h3 class="text-center mt-5 mb-4" style="margin-top: 36px;">로그인</h3>
    <div class="login-inner-block">
      <div class="d-flex flex-column">
        <b-form-input
          type="email"
          :placeholder="email"
          v-model="loginData.email"
          class="mb-1 mt-2"
          style="height:45px; font-family: fontawesome, 'Do Hyeon', sans-serif;"
        />
        <b-form-input
          type="password"
          :placeholder="password1"
          v-model="loginData.password"
          class="mb-1 main-font"
          style="height: 45px; margin-top: 1px; font-family: fontawesome, 'Do Hyeon', sans-serif;"
        />
        <b-button
          variant="dark"
          @click="login(loginData)"
          class="mb-1 mt-1"
          style="height: 45px"
          >로그인</b-button
        >
        <div class="d-flex justify-content-between mt-1">
          <small class="mt-1">아직 회원이 아니신가요?</small>
          <a v-b-modal.modal-1>회원가입</a>
        </div>
      </div>
    </div>
    <div class="main-font">
      <b-modal id="modal-1" title="BootstrapVue" hide-header hide-footer>
        <div class="signup-block main-font">
          <div class="signup-inner-block d-flex flex-column">
            <h3 class="text-center main-font mb-4 mt-4">회원가입</h3>
            <div class="d-flex flex-column">
              <b-form-input
                type="text"
                :placeholder="username"
                v-model="signupData.username"
                class="mb-1"
                style="font-family: fontawesome, 'Do Hyeon', sans-serif;"
              />
              <b-form-input
                type="email"
                :placeholder="email"
                v-model="signupData.email"
                class="mb-1"
                style="font-family: fontawesome, 'Do Hyeon', sans-serif;"
              />
              <b-form-input
                type="password"
                :placeholder="password1"
                v-model="passwordData.password1"
                class="mb-1"
                style="font-family: fontawesome, 'Do Hyeon', sans-serif;"
              />
              <b-form-input
                type="password"
                :placeholder="password2"
                v-model="passwordData.password2"
                class="mb-1"
                style="font-family: fontawesome, 'Do Hyeon', sans-serif;"
              />
              <b-button
                variant="dark"
                @click="signupCheck()"
                class="mb-1 mt-1"
                >회원가입</b-button
              >
              <div class="d-flex justify-content-between mt-1">
                <small class="mt-1">이미 회원이신가요?</small>
                <a class="text-dark text-decoration-none" href="/">로그인</a>
              </div>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Swal from 'sweetalert2'

export default {
  name: "Login",
  data() {
    return {
      username: "\uf007" + "  이름",
      email: "\uf0e0" + "  이메일",
      password1: "\uf084" + "  비밀번호",
      password2: "\uf084" + "  비밀번호 확인",
      passwordData: {
        password1: '',
        password2: '',
      },
      loginData: {
        email: "",
        password: "",
      },
      signupData: {
        username: "",
        email: "",
        password: "",
      },
      dialog: false,
    };
  },
  computed: {
    ...mapState(["authCheck"]),
  },
  methods: {
    ...mapActions(["login", "signup", "getUser"]),
    signupCheck() {
      if (this.passwordData.password1 === this.passwordData.password2) {
        this.signupData.password = this.passwordData.password1;
        this.signup(this.signupData)
        Swal.fire({
          text: '회원가입이 되었습니다.',
          icon: 'success',
        })
      } else {
        Swal.fire({
          text: '비밀번호가 일치하지 않습니다.',
          icon: 'error',
        })
      }
    }
  },
};
</script>

<style>
.login-block {
  width: 35%;
  height: 23rem;
  background-color: white;
  max-width: 500px;
  border-radius: 4px;
}
.login-inner-block {
  margin-top: 30px;
  margin-left: 13.5%;
  width: 75%;
  height: 7rem;
  background-color: white;
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
  height: 23rem;
  background-color: white;
}
.signup-inner-block {
  margin-left: 25%;
  width: 50%;
  height: 15rem;
  background-color: white;
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
