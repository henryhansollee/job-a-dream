<template>
  <div class="p-5" style="">
    <div
      class="ml-5 d-flex flex-column justify-content-between"
      style="padding-top:3px;width:100%;"
    >
      <div style="">
        <div class="d-flex justify-content-between">
          <h4>{{ audioResult.title }}</h4>
          <div class="dropdown dropleft mr-5 pr-5">
            <button type="button" class="comment-btn" data-toggle="dropdown">
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
        <!--질문 뽑아와야 됨-->
        <h5 class="mt-5" style="font-size:x-large;">
          질문: {{ audioResult.question }}
        </h5>
        <div
          v-for="tag in cutTag(audioResult.tag)"
          :key="tag"
          style="display:inline; font-size:large;"
        >
          {{ tag }}
        </div>
        <p />
        <audio
          style="border:3px solid yellow; width:70%; margin-left:100px; "
          controls
          :src="audioResult.audio_file"
        ></audio>
      </div>
      <div class="mt-5" style="width:90%; height:250px; border:3px solid red;">
        대본 들어갈 공간
      </div>
      <div
        class="d-flex flex-row justify-content-around mt-4"
        style="width:90%; height:250px; border:3px solid blue;"
      >
        <div style="width:48%; height:250px; border:3px solid green;">
          워드 클라우드
        </div>
        <div style="width:48%; height:250px; border:3px solid orange;">
          발음 정확도
        </div>
      </div>
      <div class="d-flex justify-content-end mr-5 mt-5">
        <router-link class="text-decoration-none mr-5" to="/audios/list">
          <v-btn class="mr-5" medium color="warning" dark>목록으로</v-btn>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
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
  },
  created() {
    this.getAudioResult(this.$route.params.id);
  },
};
</script>

<style></style>
