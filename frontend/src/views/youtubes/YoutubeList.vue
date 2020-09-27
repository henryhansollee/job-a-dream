<template>
  <div>
    <h3>면접 참고 영상</h3>
    <!-- <input
      type="text"
      placeholder="search"
      v-model="keyword"
      @keypress.enter="searchVideo"
    /> -->
    <div class="d-flex ml-5">
      <YoutubeListItem
        v-for="video in videos"
        :key="video.etag"
        :video="video"
      />
    </div>
    <infinite-loading @infinite="infiniteHandler" spinner="waveDots">
      <div
        slot="no-more"
        style="color: rgb(102, 102, 102); font-size: 14px; padding: 10px 0px; font-family: 'Recipekorea', cursive; font-size:14.5px"
      >
        더이상 영상이 존재하지 않습니다!
      </div>
    </infinite-loading>
  </div>
</template>

<script>
import axios from "axios";
import YoutubeListItem from "@/components/youtubes/YoutubeListItem.vue";
import InfiniteLoading from "vue-infinite-loading";

const API_KEY = "AIzaSyCaWu_miv_fZS4-2tx4IkHq1ln6G1hKXPA";
const API_URL = "https://www.googleapis.com/youtube/v3/search";

export default {
  name: "YoutubeList",
  components: {
    InfiniteLoading,

    YoutubeListItem,
  },
  data() {
    return {
      keyword: "",
      page_token: "",
      videos: [],
    };
  },
  methods: {
    nfiniteHandler($state) {
      axios
        .get(API_URL, {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: "면접",
            maxResults: 10,
            pageToken: this.page_token,
          },
        })
        .then((response) => {
          setTimeout(() => {
            if (response.data.items.length) {
              this.videos = this.videos.concat(response.data.items);
              this.page_token = response.data.nextPageToken;
              $state.loaded();
            } else {
              $state.complete();
            }
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // searchVideo() {
    //   if (!this.keyword) {
    //     alert("검색어를 입력하세요!");
    //   } else {
    //     axios
    //       .get(API_URL, {
    //         params: {
    //           key: API_KEY,
    //           type: "video",
    //           part: "snippet",
    //           q: this.keyword,
    //         },
    //       })
    //       .then((response) => {
    //         this.videos = response.data.items;
    //         console.log(this.keyword);
    //         console.log(response);
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }
    // },
  },
};
</script>

<style></style>
