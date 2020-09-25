<template>
  <div>
    <h3>면접 참고 영상입니다!</h3>
    <input
      type="text"
      placeholder="search"
      v-model="keyword"
      @keypress.enter="searchVideo"
    />
    <div class="d-flex ml-5">
      <YoutubeListItem
        v-for="video in videos"
        :key="video.etag"
        :video="video"
        :keyword="keyword"
      />
    </div>
  </div>
</template>

<script>
const API_KEY = "AIzaSyA5sx2tkiELZ9R2oSoVdCSJDSj8jHUvqIw";
const API_URL = "https://www.googleapis.com/youtube/v3/search";
export default {};
</script>

<style></style>
