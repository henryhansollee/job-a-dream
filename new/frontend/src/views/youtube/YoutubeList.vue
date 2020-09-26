<template>
  <div>
    <h3>면접 참고 영상입니다!</h3>
    <input
      type="text"
      placeholder="search"
      v-model="keyword"
      @keypress.enter="searchVideo"
    />
    <div class="d-flex ml-5">
      <YoutubeListItem
        v-for="video in videos"
        :key="video.etag"
        :video="video"
        :keyword="keyword"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import YoutubeListItem from "@/components/youtube/YoutubeListItem.vue";

const API_KEY = "AIzaSyA5sx2tkiELZ9R2oSoVdCSJDSj8jHUvqIw";
const API_URL = "https://www.googleapis.com/youtube/v3/search";

export default {
  name: "YoutubeList",
  components: {
    YoutubeListItem,
  },
  data() {
    return {
      keyword: "",
      videos: [],
    };
  },
  methods: {
    searchVideo() {
      if (!this.keyword) {
        alert("검색어를 입력하세요!");
      } else {
        axios
          .get(API_URL, {
            params: {
              key: API_KEY,
              type: "video",
              part: "snippet",
              q: this.keyword,
            },
          })
          .then((response) => {
            this.videos = response.data.items;
            console.log(this.keyword);
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>

<style></style>
