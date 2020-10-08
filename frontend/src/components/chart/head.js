import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  data() {
    return {
      datacollection: {
        labels: ["왼쪽", "오른쪽", "위쪽", "아래쪽"],
        datasets: [
          {
            label: "움직임 통계",
            backgroundColor: "#D9A9C8",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: [
              this.results.head.left,
              this.results.head.right,
              this.results.head.top,
              this.results.head.bottom,
            ],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  props: {
    results: Object,
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  },
};
