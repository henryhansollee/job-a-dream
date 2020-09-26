<template>
  <div>
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
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/900/300/?image=52"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/900/300/?image=52"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/900/300/?image=52"
      ></b-carousel-slide>
    </b-carousel>
    <!-- 캐러셀 -->
    <router-link to="/videos/create">영상 분석 시작</router-link>
    <!-- 리스트 -->
    <v-container>
      <v-row>
        <v-col cols="3">
          <!-- 데이터 넣어야함 -->
          <v-card>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
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
              src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
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
              src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
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
              src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
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
              src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
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
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>

<style>

</style>