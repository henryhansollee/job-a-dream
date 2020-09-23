<template>
  <div class="main-font">
    <Header />
    <div class="interview-sidebar">
      <div class="d-flex flex-column align-items-center mb-5">
        <h5 class="mt-5">면접 보러가기</h5>
        <router-link
          class="btn btn-dark interview-start-button"
          to="/interview/create/"
          >+</router-link
        >
      </div>
      <div class="d-flex flex-column align-items-center mt-5">
        <h5>질문 등록</h5>
        <!-- <button class="btn btn-dark interview-start-button" @click="getQuestions">+</button> -->
        <b-button
          variant="dark"
          class="interview-start-button"
          v-b-modal.modal-scrollable
          @click="getQuestions()"
          >+</b-button
        >

        <b-modal
          hide-footer
          header-class="modal-header"
          id="modal-scrollable"
          class="main-font"
          scrollable
          title="질문 리스트"
          style="font-family: Cafe24Ohsquare, cursive"
        >
          <div
            class="my-4 main-font"
            style="font-size: large; margin: 0 8px"
            v-for="i in 5"
            :key="i"
          >
            <div class="d-flex flex-row justify-content-between">
              <div>질문 넣을 자리</div>
              <button class="basic-btn" style="background-color: transparent">
                <i class="fas fa-volume-up"></i>
              </button>
            </div>
          </div>
          <div
            class="my-4 main-font"
            style="font-size: large; margin: 0 8px"
            v-for="newQuestion in newQuestionList"
            :key="newQuestion.id"
          >
            <div class="d-flex flex-row justify-content-between">
              <div>{{ newQuestion.new }}</div>
              <button class="basic-btn" style="background-color: transparent">
                <i class="fas fa-volume-up"></i>
              </button>
            </div>
          </div>
          <hr />
          <div class="q-write main-font">
            <div class="q-text">
              <input
                class="q-input"
                placeholder="새로운 질문을 써보세요!"
                type="text"
                v-model="newQuestion"
                @keypress.enter="addNewQuestion"
              />
            </div>
            <div class="q-submit">
              <button
                type="button"
                class="basic-btn"
                style="color: gray"
                @click="addNewQuestion"
              >
                추가
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button
              class="save-btn main-font"
              style="font-size: 17.5px"
              @click="saveNewQuestion"
            >
              저장
            </button>
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
  data() {
    return {
      newQuestion: "",
      newQuestionList: [],
    };
  },
  components: {
    Header,
  },
  computed: {
    ...mapState(["interviews", "questions"]),
  },
  methods: {
    ...mapActions(["getInterviews", "getQuestions", "postNewQuestions"]),
    addNewQuestion() {
      let date = Date.now();
      // console.log(date);
      // console.log(this.newQuestion);
      this.newQuestionList.push({
        id: date,
        new: this.newQuestion,
      });
      // console.log(this.newQuestionList);
      this.newQuestion = "";
    },
    saveNewQuestion() {
      console.log("질문 추가하고 저장");
      this.postNewQuestions();
      this.getQuestions();
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

.q-write {
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  width: 100%;
  margin: 5% auto;
  padding: 16px 10px 10px 18px;
  display: flex;
  flex-direction: column;
}
.q-submit {
  display: flex;
  justify-content: flex-end;
  margin: 0 4px 3px 0;
}
.q-text {
  /* border: none;
  outline: none; */
  display: block;
}
.q-input {
  border: none;
  outline: none;
  width: 100%;
}
.q-input::placeholder {
  font-size: 17.5px;
}
.q-input:focus::placeholder {
  color: transparent;
}
.modal-header {
  font-family: "Cafe24Ohsquare", cursive;
  margin: 10px 0 0 10px;
  color: #f7b315;
}
.save-btn {
  border: 1px solid #fcbe32;
  outline: none;
  border-radius: 4px;
  background-color: #fcbe32;
  margin-right: 7px;
}
</style>
