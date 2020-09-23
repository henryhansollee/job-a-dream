<template>
  <div class="main-font">
    <Header />
    <div class="interview-sidebar">
      <div class="d-flex flex-column align-items-center mb-5">
        <h5 class="mt-5">면접 보러가기</h5>
        <router-link class="btn btn-dark interview-start-button" to="/interview/create/">+</router-link>
      </div>
      <div class="d-flex flex-column align-items-center mt-5">
        <h5>질문 등록</h5>
        <!-- <button class="btn btn-dark interview-start-button" @click="getQuestions">+</button> -->
        <b-button variant="dark" v-b-modal.modal-scrollable>+</b-button>

        <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
          <div class="my-4" v-for="i in 10" :key="i">
            <div class="d-flex flex-row justify-content-between">
              <div>질문 넣을 자리</div>
              <input type="checkbox" />
            </div>
          </div>
        </b-modal>
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