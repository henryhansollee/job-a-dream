<template>
  <div>
    <div class="block mt-4" v-show="!result">
      <h4 class="title is-4 text-center mb-3">
        {{
          timer.interval ? `녹화중 ${formatedTime}` : "시작버튼을 눌러주세요."
        }}
      </h4>
      <video ref="video"></video>
    </div>
    <div class="block" v-show="result">
      <h4 class="title is-4">녹화된거</h4>
      <video controls :src="blobUrl"></video>
    </div>
    <div class="field d-flex justify-content-center mt-4">
      <button
        class="button is-danger btn btn-danger"
        @click="stop"
        v-if="recorder && recorder.getState() === 'recording'"
      >
        녹화정지
      </button>
      <button class="nxt-btn" @click="record" v-else>녹화시작</button>
    </div>
  </div>
</template>

<script>
import RecordRTC from "recordrtc";
// import axios from "axios";
export default {
  name: "WebRtc",
  props: {
    msg: String,
  },
  data() {
    return {
      recorder: null,
      result: null,
      blobUrl: null,
      timer: {
        interval: null,
        value: 0,
      },
    };
  },
  computed: {
    formatedTime() {
      let hour = Math.floor(this.timer.value / 3600);
      let minute = Math.floor((this.timer.value - hour * 3600) / 60);
      let seconds = this.timer.value - (hour * 3600 + minute * 60);
      return [hour, minute, seconds].map(this._fillzero).join(":");
    },
  },
  methods: {
    _fillzero(value) {
      return value < 9 ? "0" + value : value;
    },
    record() {
      this.recorder && this.recorder.startRecording();
      this.result = null;
      this.blobUrl && URL.revokeObjectURL(this.blobUrl);
      this.blobUrl = null;
      this.timer.interval = setInterval(() => ++this.timer.value, 1000);
    },
    stop() {
      this.recorder.stopRecording(() => {
        this.result = this.recorder.getBlob();
        // console.log(this.result, "this.result");
        this.$emit("getVideo", this.result);
        this.blobUrl = window.URL.createObjectURL(this.result);
        console.log(this.blobUrl, "url");
        clearInterval(this.timer.interval);
        this.timer.value = 0;
        this.timer.interval = null;
        // axios
        //   .get(this.blobUrl, {
        //     responseType: "blob" /* or responseType: 'arraybuffer'  */,
        //   })
        //   .then((r) => r.blob())
        //   .then(
        //     (blobFile) =>
        //       new File([blobFile], fileName, { type: blobFile.type })
        //   );
        // const config = { responseType: "blob" };
        // axios.get(this.blobUrl, config).then((response) => {
        //   new File([response.data], "test");
        // });
      });
    },
  },
  mounted() {
    let self = this;
    let video = self.$refs.video;
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then(async function(stream) {
        self.recorder = RecordRTC(stream, {
          type: "video",
        });
        video.srcObject = stream;
        video.volume = 0;
        video.play();
      });
  },
};
</script>

<style scoped>
video {
  display: block;
  margin: 0 auto;
  box-shadow: 0 4px 8px 2px #999;
}
</style>
