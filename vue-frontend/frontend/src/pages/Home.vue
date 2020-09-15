<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section fullpage-section1">
      </div>
      <div class="section fullpage-section2">
      </div>
      <div class="section fullpage-section3">
      </div>
    </full-page>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          options: {
            afterLoad: this.afterLoad,
          }
        }
      },
    }
</script>

<style>
.fullpage-section1 {
  background-color: cadetblue;
}
.fullpage-section2 {
  background-color: azure;
}
.fullpage-section3 {
  background-color: antiquewhite;
}
</style>