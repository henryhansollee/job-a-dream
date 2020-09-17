<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">잡아드림</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">면접</b-nav-item>
          <b-nav-item href="#">커뮤니티</b-nav-item>
          <b-nav-item href="#">프로필</b-nav-item>
          <b-nav-item href="#">로그아웃</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style>

</style>