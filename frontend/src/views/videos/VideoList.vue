<template>
  <div class="d-flex flex-column">
    <!-- 캐러셀 -->
    <b-carousel
      class="mr-5 ml-5 mt-5"
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="900"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="900"
            height="300"
            src="@/assets/carousels/video-carousel.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="900"
            height="300"
            src="@/assets/carousels/video-carousel.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="900"
            height="300"
            src="@/assets/carousels/video-carousel.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <!-- 캐러셀 -->
    <router-link
      class="text-decoration-none align-self-center"
      to="/videos/create"
    >
      <v-btn x-large color="primary" dark>영상 분석 시작</v-btn>
    </router-link>
    <!-- 리스트 -->
    <v-container>
      <v-row>
        <v-col cols="3" v-for="video in videos" :key="video.id">
          <router-link
            class="text-decoration-none"
            :to="{
              name: 'VideoDetail',
              params: { id: `${video.id}` },
            }"
          >
            <!-- 데이터 넣음 -->
            <v-card>
              <v-img
                src="@/assets/thumbnails/video-thumbnail.jpg"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title>
                  {{ video.title }}
                </v-card-title>
              </v-img>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-card-text>
                  <div v-for="tag in video.tag" :key="tag">#{{ tag }}</div>
                  <!-- {{ video.tag }} -->
                </v-card-text>
              </v-card-actions>
              {{ cutDate(video.created_at) }}
            </v-card>
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
      const hour = CD.substring(11, 13) + ":";
      const minute = CD.substring(14, 16) + "";
      const res = year + month + day + hour + minute;
      return res;
    },
  },
  created() {
    this.getVideos();
  },
};
</script>

<style></style>
