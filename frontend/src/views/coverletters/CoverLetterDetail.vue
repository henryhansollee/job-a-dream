<template>
  <div class="p-5">
    <div
      class="ml-5 d-flex flex-column justify-content-between"
      style="padding-top:3px;width:100%;"
    >
      <div style="">
        <div class="d-flex justify-content-between">
          <h4>{{ coverletterResult.title }}</h4>
          <div class="dropdown dropleft mr-5 pr-5">
            <button
              type="button"
              class=" mr-5 basic-btn"
              data-toggle="dropdown"
            >
              <i class="fas fa-ellipsis-v mr-5"></i>
            </button>
            <div class="dropdown-menu">
              <router-link
                class="dropdown-item text-decoration-none"
                style="color:black;"
                :to="{
                  name: 'CoverLetterUpdate',
                  params: { id: `${coverletterResult.id}` },
                }"
              >
                수정
              </router-link>

              <a
                class="dropdown-item"
                style="color:black;"
                @click="deleteCoverletter(coverletterResult.id)"
                >삭제</a
              >
            </div>
          </div>
        </div>
        <h6 style="color:gray;font-size:14.5px;">
          {{ cutDate(coverletterResult.created_at) }}
        </h6>
        <div
          v-for="tag in cutTag(coverletterResult.tag)"
          :key="tag"
          style="display:inline; font-size:large;"
        >
          {{ tag }}
        </div>
        <p />
      </div>

      <v-sheet
          class="d-flex flex-column mb-3"
          color="grey lighten-3"
          height="300"
        >
        <h3 class="text-center mt-3">자기소개서</h3>
        <h5 class="ml-3 mr-3">항목: {{ coverletterResult.subject }}</h5>
        <h5 class="ml-3 mr-3">{{ coverletterResult.content }}</h5>
      </v-sheet>
      <h3>추천 질문</h3>
      <v-sheet
          v-for="question in coverletterResult.questions"
          :key="question.id"
          class="d-flex mb-3"
          color="yellow lighten-4"
          height="50"
        >
        <h5>Q. {{ question }}</h5>
      </v-sheet>
      <div class="d-flex justify-content-end mr-5 mt-5">
        <router-link class="text-decoration-none mr-5" to="/coverletters/list">
          <v-btn class="mr-5 basic-btn" medium color="warning" dark
            >목록으로</v-btn
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["coverletterResult"]),
  },
  methods: {
    ...mapActions(["getCoverletterResult", "deleteCoverletter"]),
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
      if (tags) {
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
    this.getCoverletterResult(this.$route.params.id);
  },
};
</script>

<style></style>
