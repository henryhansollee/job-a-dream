<template>
  <div class="p-5" style>
    <div class style>
      <div
        class="ml-5 d-flex flex-column justify-content-between"
        style="padding-top:3px;width:100%;"
      >
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
        <div>
          <div
            v-for="tag in cutTag(fullcourseResult.tag)"
            :key="tag"
            style="display:inline; font-size:large;"
          >
            {{ tag }}
          </div>
        </div>
        <!--자소서 분석 결과-->
        <div
          class="d-flex flex-row justify-content-around mt-4"
          style="width:90%; height:250px; border:3px solid blue;"
        >
          <div style="width:48%; height:100%; border:3px solid green;">
            <h5>{{ fullcourseResult.subject }}</h5>
            <h5>{{ fullcourseResult.content }}</h5>
          </div>
          <div style="width:48%; height:100%; border:3px solid orange;">
            맞춤법 검사 결과
          </div>
        </div>
        <p />
        <div class="mb-5">
          <h5>예상질문</h5>
          <div style="width:90%; height:200px; border:3px solid red;">
            예상 질문 리스트
          </div>
        </div>

        <!--질문 뽑아와야 됨-->
        <h5 class="mt-5" style="font-size:x-large;">
          질문: {{ fullcourseResult.question }}
        </h5>
        <br />

        <!--오디오 분석 결과-->
        <div class="d-flex justify-content-center ml-5 " style="width:80%;">
          <audio
            class=" ml-5 basic-btn"
            style="width:70%; "
            controls
            :src="fullcourseResult.audio_file"
          ></audio>
        </div>
        <div
          class="mt-5"
          style="width:90%; height:250px; border:3px solid yellow;"
        >
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

        <!--영상 분석 결과-->
        <video
          class="mt-5"
          controls
          :src="fullcourseResult.video_file"
          style="width:90%;"
        ></video>
        <div
          class="mt-5"
          style="width:90%; height:250px; border:3px solid purple;"
        >
          감정 분석
        </div>
        <div
          class="mt-5"
          style="width:90%; height:250px; border:3px solid pink;"
        >
          고개 움직임 분석
        </div>
        <div
          class="mt-5"
          style="width:90%; height:250px; border:3px solid navy;"
        >
          시선 추적 결과
        </div>

        <div class="mr-5 mt-5" style>
          <div class="d-flex justify-content-end mr-5 mt-2">
            <router-link
              class="text-decoration-none mr-5"
              to="/fullcourses/list"
            >
              <v-btn class="basic-btn mr-5" medium color="warning" dark
                >목록으로</v-btn
              >
            </router-link>
          </div>
        </div>
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
  },
  created() {
    this.getFullcourseResult(this.$route.params.id);
  },
};
</script>

<style></style>
