<template>
  <div class="p-5" style="">
    <div class="d-flex flex-row" style="">
      <video controls :src="videoResult.video_file"></video>
      <div
        class="ml-5 d-flex flex-column justify-content-between"
        style="padding-top:3px;width:100%;"
      >
        <div style="">
          <div class="d-flex justify-content-between">
            <h4>{{ videoResult.title }}</h4>
            <div class="dropdown dropleft mr-5 pr-5">
              <button type="button" class="mr-5 pr-5" data-toggle="dropdown">
                <i class="fas fa-ellipsis-v"></i>
              </button>
              <div class="dropdown-menu">
                <a
                  class="dropdown-item"
                  style="color:black;"
                  @click="deleteVideo(videoResult.id)"
                  >삭제</a
                >
              </div>
            </div>
          </div>
          <h6 style="color:gray;font-size:14.5px;">
            {{ cutDate(videoResult.created_at) }}
          </h6>
          <!--질문 뽑아와야 됨-->
          <h5 class="mt-5" style="font-size:x-large;">
            질문: {{ videoResult.question }}
          </h5>
          <div
            v-for="tag in cutTag(videoResult.tag)"
            :key="tag"
            style="display:inline; font-size:large;"
          >
            {{ tag }}
          </div>
          <br />
        </div>
        <div class="mr-5" style="">
          <div class="d-flex justify-content-end">
            <router-link class="text-decoration-none" to="/videos/list">
              <v-btn medium color="warning" dark>목록으로</v-btn>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import { TagList } from "../../plugins/editTag";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["videoResult", "tags"]),
  },
  methods: {
    ...mapActions(["getVideoResult", "deleteVideo", "EditTag"]),
    cutDate(date) {
      let CD = date + "";
      const year = CD.substring(0, 4) + ".";
      const month = CD.substring(5, 7) + ".";
      const day = CD.substring(8, 10) + "  ";
      const hour = CD.substring(11, 13) + ":";
      const minute = CD.substring(14, 16) + "";
      const res = year + month + day + hour + minute;
      return res;
    },
    cutTag(tags) {
      if (this.videoResult.tag) {
        let result = [];
        let arr = tags[0].split(",");
        for (let tag of arr) {
          let res = "#" + tag;
          result.push(res);
        }
        return result;
      }
    },
  },
  created() {
    this.getVideoResult(this.$route.params.id);
    // this.EditTag(this.videoResult.tag);
  },
};
</script>

<style></style>
