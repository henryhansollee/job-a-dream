<template>
  <div class="d-flex justify-content-between align-items-center inner-box">
    <img src="@/assets/img/home-logo.jpg" alt="home-logo" class="home-logo mr-5" />
    <LoginSignup class="ml-5" />
  </div>
</template>

<script>
import LoginSignup from "../auth/LoginSignup";

export default {
  name: "HomeSection1",
  components: {
    LoginSignup,
  },
};
</script>

<style>
.inner-box {
  height: 100%;
  padding-left: 15%;
  padding-right: 15%;
}
.home-logo {
  width: 40%;
}
</style>