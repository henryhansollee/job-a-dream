<template>
  <div class="mt-5">
    <div>
      <v-container>
        <v-row>
          <v-col cols="4" v-for="video in youtube_videos" :key="video.etag">
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
import axios from "axios";
import InfiniteLoading from "vue-infinite-loading";

const API_KEY = "AIzaSyDHeze5bvwX8HGupYKKOYiGVqUczUUek8c";
const API_URL = "https://www.googleapis.com/youtube/v3/search";

export default {
  name: "YoutubeList",
  components: {
    InfiniteLoading,
  },
  data() {
    return {
      keyword: "",
      page_token: "",
      youtube_videos: [],
    };
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
      return `https://youtube.com/embed/${video.id.videoId}`;
    },
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
              this.youtube_videos = this.youtube_videos.concat(
                response.data.items
              );
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
