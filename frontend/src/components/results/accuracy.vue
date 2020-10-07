<template>
  <div>
    <line-chart :results="results.confidence" />
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
