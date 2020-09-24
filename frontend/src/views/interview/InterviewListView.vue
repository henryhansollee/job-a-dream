<template>
  <div class="main-font">

    <!-- 헤더 -->
    <Header />

    <!-- 사이드바 -->
    <div class="interview-sidebar">

      <!-- 검색 -->
      <div class="d-flex pt-4">
        <v-text-field class="ml-4 mr-2" :rules="rules"></v-text-field>
        <button class="mr-4"><i class="fas fa-search"></i></button>
      </div>

      <!-- 프로필 -->
      <div>

        <!-- 프로필 사진 -->
        <img class="profile-img" src="https://source.unsplash.com/random" alt="프로필 사진">
        
        <!-- 개인정보 -->
        <div class="m-3">
          <small>이름: henryhansollee</small><br />
          <small>이메일: henryhansollee@gmail.com</small>
          <small class="m-2">오늘도 뽜이링 하쟈, 써봅니다</small>
        </div>
      </div>

      <hr>
      
      <!-- 메인 메뉴 -->
      <div class="main-menu-box">

        <!-- 위에 두개 -->
        <div class="main-menu-inner d-flex mb-3">
          <div class="main-menu-detail">
            <img class="main-menu-img" src="@/assets/main-menus/main-menu-1.png" alt="">
            <small>면접보기</small>
          </div>
          <div class="main-menu-detail">
            <img class="main-menu-img" src="@/assets/main-menus/main-menu-2.png" alt="">
            <small>질문목록</small>
          </div>
        </div>

        <!-- 밑에 두개 -->
        <div class="main-menu-inner d-flex">
          <div class="main-menu-detail">
            <img class="main-menu-img" src="@/assets/main-menus/main-menu-3.png" alt="">
            <small>이력서</small>
          </div>
          <div class="main-menu-detail">
            <img class="main-menu-img" src="@/assets/main-menus/main-menu-4.png" alt="">
            <small>자기소개서</small>
          </div>
        </div>
      </div>

      <hr>
      
      <!-- 서브 메뉴 -->
      <v-card
          class="mx-auto"
          max-width="300"
          tile
        >
          <v-list dense>
            <v-list-item-group v-model="item" color="primary">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>소개</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>전체보기</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>즐겨찾기</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>통계 및 분석</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      





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
            v-for="question in questions" :key="question.id"
          >
            <div class="d-flex flex-row justify-content-between">
              <div>{{ question.content }}</div>
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
                v-model="questionData.content"
                @keypress.enter="addNewQuestion()"
              />
            </div>
            <div class="q-submit">
              <button
                type="button"
                class="basic-btn"
                style="color: gray"
                @click="addNewQuestion()"
              >
                추가
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-end">
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import { mapState, mapActions } from "vuex";

export default {
  name: "InterviewListView",
  data() {
    return {
      questionData: {
        content: '',
      },
      rules: [
          value => !!value || 'Required.',
          value => (value || '').length <= 20 || 'Max 20 characters',
          value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
    };
  },
  components: {
    Header,
  },
  computed: {
    ...mapState([ "interviews", "questions" ]),
  },
  methods: {
    ...mapActions([ "getInterviews", "getQuestions", "postNewQuestions" ]),
    addNewQuestion() {
      this.postNewQuestions(this.questionData);
      this.questionData.content=''
      this.getQuestions()
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
  width: 25%;
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
.profile-img {
  border-radius: 10%;
  margin-left: 30%;
  width: 100px;
  max-width: 120px;
  height: 100px;
  max-height: 150px;
}
.main-menu-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 120px;
}
.main-menu-inner {
  width: 100%;
  height: 50px;
}
.main-menu-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50px;
}
.main-menu-img {
  width: 45px;
  height: 40px;
}

</style>
