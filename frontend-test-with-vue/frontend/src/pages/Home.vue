<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section fullpage-section1">
        <Login />
      </div>
      <div class="section fullpage-section2"></div>
      <div class="section fullpage-section3"></div>
      <div class="section fullpage-section4"></div>
    </full-page>
  </div>
</template>

<script>
import Login from "../components/auth/Login";

export default {
  name: "Home",
  components: {
    Login
  },
  data() {
    return {
      options: {
        afterLoad: this.afterLoad
      }
    };
  }
};
</script>

<style>
.fullpage-section1 {
  background-color: #FFB471;
}
.fullpage-section2 {
  background-color: #EB8F90;
}
.fullpage-section3 {
  background-color: #ADBED2;
}
.fullpage-section4 {
  background-color: #12406A;
}
</style>
