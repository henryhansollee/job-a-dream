<template>
  <div class="mr-5">
    <v-btn icon @click="logout()" style="width: 70px; font-size:medium">
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
