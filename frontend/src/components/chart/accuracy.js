import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: {
    results: Array,
  },
  data() {
    return {
      datacollection: {
        labels: ["", "", "", "", "", "", "", "", "", ""],
        datasets: [
          {
            label: "음성 정확도",
            backgroundColor: "#F2AABD",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#043566",
            data: [
              Math.floor(this.results[0] * 100),
              Math.floor(this.results[1] * 100),
              Math.floor(this.results[2] * 100),
              Math.floor(this.results[3] * 100),
              Math.floor(this.results[4] * 100),
              Math.floor(this.results[5] * 100),
              Math.floor(this.results[6] * 100),
              Math.floor(this.results[7] * 100),
              Math.floor(this.results[8] * 100),
              Math.floor(this.results[9] * 100),
            ],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
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
  mounted() {
    this.renderChart(this.datacollection, this.options);
  },
};
