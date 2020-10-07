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
          // {
          //   label: "My First Dataset",
          //   backgroundColor: "rgba(179,181,198,0.2)",
          //   borderColor: "rgba(179,181,198,1)",
          //   pointBackgroundColor: "rgba(179,181,198,1)",
          //   pointBorderColor: "#fff",
          //   pointHoverBackgroundColor: "#fff",
          //   pointHoverBorderColor: "rgba(179,181,198,1)",
          //   data: [65, 59, 90, 81, 56, 55, 40],
          // },
          {
            label: "",
            backgroundColor: "#fcbe32",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "#5699D5",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            //분노", "행복", "놀람", "슬픔", "중립", "두려움", "불편한
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
