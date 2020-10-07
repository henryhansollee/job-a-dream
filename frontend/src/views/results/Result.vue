<template>
  <div mt-5>
    <div
      class="mt-5 pt-5 pl-5 container"
      style="font-size:xx-large;"
    >{{ userInfo.username }}님이 그동안 연습하신 영상들의 통계입니다.</div>
    <div v-if="results.emotions" class="container" style>
      <div class="mt-2 shadow p-3 bg-white rounded">
        <div class="mt-2 d-flex justify-content-start">
          <div style="font-size:xxx-large;">감정 통계</div>
        </div>
        <bubble-chart :results="results" />
      </div>
      <div class="mt-5 shadow p-3 bg-white rounded">
        <div class="mt-2 d-flex justify-content-start">
          <div style="font-size:xxx-large;">시선 통계</div>
        </div>
        <bar-chart :results="results" />
      </div>
      <div class="mt-5 shadow p-3 bg-white rounded">
        <div class="mt-2 d-flex justify-content-start">
          <div style="font-size:xxx-large;">움직임 통계</div>
        </div>
        <line-chart :results="results" />
      </div>
    </div>

    <!--
<script>
import LineChart from './Chart.vue'

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: null
  }),
  async mounted () {
    this.loaded = false
    try {
      const { userlist } = await fetch('/api/userlist')
      this.chartdata = userlist
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
    -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import cookies from "vue-cookies";
import BubbleChart from "../../components/chart/emotion";
import BarChart from "../../components/chart/gaze";
import LineChart from "../../components/chart/head";

export default {
  name: "Result",
  components: { BubbleChart, BarChart, LineChart },
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