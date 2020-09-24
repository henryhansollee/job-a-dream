<template>
  <div class="main-font">

    <!-- 헤더 -->
    <Header />

    <!-- 사이드바 -->
    <div class="interview-sidebar">

      <!-- 검색 -->
      <div class="d-flex pt-2">
        <v-text-field hint="제목이나 태그를 입력해 주세요." class="ml-4 mr-2"></v-text-field>
        <button class="mr-4"><i class="fas fa-search"></i></button>
      </div>

      <!-- 프로필 -->
      <div class="mt-2">

        <!-- 프로필 사진 -->
        <img class="profile-img" src="@/assets/temp-profile.png" alt="profile">
        
        <!-- 개인정보 -->
        <div class="m-3 text-center">
          <small>henryhansollee</small><br />
          <small>소개: 오늘도 뽜이링 하쟈, 써봅니다</small><br />
        </div>
      </div>

      <hr class="ml-5" style="width: 70%;">
      
      <!-- 메인 메뉴 -->
      <div class="main-menu-box">
        
        <!-- 위에 두개 -->
        <div class="main-menu-inner d-flex mb-3">
          <router-link class="main-menu-detail ml-5 text-dark text-decoration-none" to="/interview/create/">
            <img class="main-menu-img" src="@/assets/main-menus/main-menu-1.png" alt="">
            <small>면접보기</small>
          </router-link>
          <a
            class="main-menu-detail mr-5 text-dark text-decoration-none"
            v-b-modal.modal-scrollable
            @click="getQuestions()"
          >
            <img class="main-menu-img" src="@/assets/main-menus/main-menu-2.png" alt="">
            <small>질문목록</small>
          </a>
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
              <div>
                <button class="basic-btn mr-3" style="background-color: transparent">
                  <i class="fas fa-volume-up"></i>
                </button>
                <button class="basic-btn" style="background-color: transparent">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
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

        <!-- 밑에 두개 --> 
        <div class="main-menu-inner d-flex">
          <div class="main-menu-detail ml-5">
            <img class="main-menu-img" src="@/assets/main-menus/main-menu-3.png" alt="">
            <small>이력서</small>
          </div>
          <div class="main-menu-detail mr-5">
            <img class="main-menu-img" src="@/assets/main-menus/main-menu-4.png" alt="">
            <small>자기소개서</small>
          </div>
        </div>
      </div>
      
      <hr class="ml-5 mb-0" style="width: 70%;">

      <!-- 서브 메뉴 -->
      <v-list dense style="background-color: #fffcf0">
        <v-list-item-group>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-center">사용방법</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-center">전체보기</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-center">즐겨찾기</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-center">통계분석</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      
      <footer class="text-center mt-4">
        <small ><i class="far fa-copyright"></i> 2020, Job A Dream</small>
      </footer>
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
  width: 300px;
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
  margin-left: 100px;
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
  width: 40px;
  height: 35px;
}

</style>
