<template>
  <div class="mt-5">
    <!-- <input
      type="text"
      placeholder="search"
      v-model="keyword"
      @keypress.enter="searchVideo"
    />
    <button @click="nextPage">more</button> -->
    <div>
      <!-- <h4 style="margin-left:70px;">면접 참고 영상</h4> -->
      <v-container>
        <v-row>
          <v-col cols="4" v-for="video in videos" :key="video.etag">
            <!-- <YoutubeListItem
              v-for="video in videos"
              :key="video.etag"
              :video="video"
            /> -->

            <v-card style="height:330px;">
              <iframe
                width="350"
                height="200"
                :src="iframeUrl(video)"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <h5>{{ video.snippet.title }}</h5>
              <h6>{{ video.snippet.channelTitle }}</h6>
              <h6>{{ cutDate(video.snippet.publishedAt) }}</h6>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
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
// @ is an alias to /src
import axios from "axios";
// import YoutubeListItem from "@/components/youtubes/YoutubeListItem.vue";
// import { mapState, mapActions } from "vuex";
import InfiniteLoading from "vue-infinite-loading";

const API_KEY = "AIzaSyDHeze5bvwX8HGupYKKOYiGVqUczUUek8c";
const API_URL = "https://www.googleapis.com/youtube/v3/search";

export default {
  name: "YoutubeList",
  components: {
    InfiniteLoading,
    // YoutubeListItem,
  },
  // computed: {
  //   ...mapState(["videos"]),
  // },
  data() {
    return {
      keyword: "",
      page_token: "",
      videos: [],
    };
  },
  created() {
    // this.searchVideo("면접");
  },
  methods: {
    cutDate(date) {
      let CD = date + "";
      const year = CD.substring(0, 4) + ".";
      const month = CD.substring(5, 7) + ".";
      const day = CD.substring(8, 10);
      const res = year + month + day;
      return res;
    },
    iframeUrl(video) {
      return `http://youtube.com/embed/${video.id.videoId}`;
    },
    // ...mapActions([""]),
    // nextPage() {
    //   axios
    //     .get(API_URL, {
    //       params: {
    //         key: API_KEY,
    //         type: "video",
    //         part: "snippet",
    //         q: this.keyword,
    //         maxResults: 1,
    //         pageToken: this.page_token,
    //       },
    //     })
    //     .then((response) => {
    //       this.videos = this.videos.concat(response.data.items);
    //       this.page_token = response.data.nextPageToken;
    //       console.log(this.page_token, "그다음");
    //       console.log(this.videos, "목록");
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },
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
    //           maxResults: 1,
    //           pageToken: this.page_token,
    //         },
    //       })
    //       .then((response) => {
    //         this.videos = response.data.items;
    //         this.page_token = response.data.nextPageToken;
    //         console.log(this.page_token, "???");
    //         console.log(response);
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }
    // },
    infiniteHandler($state) {
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
              console.log(response.data.items);
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
  },
};
</script>
