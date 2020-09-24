<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section home-section1">
        <button
          class="next next-button1"
          @click="$refs.fullpage.api.moveSectionDown()"
        >
          <i class="fas fa-chevron-down"></i>
        </button>
        <HomeSection1 />
      </div>
      <div class="section home-section2">
        <button
          class="next next-button2"
          @click="$refs.fullpage.api.moveSectionDown()"
        >
          <i class="fas fa-chevron-down"></i>
        </button>
        <HomeSection2 />
      </div>
      <div class="section home-section3">
        <button
          class="next next-button3"
          @click="$refs.fullpage.api.moveSectionDown()"
        >
          <i class="fas fa-chevron-down"></i>
        </button>
        <HomeSection3 />
      </div>
      <div class="section home-section4">
        <HomeSection4 />
      </div>
    </full-page>
    <TopScrollButton />
  </div>
</template>

<script>
import HomeSection1 from "../components/home/HomeSection1";
import HomeSection2 from "../components/home/HomeSection2";
import HomeSection3 from "../components/home/HomeSection3";
import HomeSection4 from "../components/home/HomeSection4";
import TopScrollButton from "../components/add/TopScrollButton";

export default {
  name: "Home",
  components: {
    HomeSection1,
    HomeSection2,
    HomeSection3,
    HomeSection4,
    TopScrollButton,
  },
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
        controlArrows: true,
        scrollBar: true,
      },
    };
  },
  methods: {
    moveSectionDown() {
      this.$refs.fullpage.$fullpage.moveSectionDown();
    },
  },
};
</script>

<style>
.home-section1 {
  background-color: #fcbe32;
}
.home-section2 {
  background-color: #fffcf0;
}
.home-section3 {
  background-color: #5e5e5f;
}
.home-section4 {
  background-color: #a79c8e;
}
.next {
  border: none;
  outline: none;
  border-radius: 3px;
  padding: 5px;
  background-color: transparent;
}
.next:focus {
  border: none;
  outline: none;
}
.next-button1 {
  position: absolute;
  top: 22%;
  left: 50%;
}
.next-button2 {
  position: absolute;
  top: 47%;
  left: 50%;
}
.next-button3 {
  position: absolute;
  top: 72%;
  left: 50%;
}
</style>
