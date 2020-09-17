<template>
  <div>
    <Login />
    <router-link to="/signup">회원가입</router-link>
  </div>
</template>

<script>
import Login from '../components/auth/Login'

export default {
  name: "Home",
  components: {
    Login,
  },
}
</script>

<style>

</style>
