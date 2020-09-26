<template>
  <div>
    <li class="basic-size" @click="logout()">로그아웃</li>
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