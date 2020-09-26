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
        <HomeSection4 />
      </div>
    </full-page>
    </div>

  <v-app v-else id="inspire">
    <!-- 사이드바 -->
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <!-- 프로필 -->
        <div>
          <hr>
          <img class="profile-img" src="@/assets/logo.png" alt="profile">
          <!-- 프로필 수정 모달 -->
          <v-row justify="center">
            <v-btn icon color="indigo" @click.stop="dialogUser = true">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-dialog
              v-model="dialogUser"
              max-width="290"
            >
              <v-card>
                <v-card-title class="headline">Use Google's location service?</v-card-title>

                <v-card-text>
                  Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="green darken-1"
                    text
                    @click="dialogUser = false"
                  >
                    Disagree
                  </v-btn>

                  <v-btn
                    color="green darken-1"
                    text
                    @click="dialogUser = false"
                  >
                    Agree
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <h4>이한솔</h4>
          <h4>henryhansollee@gmail.com</h4>
          <h4>오늘도 뽜이링!</h4>
          <hr>
        </div>
        <div>
          <v-row justify="center">
            <v-btn
              color="primary"
              dark
              @click.stop="dialogQuestion = true"
            >
              내 질문 목록
            </v-btn>

            <v-dialog
              v-model="dialogQuestion"
              max-width="290"
            >
              <v-card>
                <v-card-title class="headline">Use Google's location service?</v-card-title>

                <v-card-text>
                  Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="green darken-1"
                    text
                    @click="dialogQuestion = false"
                  >
                    Disagree
                  </v-btn>

                  <v-btn
                    color="green darken-1"
                    text
                    @click="dialogQuestion = false"
                  >
                    Agree
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <hr>
        </div>
        <!-- 영상 분석 -->
        <v-list-item link href="/video/list">
          <v-list-item-action>
            <i class="fas fa-video"></i>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              영상분석
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 음성분석 -->
        <v-list-item link href="/audio/list">
          <v-list-item-action>
            <i class="fas fa-microphone"></i>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              음성분석
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 자소서분석 -->
        <v-list-item link href="/coverletter/list">
          <v-list-item-action>
            <i class="fas fa-file-signature"></i>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              자소서분석
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 풀코스 분석 -->
        <v-list-item link href="/fullcourse/list">
          <v-list-item-action>
            <i class="fas fa-brain"></i>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              풀코스분석
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 통계 및 분석 -->
        <v-list-item link href="/result">
          <v-list-item-action>
            <i class="fas fa-poll"></i>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              통계 및 분석
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 면접 참고 영상 -->
        <v-list-item link href="/youtube/list">
          <v-list-item-action>
            <i class="fab fa-youtube"></i>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              면접 참고 영상
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <small><i class="far fa-copyright"></i> Job A Dream</small>
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
import { mapGetters } from "vuex";
import Logout from '@/components/auth/Logout'
import HomeSection1 from "@/components/home/HomeSection1";
import HomeSection2 from "@/components/home/HomeSection2";
import HomeSection3 from "@/components/home/HomeSection3";
import HomeSection4 from "@/components/home/HomeSection4";


  export default {
    components: {
      Logout,
      HomeSection1,
      HomeSection2,
      HomeSection3,
      HomeSection4,
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
      }
    },
    computed: {
      ...mapGetters(["isLoggedIn"]),
    },
    methods: {
      moveSectionDown() {
        this.$refs.fullpage.$fullpage.moveSectionDown();
      },
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
  background-color: #fcbe32;
}
.home-section2 {
  background-color: #fffcf0;
}
.home-section3 {
  background-color: #5e5e5f;
}
.home-section4 {
  background-color: #a79c8e;
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
  top: 22%;
  left: 50%;
}
.next-button2 {
  position: absolute;
  top: 47%;
  left: 50%;
}
.next-button3 {
  position: absolute;
  top: 72%;
  left: 50%;
}
</style>