<template>
  <div>
    <div v-if="!isLoggedIn">
      <full-page ref="fullpage" :options="options">
      <div class="section home-section1">
        <button class="next next-button1" @click="$refs.fullpage.api.moveSectionDown()">
          <i class="fas fa-chevron-down"></i>
        </button>
        <HomeSection1 />
      </div>
      <div class="section home-section2">
        <button class="next next-button2" @click="$refs.fullpage.api.moveSectionDown()">
          <i class="fas fa-chevron-down"></i>
        </button>
        <HomeSection2 />
      </div>
      <div class="section home-section3">
        <button class="next next-button3" @click="$refs.fullpage.api.moveSectionDown()">
          <i class="fas fa-chevron-down"></i>
        </button>
        <HomeSection3 />
      </div>
      <div class="section home-section4">
        <button class="next next-button4" @click="$refs.fullpage.api.moveSectionDown()">
          <i class="fas fa-chevron-down"></i>
        </button>
        <HomeSection4 />
      </div>
      <div class="section home-section5">
        <HomeSection5 />
      </div>
    </full-page>
    <TopScrollButton />
  </div>

  <v-app v-else id="inspire">
    <!-- 사이드바 -->
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <!-- 프로필 -->
        <div class="d-flex flex-column align-items-center">
          <hr>
          <img class="profile-img" src="@/assets/profiles/default.png" alt="profile">
          <!-- 프로필 수정 모달 -->
          <v-row justify="center" class="align-self-end">
            <v-btn class="mr-5" icon color="indigo" v-b-modal.modal-1>
              <small>EDIT</small>
            </v-btn>
              <b-modal hide-footer id="modal-1" title="내 정보 수정">
                <h6>프로필 사진</h6>
                <v-file-input multiple label="사진 업로드"></v-file-input>
                <h6>한줄 각오</h6>
                <b-form-input type="text"></b-form-input>
                <hr>
                <v-btn style="width: 100%; background-color: black;" class="text-white">저장</v-btn>
              </b-modal>
          </v-row>
          <div class="d-flex flex-column align-items-center">
            <small>이한솔</small>
            <small>henryhansollee@gmail.com</small>
            <hr class="mb-0">
            <small>오늘도 뽜이링!</small>
          </div>
        </div>
        <div>
          <hr>
          <v-row justify="center">
            <v-btn
              color="primary"
              dark
              v-b-modal.modal-scrollable
            >
              질문 목록
            </v-btn>
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
                    <button @click="onSpeak(question.content)" class="basic-btn mr-3" style="background-color: transparent">
                      <i class="fas fa-volume-up"></i>
                    </button>
                    <button @click="deleteQuestion(question.id)" class="basic-btn" style="background-color: transparent">
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
                    @keypress.enter="addQuestion()"
                  />
                </div>
                <div class="q-submit">
                  <button
                    type="button"
                    class="basic-btn"
                    style="color: gray"
                    @click="addQuestion()"
                  >
                    추가
                  </button>
                </div>
              </div>
              <div class="d-flex justify-content-end">
              </div>
            </b-modal>
          </v-row>
          <hr>
        </div>
        <!-- 영상 분석 -->
        <v-list-item link href="/videos/list" class="text-decoration-none">
          <v-list-item-action class="d-flex justify-content-center m-0">
            <img src="@/assets/menus/video.png" alt="" style="width: 30px;">
          </v-list-item-action>
          <v-list-item-content >
            <v-list-item-title class="d-flex justify-content-center">
              영상 분석
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 음성분석 -->
        <v-list-item link href="/audios/list" class="text-decoration-none">
          <v-list-item-action class="d-flex justify-content-center m-0">
            <img src="@/assets/menus/audio.png" alt="" style="width: 30px;">
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="d-flex justify-content-center">
              음성 분석
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 자소서분석 -->
        <v-list-item link href="/coverletters/list" class="text-decoration-none">
          <v-list-item-action class="d-flex justify-content-center m-0">
            <img src="@/assets/menus/coverletter.png" alt="" style="width: 30px;">
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="d-flex justify-content-center">
              자소서 분석
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 풀코스 분석 -->
        <v-list-item link href="/fullcourses/list" class="text-decoration-none">
          <v-list-item-action class="d-flex justify-content-center m-0">
            <img src="@/assets/menus/fullcourse.png" alt="" style="width: 30px;">
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="d-flex justify-content-center">
              풀코스 분석
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 통계 및 분석 -->
        <v-list-item link href="/results" class="text-decoration-none">
          <v-list-item-action class="d-flex justify-content-center m-0">
            <img src="@/assets/menus/result.png" alt="" style="width: 30px;">
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="d-flex justify-content-center">
              통계 및 분석
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 면접 참고 영상 -->
        <v-list-item link href="/youtubes/list" class="text-decoration-none">
          <v-list-item-action class="d-flex justify-content-center m-0">
            <img src="@/assets/menus/youtube.png" alt="" style="width: 30px;">
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="d-flex justify-content-center">
              면접 참고 영상
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <hr>
      </v-list>
      <small class="fixed-bottom text-center"><i class="far fa-copyright"></i> Job A Dream</small>
    </v-navigation-drawer>
    <!-- 네브바 -->
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">잡아드림</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Logout />
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</div>
</template>

<script>
import { mapGetters, mapState, mapActions  } from "vuex";
import Logout from '@/components/auths/Logout'
import HomeSection1 from "@/components/homes/HomeSection1";
import HomeSection2 from "@/components/homes/HomeSection2";
import HomeSection3 from "@/components/homes/HomeSection3";
import HomeSection4 from "@/components/homes/HomeSection4";
import HomeSection5 from "@/components/homes/HomeSection5";
import TopScrollButton from "@/components/homes/TopScrollButton";

  export default {
    components: {
      Logout,
      HomeSection1,
      HomeSection2,
      HomeSection3,
      HomeSection4,
      HomeSection5,
      TopScrollButton,
    },
    data() {
      return {
        drawer: null,
        dialogUser: false,
        dialogQuestion: false,
        options: {
          afterLoad: this.afterLoad,
          controlArrows: true,
          scrollBar: true,
        },
      questionData: {
        content: '',
      },

      }
    },
    computed: {
      ...mapGetters([ "isLoggedIn" ]),
      ...mapState([ "questions" ]),
    },
    methods: {
      ...mapActions([ "getQuestions", "createQuestion", "deleteQuestion" ]),
      moveSectionDown() {
        this.$refs.fullpage.$fullpage.moveSectionDown();
      },
      addQuestion() {  
        this.createQuestion(this.questionData);
        this.questionData.content=''
        this.getQuestions()
      },
      onSpeak(text) {
        const msg = new SpeechSynthesisUtterance();
        msg.text = text
        window.speechSynthesis.speak(msg);
      }
    }
  }
</script>

<style>
.profile-img {
  width: 170px;
  border: solid 1px;
  border-radius: 50%;
}
.home-section1 {
  background-color: #2196F3;
}
.home-section2 {
  background-color: #E3F2FD;
}
.home-section3 {
  background-color: #BBDEFB;
}
.home-section4 {
  background-color: #90CAF9;
}
.home-section5 {
  background-color: #64B5F6;
}
.next {
  border: none;
  outline: none;
  border-radius: 3px;
  padding: 5px;
  background-color: transparent;
}
.next:focus {
  border: none;
  outline: none;
}
.next-button1 {
  position: absolute;
  top: 17%;
  left: 50%;
}
.next-button2 {
  position: absolute;
  top: 37%;
  left: 50%;
}
.next-button3 {
  position: absolute;
  top: 57%;
  left: 50%;
}
.next-button4 {
  position: absolute;
  top: 77%;
  left: 50%;
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
  color: #2196F3;
}
.save-btn {
  border: 1px solid #fcbe32;
  outline: none;
  border-radius: 4px;
  background-color: #fcbe32;
  margin-right: 7px;
}

</style>