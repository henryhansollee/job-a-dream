<template>
  <div>
    <button @click="logout()">로그아웃</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "logout",
  methods: {
    ...mapActions(['logout']),
  },
}
</script>

<style>

</style>