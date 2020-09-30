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
            src="@/assets/carousels/fullcourse-carousel.jpg"
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
            src="@/assets/carousels/fullcourse-carousel.jpg"
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
            src="@/assets/carousels/fullcourse-carousel.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <!-- 캐러셀 -->
    <router-link
      class="text-decoration-none align-self-center"
      to="/fullcourses/create"
    >
      <v-btn class="basic-btn" x-large color="primary" dark
        >풀코스 분석 시작</v-btn
      >
    </router-link>
    <!-- 리스트 -->
    <v-container>
      <v-row>
        <v-col cols="3">
          <!-- 데이터 넣어야함 -->
          <v-card>
            <v-img
              src="@/assets/thumbnails/fullcourse-thumbnail.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>
                제목
              </v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text>
                #태그
              </v-card-text>
            </v-card-actions>
          </v-card>
          <!-- 데이터 넣어야함 -->
        </v-col>
        <v-col cols="3">
          <!-- 데이터 넣어야함 -->
          <v-card>
            <v-img
              src="@/assets/thumbnails/fullcourse-thumbnail.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>
                제목
              </v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text>
                #태그
              </v-card-text>
            </v-card-actions>
          </v-card>
          <!-- 데이터 넣어야함 -->
        </v-col>
        <v-col cols="3">
          <!-- 데이터 넣어야함 -->
          <v-card>
            <v-img
              src="@/assets/thumbnails/fullcourse-thumbnail.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>
                제목
              </v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text>
                #태그
              </v-card-text>
            </v-card-actions>
          </v-card>
          <!-- 데이터 넣어야함 -->
        </v-col>
        <v-col cols="3">
          <!-- 데이터 넣어야함 -->
          <v-card>
            <v-img
              src="@/assets/thumbnails/fullcourse-thumbnail.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>
                제목
              </v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text>
                #태그
              </v-card-text>
            </v-card-actions>
          </v-card>
          <!-- 데이터 넣어야함 -->
        </v-col>
        <v-col cols="3">
          <!-- 데이터 넣어야함 -->
          <v-card>
            <v-img
              src="@/assets/thumbnails/fullcourse-thumbnail.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>
                제목
              </v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text>
                #태그
              </v-card-text>
            </v-card-actions>
          </v-card>
          <!-- 데이터 넣어야함 -->
        </v-col>
        <v-col cols="3">
          <!-- 데이터 넣어야함 -->
          <v-card>
            <v-img
              src="@/assets/thumbnails/fullcourse-thumbnail.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>
                제목
              </v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text>
                #태그
              </v-card-text>
            </v-card-actions>
          </v-card>
          <!-- 데이터 넣어야함 -->
        </v-col>
        <v-col cols="3">
          <!-- 데이터 넣어야함 -->
          <v-card>
            <v-img
              src="@/assets/thumbnails/fullcourse-thumbnail.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>
                제목
              </v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text>
                #태그
              </v-card-text>
            </v-card-actions>
          </v-card>
          <!-- 데이터 넣어야함 -->
        </v-col>
        <v-col cols="3">
          <!-- 데이터 넣어야함 -->
          <v-card>
            <v-img
              src="@/assets/thumbnails/fullcourse-thumbnail.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>
                제목
              </v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text>
                #태그
              </v-card-text>
            </v-card-actions>
          </v-card>
          <!-- 데이터 넣어야함 -->
        </v-col>
      </v-row>
    </v-container>
    <!-- 리스트 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style></style>
