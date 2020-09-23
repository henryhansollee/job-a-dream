<template>
  <div>
    <b-nav-item class="basic-size" @click="logout()">로그아웃</b-nav-item>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "logout",
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style>
</style>