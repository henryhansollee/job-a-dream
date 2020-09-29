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
            src="@/assets/carousels/coverletter-carousel.jpg"
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
            src="@/assets/carousels/coverletter-carousel.jpg"
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
            src="@/assets/carousels/coverletter-carousel.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <!-- 캐러셀 -->
    <router-link
      class="text-decoration-none align-self-center"
      to="/coverletters/create"
    >
      <v-btn x-large color="primary" dark>자소서 분석 시작</v-btn>
    </router-link>
    <!-- 리스트 -->
    <v-container>
      <v-row>
        <v-col
          cols="3"
          v-for="coverletter in coverletters"
          :key="coverletter.id"
        >
          <!-- 데이터 넣음 -->
          <router-link
            class="text-decoration-none align-self-center"
            :to="{
              name: 'CoverLetterDetail',
              params: { id: `${coverletter.id}` },
            }"
          >
            <v-hover v-slot:default="{ hover }" close-delay="30">
              <v-card
                :elevation="hover ? 11 : 8"
                :class="{ 'on-hover': hover }"
                style="transition:.3s;"
              >
                <v-img
                  src="@/assets/thumbnails/coverletter-thumbnail.jpg"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title>
                    {{ coverletter.title }}
                  </v-card-title>
                </v-img>
                <div class="mt-1" style="padding:0 0 5px 10px;">
                  <v-card-actions
                    v-for="tag in cutTag(coverletter.tag)"
                    :key="tag"
                    class="mt-1"
                    style="padding:0; display:inline;"
                  >
                    {{ tag }} </v-card-actions
                  ><br />
                  <div class="mt-1 mb-1" style="color:gray;">
                    {{ cutDate(coverletter.created_at) }}
                  </div>
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
    ...mapState(["coverletters"]),
  },
  methods: {
    ...mapActions(["getCoverletters"]),
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
    this.getCoverletters();
  },
};
</script>

<style></style>
