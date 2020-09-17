<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <Login />
        <router-link to="/signup">회원가입</router-link>
      </div>
      <div class="section">
        <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">Prev</button>
        Section 2
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

</style>
