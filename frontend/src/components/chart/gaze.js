import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  data() {
    return {
      datacollection: {
        labels: ["왼쪽", "오른쪽", "가운데", "깜빡임"],
        datasets: [
          {
            label: "시선 분석",
            backgroundColor: "#F2CA50",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: [
              this.results.gaze.left,
              this.results.gaze.right,
              this.results.gaze.center,
              this.results.gaze.blinking,
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
