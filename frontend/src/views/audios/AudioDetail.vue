<template>
  <div class="p-5" style="">
    <div class="ml-5 d-flex flex-column justify-content-between" style="padding-top:3px;width:100%;">
      <div style="">
        <div class="d-flex justify-content-between">
          <h4>{{ audioResult.title }}</h4>
          <div class="dropdown dropleft">
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
                @click="deleteAudio(audioResult.id)"
                >삭제</a
              >
            </div>
          </div>
        </div>
        <h6 style="color:gray;font-size:14.5px;">
          {{ cutDate(audioResult.created_at) }}
        </h6>
        <h5 class="mt-5" style="font-size:x-large;">
          질문: {{ audioResult.question.content }}
        </h5>
        <div
          v-for="tag in cutTag(audioResult.tag)"
          :key="tag"
          style="display:inline; font-size:large;"
        >
          {{ tag }}
        </div>
        <div class="d-flex justify-content-center" style="width:100%;">
          <audio
            class="mt-5 basic-btn"
            style="width:50%; "
            controls
            :src="'https://j3b107.p.ssafy.io'+audioResult.audio_file"
          ></audio>
        </div>
      </div>
      <div class="d-flex">
        <v-sheet
            class="d-flex flex-column mt-5 mr-3 w-25 text-center"
            color="grey lighten-3"
            height="400"
          >
          <h2 class="mt-5">추출된 대본</h2>
          <h4>정확도: {{ Math.floor(audioResult.result.confidence * 100) }}%</h4>
          <p>{{ audioResult.result.script }}</p>
        </v-sheet>
        
        <v-sheet
          class="d-flex flex-column w-75 text-center mt-5 mr-5 pr-5"
          color="blue lighten-5"
          height="400"
        >
        <h3 class="mt-5">워드 클라우드</h3>
          <wordcloud
            :data="audioResult.result.nouns"
            nameKey="key"
            valueKey="value"
            color="Accent">
          </wordcloud>
        </v-sheet>
      </div>
      <div class="d-flex justify-content-end mr-5 mt-5">
        <router-link class="text-decoration-none" to="/audios/list">
          <v-btn class="basic-btn" medium color="warning" dark>목록으로</v-btn>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import wordcloud from 'vue-wordcloud'

export default {
  name: "AudioDetail",
  data() {
    return {
      myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
    }
  },
  components: {
    wordcloud
  },
  computed: {
    ...mapState(["audioResult"]),
  },
  methods: {
    ...mapActions(["getAudioResult", "deleteAudio"]),
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
      if (tags) {
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
    this.getAudioResult(this.$route.params.id);
  },
};
</script>

<style></style>
