<template>
  <div>
    <Header />
    <div class="interview-sidebar">
      <div class="d-flex flex-column align-items-center mt-5 mb-5">
        <h5>면접 보러가기</h5>
        <router-link class="btn btn-dark interview-start-button" to="/interview/create/">+</router-link>
      </div>
      <div class="d-flex flex-column align-items-center mt-5">
        <h5>질문 등록</h5>
        <button class="btn btn-dark interview-start-button" @click="getQuestions">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
// import axios from "axios ";
import { mapState, mapActions } from "vuex";

export default {
  name: "InterviewListView",
  components: {
    Header,
  },
  computed: {
    ...mapState(["interviews"]),
  },
  methods: {
    ...mapActions(["getInterviews"]),
    getQuestions() {
      // axios.get();
    },
  },
  created() {
    this.getInterviews();
  },
};
</script>

<style>
.interview-sidebar {
  background-color: #fffcf0;
  width: 17%;
  min-height: 53.3rem;
  height: 100%;
}
.interview-start-button {
  max-width: 40px;
}
</style>