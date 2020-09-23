<template>
  <div>
    <Header />
    <h1>InterviewDetailView</h1>
    <!-- <video src="C:\Users\multicampus\Desktop\clone\s03p23b107\backend\media\blob"></video> -->
    <a href="http://localhost:8081/e2f2787d-6efd-4767-b880-bd127f882ca7"
      >video</a
    >
    <!-- <video controls>
      <source src="@/assets/하하하.webm" />
    </video> -->
  </div>
</template>

<script>
import Header from "../../components/Header";
import { mapState, mapActions } from "vuex";

export default {
  name: "InterviewDetailView",
  components: {
    Header,
  },
  computed: {
    ...mapState(["interviewData"]),
  },
  methods: {
    ...mapActions(["getInterview"]),
  },
  created() {
    this.getInterview(this.$route.params.id);
    console.log(this.interviewData, "데이터");
  },
};
</script>

<style></style>
