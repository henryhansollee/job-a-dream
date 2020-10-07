<template>
  <div>
    <div class="p-5" style>
    <div class="d-flex flex-row">
      <video controls :src="'http://localhost:8080' + fullcourseResult.video_file"></video>
      <div
        class="ml-5 d-flex flex-column justify-content-between"
        style="padding-top:3px;width:100%;"
      >
        <div style>
          <div class="d-flex justify-content-between">
            <h4>{{ fullcourseResult.title }}</h4>
            <div class="dropdown dropleft mr-5 pr-5">
              <button
                type="button"
                class="mr-5 pr-5 basic-btn"
                data-toggle="dropdown"
              >
                <i class="fas fa-ellipsis-v"></i>
              </button>
              <div class="dropdown-menu">
                <a
                  class="dropdown-item"
                  style="color:black;"
                  @click="deleteFullcourse(fullcourseResult.id)"
                  >삭제</a
                >
              </div>
            </div>
          </div>
          <h6 style="color:gray;font-size:14.5px;">
            {{ cutDate(fullcourseResult.created_at) }}
          </h6>
          <h5 class="mt-5" style="font-size:x-large;">
            질문: {{ fullcourseResult.question.content }}
          </h5>
          <div
            v-for="tag in cutTag(fullcourseResult.tag)"
            :key="tag"
            style="display:inline; font-size:large;"
          >
            {{ tag }}
          </div>
          <br />
        </div>
        <div class="mr-5" style>
          <div class="d-flex justify-content-end">
            <router-link class="text-decoration-none" to="/fullcourses/list">
              <v-btn class="basic-btn" medium color="warning" dark
                >목록으로</v-btn
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>
      <div class="mt-5 mb-5">
        <v-sheet
          class="d-flex flex-column mb-3"
          color="grey lighten-3"
          height="300"
        >
        <h3 class="text-center mt-3">자기소개서</h3>
        <h5 class="ml-3 mr-3">항목: {{ fullcourseResult.subject }}</h5>
        <h5 class="ml-3 mr-3">{{ fullcourseResult.content }}</h5>
      </v-sheet>
    </div>

    <div class="d-flex mt-5 ml-5">
      <div>
        <h1 class="mt-5 mb-5">시선분석</h1>
        <div class="d-flex">
          <img style="width: 30%;" src="@/assets/videoresult/eyes.png" alt="">
          <ul class="ml-5">
            <h5>- 눈 깜빡임: {{ fullcourseResult.result.gaze.blinking }}</h5>
            <h5>- 정면 응시:{{ fullcourseResult.result.gaze.center }}</h5>
            <h5>- 왼쪽 응시:{{ fullcourseResult.result.gaze.left }}</h5>
            <h5>- 오른쪽 응시:{{ fullcourseResult.result.gaze.right }}</h5>
          </ul>
        </div>
      </div>
      <div class="mb-5">
      <h1 class="mt-5 mb-5">고개분석</h1>
      <div class="d-flex">
        <img style="width: 30%;" src="@/assets/videoresult/face.png" alt="">
        <ul class="ml-5">
          <h5>- 눈 깜빡임: {{ fullcourseResult.result.head.top }}</h5>
          <h5>- 정면 응시:{{ fullcourseResult.result.head.bottom }}</h5>
          <h5>- 왼쪽 응시:{{ fullcourseResult.result.head.left }}</h5>
          <h5>- 오른쪽 응시:{{ fullcourseResult.result.head.right }}</h5>
        </ul>
      </div>
    </div>
  </div>
   <div class="d-flex mt-5 ml-5 mr-5">
        <v-sheet
            class="d-flex flex-column mt-5 mr-3 w-25 text-center"
            color="grey lighten-3"
            height="400"
          >
          <h2 class="mt-5">추출된 대본</h2>
          <h4>정확도: {{ Math.floor(fullcourseResult.result.confidence * 100) }}%</h4>
          <p>{{ fullcourseResult.result.script }}</p>
        </v-sheet>
        
        <v-sheet
          class="d-flex flex-column w-75 text-center mt-5 mr-5 pr-5"
          color="blue lighten-5"
          height="400"
        >
        <h3 class="mt-5">워드 클라우드</h3>
          <wordcloud
            :data="fullcourseResult.result.nouns"
            nameKey="key"
            valueKey="value"
            color="Accent">
          </wordcloud>
        </v-sheet>
      </div>


    <div
      v-if="fullcourseResult.result"
      class="pt-5 d-flex justify-content-around"
      style="margin-top:65px;width:100%; height:220px;"
    >
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="@/assets/aboutUs/angry.png"
              alt="Avatar"
              style="width:100px;height:100px;"
              class="mt-4"
            />
            <div class="pt-2" style="font-size:x-large;">
              분노: {{ fullcourseResult.result.emotions.angry }}
            </div>
          </div>
          <div class="flip-card-back ">
            <div class="mt-3" style="font-size:18.5px;">
              <small>- 양 눈썹이 함께 내려간다.</small><br />
              <small>- 노려보는 눈이 된다.</small><br />
              <small>- 입술이 얇아진다.</small>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="@/assets/aboutUs/happy.png"
              alt="Avatar"
              style="width:100px;height:100px;"
              class="mt-4"
            />
            <div class="pt-2" style="font-size:x-large;">
              행복: {{ fullcourseResult.result.emotions.happy }}
            </div>
          </div>
          <div class="flip-card-back ">
            <div class="mt-3" style="font-size:18.5px;">
              <small>- 눈가에 주름이 생긴다.</small><br />
              <small>- 두 뺨이 올라간다.</small><br />
              <small>- 눈 주위를 돌고 있는 근육의 움직임이 생긴다.</small>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="@/assets/aboutUs/neutral.png"
              alt="Avatar"
              style="width:100px;height:100px;"
              class="mt-4"
            />
            <div class="pt-2" style="font-size:x-large;">
              무표정: {{ fullcourseResult.result.emotions.neutral }}
            </div>
          </div>
          <div class="flip-card-back ">
            <div class="mt-3" style="font-size:18.5px;">
              <small>- 입술의 끝이 당겨지고 한쪽 얼굴만 올라간다.</small>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="@/assets/aboutUs/sad.png"
              alt="Avatar"
              style="width:100px;height:100px;"
              class="mt-4"
            />
            <div class="pt-2" style="font-size:x-large;">
              슬픔: {{ fullcourseResult.result.emotions.sad }}
            </div>
          </div>
          <div class="flip-card-back ">
            <div class="mt-3" style="font-size:18.5px;">
              <small>- 눈꺼풀 위가 내려간다.</small><br />
              <small>- 눈이 초점을 잃는다.</small><br />
              <small>- 입 주위가 살짝 아래로 당겨진다.</small>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="@/assets/aboutUs/disgusted.png"
              alt="Avatar"
              style="width:100px;height:100px;"
              class="mt-4"
            />
            <div class="pt-2" style="font-size:x-large;">
              역겨움: {{ fullcourseResult.result.emotions.disgusted }}
            </div>
          </div>
          <div class="flip-card-back ">
            <div class="mt-3" style="font-size:18.5px;">
              <small>- 코를 찡긋거린다.</small><br />
              <small>- 윗입술이 올라간다.</small>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card ">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="@/assets/aboutUs/surprised.png"
              alt="Avatar"
              style="width:100px;height:100px;"
              class="mt-4"
            />
            <div class="pt-2" style="font-size:x-large;">
              놀람: {{ fullcourseResult.result.emotions.surprised }}
            </div>
          </div>
          <div class="flip-card-back">
            <div class="mt-3" style="font-size:18.5px;">
              <small>- 양 눈썹이 올라간다.</small><br />
              <small>- 눈을 크게 뜬다.</small><br />
              <small>- 입이 벌어진다.</small>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="@/assets/aboutUs/fearful.png"
              alt="Avatar"
              style="width:100px;height:100px;"
              class="mt-4"
            />
            <div class="pt-2" style="font-size:x-large;">
              두려움: {{ fullcourseResult.result.emotions.fearful }}
            </div>
          </div>
          <div class="flip-card-back">
            <div class="mt-3" style="font-size:18.5px;">
              <small>- 눈썹이 올라가고, 가운데로 당겨진다.</small><br />
              <small>- 눈꺼풀 위가 올라간다.</small><br />
              <small>- 눈꺼풀 아래가 긴장한다.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import wordcloud from 'vue-wordcloud'

export default {
  data() {
    return {
      myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
    }
  },
  components: {
    wordcloud
  },
  computed: {
    ...mapState(["fullcourseResult"]),
  },
  methods: {
    ...mapActions(["getFullcourseResult", "deleteFullcourse"]),
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
    cutTag(tags) {
      if (this.fullcourseResult.tag) {
        let result = [];
        let arr = tags[0].split(",");
        for (let tag of arr) {
          let res = "#" + tag;
          result.push(res);
        }
        return result;
      }
    },
    wordClickHandler(name, value, vm) {
      console.log('wordClickHandler', name, value, vm);
    }
  },
  created() {
    this.getFullcourseResult(this.$route.params.id);
  },
};
</script>

<style>
.flip-card {
  background-color: transparent;
  width: 140px;
  height: 180px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #E8EAF6;
  color: black;
}
.flip-card-back {
  background-color: #fcbe32;
  color: #043566;
  transform: rotateY(180deg);
}
</style>