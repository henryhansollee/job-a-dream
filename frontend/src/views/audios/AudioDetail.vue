<template>
  <div>
    <h4>{{ audioResult.title }}</h4>
    <h5>{{ audioResult.question }}</h5>
    <audio controls :src="audioResult.audio_file"></audio>
    <h6>{{ cutDate(audioResult.created_at) }}</h6>
    <div v-for="tag in audioResult.tag" :key="tag">#{{ tag }}</div>

    <router-link class="text-decoration-none" to="/audios/list">
      <v-btn medium color="warning" dark>목록으로</v-btn>
    </router-link>

    <v-btn medium color="danger" dark @click="deleteAudio(audioResult.id)"
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
    ...mapState(["audioResult"]),
  },
  methods: {
    ...mapActions(["getAudioResult", "deleteAudio"]),
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
    this.getAudioResult(this.$route.params.id);
  },
};
</script>

<style></style>
