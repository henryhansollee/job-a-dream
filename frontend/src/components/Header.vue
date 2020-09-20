<template>
  <div>
    <b-navbar class="main-navbar" toggleable="lg">
      <b-navbar-brand href="/interview/list">잡아드림</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/interview/list">면접</b-nav-item>
          <b-nav-item href="/community/list">커뮤니티</b-nav-item>
          <b-nav-item href="/profile">프로필</b-nav-item>
          <Logout />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Logout from '../components/auth/Logout'

export default {
  name: "Header",
  components: {
    Logout,
  }
}
</script>

<style>
.main-navbar {
  background-color: #fcbe32;
}
</style>