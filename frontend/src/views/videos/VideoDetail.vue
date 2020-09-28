<template>
  <div>
    <h4>{{ videoResult.title }}</h4>
    <h5>{{ videoResult.question }}</h5>
    <h6>{{ cutDate(videoResult.created_at) }}</h6>
    <div v-for="tag in videoResult.tag" :key="tag">#{{ tag }}</div>

    <video controls>
      <source :src="videoResult.video_file" />
    </video>
    <router-link class="text-decoration-none" to="/videos/list">
      <v-btn medium color="warning" dark>목록으로</v-btn>
    </router-link>

    <v-btn medium color="danger" dark @click="deleteVideo(videoResult.id)"
      >삭제</v-btn
    >
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["videoResult"]),
  },
  methods: {
    ...mapActions(["getVideoResult", "deleteVideo"]),
    cutDate(date) {
      let CD = date + "";
      const year = CD.substring(0, 4) + ".";
      const month = CD.substring(5, 7) + ".";
      const day = CD.substring(8, 10) + "  ";
      const hour = CD.substring(11, 13) + ":";
      const minute = CD.substring(14, 16) + "";
      const res = year + month + day + hour + minute;
      return res;
    },
  },
  created() {
    this.getVideoResult(this.$route.params.id);
  },
};
</script>

<style></style>
