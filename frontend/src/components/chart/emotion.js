import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  props: {
    results: Object,
  },
  data() {
    return {
      datacollection: {
        labels: ["분노", "행복", "놀람", "슬픔", "중립", "두려움", "불편함"],
        datasets: [
          {
            label: "",
            backgroundColor: "#fcbe32",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "#5699D5",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [
              this.results.emotions.angry,
              this.results.emotions.happy,
              this.results.emotions.surprised,
              this.results.emotions.sad,
              this.results.emotions.newtral,
              this.results.emotions.fearful,
              this.results.emotions.disgusted,
            ],
          },
        ],
      },
      options: {
        scale: {
          angleLines: {
            display: true,
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 100,
          },
        },
        legend: {
          display: false,
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  },
};
