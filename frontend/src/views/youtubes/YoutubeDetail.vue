<template>
  <div>
    <div class="col-3">
    </div>
    <YoutubeListItem @giveVideo="getVideo(id)" />
  </div>
</template>

<script>
import YoutubeListItem from "@/components/youtubes/YoutubeListItem.vue";

export default {
  name: "YoutubeDetail",
  components: {
    YoutubeListItem,
  },
  methods: {
    getVideo(video) {
      console.log(video, "뀨");
    },
  },
};
</script>

<style></style>
