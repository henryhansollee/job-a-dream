<template>
  <div>
    <h4>{{ coverletterResult.title }}</h4>
    <h5>{{ coverletterResult.subject }}</h5>
    <h5>{{ coverletterResult.content }}</h5>
    {{ cutDate(coverletterResult.created_at) }}
    <div v-for="tag in coverletterResult.tag" :key="tag">#{{ tag }}</div>

    <router-link class="text-decoration-none" to="/coverletters/list">
      <v-btn medium color="warning" dark>목록으로</v-btn>
    </router-link>
    <router-link
      class="text-decoration-none"
      :to="{
        name: 'CoverLetterUpdate',
        params: { id: `${coverletterResult.id}` },
      }"
    >
      <v-btn medium color="primary">수정</v-btn>
    </router-link>
    <v-btn
      medium
      color="danger"
      dark
      @click="deleteCoverletter(coverletterResult.id)"
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
    ...mapState(["coverletterResult"]),
  },
  methods: {
    ...mapActions(["getCoverletterResult", "deleteCoverletter"]),
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
    this.getCoverletterResult(this.$route.params.id);
  },
};
</script>

<style></style>
