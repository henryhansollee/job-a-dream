<template>
  <div style="border:3px solid blue;">
    <line-chart :results="results" />
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
