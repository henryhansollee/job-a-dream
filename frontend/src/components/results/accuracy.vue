<template>
  <div class="mt-4">
    <line-chart :results="results.confidence" />
    <div class="d-flex justify-content-center">
      <div style="font-size:x-large;">
        최근 10개의 음성 데이터로 추출한 결과
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "../../components/chart/accuracy";

export default {
  name: "Accuracy",
  components: { LineChart },
  props: {
    results: Object,
  },
};
</script>
