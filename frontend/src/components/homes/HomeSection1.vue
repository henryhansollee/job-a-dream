<template>
  <div class="d-flex justify-content-between inner-box">
    <div class="d-flex flex-column">
      <h1 class="text-white" style="font-size: 80px">잡아드림으로!</h1>
      <h1 class="text-white" style="font-size: 80px">꽉, 잡아!</h1>
      <h1 class="text-white" style="font-size: 80px">너의 DREAM!</h1>
      <h5 class="text-white"># 취업 뽀개기!</h5>
      <h5 class="text-white"># 잡아드림에서 연습하자!</h5>
    </div>
    <Login style="margin-top: 9%" />
  </div>
</template>

<script>
import Login from "../auths/Login";

export default {
  name: "HomeSection1",
  components: {
    Login,
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
