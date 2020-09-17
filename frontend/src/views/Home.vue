<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section home-section1">
        <Login />
      </div>
      <div class="section home-section2">
      </div>
      <div class="section home-section3">
      </div>
      <div class="section home-section4">
      </div>
    </full-page>
  </div>
</template>

<script>
import Login from '../components/auth/Login'

export default {
  name: "Home",
  components: {
    Login,
  },
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
      }
    }
  }
}
</script>

<style>
.home-section1 {
  background-color: #fcbe32;
}
.home-section2 {
  background-color: #fffcf0;
}
.home-section3 {
  background-color: #5e5e5f;
}
.home-section4 {
  background-color: #a79c8e;
}
</style>
