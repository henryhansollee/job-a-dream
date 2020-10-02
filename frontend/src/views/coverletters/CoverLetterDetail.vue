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

      <div
        class="d-flex flex-row justify-content-around mt-4"
        style="width:90%; height:250px; border:3px solid blue;"
      >
        <div style="width:48%; height:100%; border:3px solid green;">
          <h5>{{ coverletterResult.subject }}</h5>
          <h5>{{ coverletterResult.content }}</h5>
        </div>
        <div style="width:48%; height:100%; border:3px solid orange;">
          맞춤법 검사 결과
        </div>
      </div>
      <p />
      <div>
        <h5>예상질문</h5>
        <div style="width:90%; height:200px; border:3px solid red;">
          예상 질문 리스트
        </div>
      </div>
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
