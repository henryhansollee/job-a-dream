<template>
  <div>
    <v-btn icon @click="logout()">
      로그아웃
    </v-btn>
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