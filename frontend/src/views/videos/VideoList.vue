<template>
  <div class="d-flex flex-column">
    <div class="align-self-center d-flex flex-column align-items-center mt-5">
      <img class="mb-3 mt-5" style="width: 20%" src="@/assets/menus/video.png" alt />
      <h1>영상 분석</h1>
      <h6>감정, 시선, 고개 움직임까지 모두 잡아줄게!</h6>
    </div>
    <router-link class="text-decoration-none align-self-center mt-1" to="/videos/create">
      <v-btn class="basic-btn" x-large color="primary" dark>시작하기</v-btn>
    </router-link>
    <!-- 리스트 -->
    <v-container class="mt-5">
      <v-row>
        <v-col cols="3" v-for="video in videos" :key="video.id">
          <router-link
            class="text-decoration-none"
            :to="{
              name: 'VideoDetail',
              params: { id: `${video.id}` },
            }"
          >
            <v-hover v-slot:default="{ hover }" close-delay="30">
              <v-card
                :elevation="hover ? 11 : 8"
                :class="{ 'on-hover': hover }"
                style="transition:.3s;"
              >
                <v-img
                  src="@/assets/thumbnails/video-thumbnail.png"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title>{{ video.title }}</v-card-title>
                </v-img>
                <div class="mt-1" style="padding:0 0 5px 10px;">
                  <v-card-actions
                    v-for="tag in cutTag(video.tag)"
                    :key="tag"
                    class="mt-1"
                    style="padding:0; display:inline;"
                  >{{ tag }}</v-card-actions>
                  <br />
                  <div class="mt-1 mb-1" style="color:gray;">{{ cutDate(video.created_at) }}</div>
                </div>
              </v-card>
            </v-hover>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
    <!-- 리스트 -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  computed: {
    ...mapState(["videos"]),
  },
  methods: {
    ...mapActions(["getVideos"]),
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    cutDate(date) {
      let CD = date + "";
      const year = CD.substring(0, 4) + ".";
      const month = CD.substring(5, 7) + ".";
      const day = CD.substring(8, 10) + "  ";
      const res = year + month + day;
      return res;
    },
    cutTag(tags) {
      let result = [];
      let arr = tags[0].split(",");
      for (let tag of arr) {
        let res = "#" + tag;
        result.push(res);
      }
      return result;
    },
  },
  created() {
    this.getVideos();
  },
};
</script>

<style></style>
