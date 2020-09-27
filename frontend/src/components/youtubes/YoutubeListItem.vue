<template>
  <div class="container mt-5">
    <!-- <router-link
      :to="`/${video.id.videoId}`"
      style="text-decoration:none; color: black;"
    > -->

    <!-- <div class="play-video">
      <img :src="video.snippet.thumbnails.medium.url" alt="" class="videoImg" />
      <div class="play">
        <div
          style="border-radius:15px;background-color:green; color: white; 
          padding: 10px 15px;"
        >
          <i class="fas fa-play"></i> 재생
        </div>
      </div>
    </div> -->
    <iframe
      :src="iframeUrl"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div>
      <h5>{{ video.snippet.title }}</h5>
      <h6>{{ video.snippet.channelTitle }}</h6>
    </div>

    <!-- </router-link> -->
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: "YoutubeListItem",

  props: {
    video: Object,
  },
  computed: {
    // ...mapState(["videos"]),
    iframeUrl() {
      return `http://youtube.com/embed/${this.video.id.videoId}`;
    },
    videoTitle() {
      if (this.video) {
        return this.video.snippet.title;
      }
      return null;
    },
  },
  methods: {
    // goDetail() {
    //   console.log(this.video.id.videoId, "줄거");
    //   this.$emit("giveVideo", this.video.id.videoId);
    //   this.$router.push({ path: `/detail` });
    // },
  },
};
</script>

<style>
.videoImg {
  opacity: 1;
  display: block;
  width: 90%;
  height: auto;
  transition: 0.1s ease;
  backface-visibility: hidden;
}
.videoImg:hover {
  cursor: pointer;
  opacity: 0.5;
  transition: 0.1s;
}
.play-video {
  position: relative;
}
.play-video:hover .videoImg {
  opacity: 0.3;
}

.play-video:hover .play {
  opacity: 1;
  cursor: pointer;
}
.play {
  transition: 0.3s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
</style>
