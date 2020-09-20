<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section home-section1">
        <HomeSection1 />
      </div>
      <div class="section home-section2">
        <HomeSection2 />
      </div>
      <div class="section home-section3">
        <HomeSection3 />
      </div>
      <div class="section home-section4">
        <HomeSection4 />
      </div>
    </full-page>
  </div>
</template>

<script>
import HomeSection1 from '../components/home/HomeSection1'
import HomeSection2 from '../components/home/HomeSection2'
import HomeSection3 from '../components/home/HomeSection3'
import HomeSection4 from '../components/home/HomeSection4'

export default {
  name: "Home",
  components: {
    HomeSection1,
    HomeSection2,
    HomeSection3,
    HomeSection4,
  },
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
      }
    }
  }
}
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
</style>
