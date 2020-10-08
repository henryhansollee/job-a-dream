<template>
  <div m-5>
    <div
      class="mt-5 pt-5 container"
      style="padding-left:55px;font-size:xx-large;"
    >
      {{ userInfo.username }}님이 그동안 연습하신 영상들의 통계입니다.
    </div>
    <div
      v-if="results.emotions"
      class="container d-flex justify-content-around"
      style
    >
      <div class="mt-2 shadow p-3 bg-white rounded" style="width:500px;">
        <div class="mt-1 d-flex justify-content-start">
          <div style="font-size:xx-large;">정확도 통계</div>
        </div>
        <accuracy :results="results" />
      </div>
      <div class="mt-2 shadow p-3 bg-white rounded" style="width:500px;">
        <div class="mt-1 d-flex justify-content-start">
          <div style="font-size:xx-large;">감정 통계</div>
        </div>
        <bubble-chart :results="results" style />
      </div>
    </div>
    <div
      v-if="results.emotions"
      class="mt-5 container d-flex justify-content-around"
      style="margin-bottom:100px;"
    >
      <div class="mt-2 shadow p-4 bg-white rounded" style="width:500px;">
        <div class="mt-1 d-flex justify-content-start">
          <div style="font-size:xx-large;">시선 통계</div>
        </div>
        <bar-chart :results="results" />
      </div>
      <div class="mt-2 shadow p-4 bg-white rounded" style="width:500px;">
        <div class="mt-1 d-flex justify-content-start">
          <div style="font-size:xx-large;">움직임 통계</div>
        </div>
        <line-chart :results="results" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import cookies from "vue-cookies";
import BubbleChart from "../../components/chart/emotion";
import BarChart from "../../components/chart/gaze";
import LineChart from "../../components/chart/head";
import accuracy from "../../components/results/accuracy";

export default {
  name: "Result",
  components: { BubbleChart, BarChart, LineChart, accuracy },
  data() {
    return {};
  },

  computed: {
    ...mapState(["results", "userInfo"]),
  },
  methods: {
    ...mapActions(["getResults", "getUser"]),
  },
  created() {
    this.getResults();
    if (this.userInfo) {
      this.getUser();
    } else if (cookies.get("authCheck")) {
      this.getUser();
    }
  },
};
</script>
