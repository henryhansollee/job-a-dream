<template>
  <div>
    <h1>Home</h1>
    <Login />
    <Logout />
    <router-link to="/signup">회원가입</router-link>
  </div>
</template>

<script>
import Login from '../components/auth/Login'
import Logout from '../components/auth/Logout'

export default {
  name: "Home",
  components: {
    Login,
    Logout
  },
}
</script>

<style>

</style>
