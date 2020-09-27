<template>
  <div>
    <input
      type="text"
      id="title"
      v-model="coverletterResult.title"
      placeholder=" 제목을 입력하세요"
    />
    <br />
    <input
      type="text"
      id="title"
      v-model="coverletterResult.content"
      placeholder=" 제목을 입력하세요"
    />
    <br />
    <!-- {{ cutDate(coverletterResult.created_at) }} -->
    <!-- <div v-for="tag in coverletterResult.tag" :key="tag">#{{ tag }}</div> -->
    <v-btn medium color="primary" dark @click="updateCV()">수정완료</v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      updatedCoverletterData: {
        id: "",
        image: "",
        tag: "",
        title: "",
      },
    };
  },
  computed: {
    ...mapState(["coverletterResult"]),
  },
  methods: {
    ...mapActions(["getCoverletterResult", "updateCoverletter"]),
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
    updateCV() {
      let updatedCVData = this.coverletterResult;
      this.updateCoverletter(updatedCVData);
    },
  },
  created() {
    this.getCoverletterResult(this.$route.params.id);
    // console.log(this.updatedCoverletterData, "전");
    // console.log(this.coverletterResult, "가져온거");
    this.updatedCoverletterData.id = this.coverletterResult.id;
    this.updatedCoverletterData.image = this.coverletterResult.image;
    this.updatedCoverletterData.tag = this.coverletterResult.tag;
    this.updatedCoverletterData.title = this.coverletterResult.title;
    // this.updatedCoverletterData = this.coverletterResult;
    // console.log(this.updatedCoverletterData, "후");
  },
};
</script>

<style></style>
