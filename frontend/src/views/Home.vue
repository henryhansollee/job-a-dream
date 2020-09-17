<template>
  <div>
    <Header />
    <Login />
    <Logout />
    <router-link to="/signup">회원가입</router-link>
  </div>
</template>

<script>
import Login from '../components/auth/Login'
import Logout from '../components/auth/Logout'
import Header from '../components/Header'

export default {
  name: "Home",
  components: {
    Login,
    Logout,
    Header,
  },
}
</script>

<style>

</style>
