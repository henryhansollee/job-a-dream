<template>
  <div>
    <div class="col-3">
      <!-- <iframe
        :src="iframeUrl"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> -->
    </div>
    <YoutubeListItem @giveVideo="getVideo(id)" />
  </div>
</template>

<script>
// import axios from "axios";
import YoutubeListItem from "@/components/youtubes/YoutubeListItem.vue";

export default {
  name: "YoutubeDetail",
  components: {
    YoutubeListItem,
  },
  computed: {
    // iframeUrl(video) {
    //   console.log(video, "하이");
    //   return `http://youtube.com/embed/${video.id.videoId}`;
    // },
  },
  methods: {
    getVideo(video) {
      console.log(video, "뀨");
    },
  },
};
</script>

<style></style>
