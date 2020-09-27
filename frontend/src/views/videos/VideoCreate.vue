<template>
  <div class="m-5">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">STEP 1. 질문 선택</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">STEP 2. 영상 촬영</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">STEP 3. 정보 입력</v-stepper-step>
      </v-stepper-header>
      <!-- 스텝 1 -->
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" color="grey lighten-1" height="600px">
            
          </v-card>
          <v-btn color="primary" @click="e1 = 2">다음</v-btn>
        </v-stepper-content>
        <!-- 스텝 2 -->
        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="600px">
            <!-- 비디오 -->
            <div class="block" v-show="!result">
              <h4 class="title is-4">
                {{ timer.interval ?  `녹화중 ${formatedTime}` : '준비' }}
              </h4>
              <video ref="video"></video>
            </div>
            <div class="block" v-show="result">
              <h4 class="title is-4">녹화종료</h4>
              <video controls :src="blobUrl"></video>
            </div>
            <div class="field">
              <button class="button is-danger" @click="stop" v-if="recorder && recorder.getState() === 'recording'">
                종료
              </button>
              <button class="button is-primary" @click="record" v-else>
                시작
              </button>
            </div>
          </v-card>
          <v-btn color="primary" @click="e1 = 3">다음</v-btn>
        </v-stepper-content>
        <!-- 스텝 3 -->
        <v-stepper-content step="3">
          <v-card class="mb-12" color="grey lighten-1" height="600px">
            <!-- 제목 -->
            <input type="text" placeholder="title" v-model="videoData.title">
            <!-- 태그 -->
            <div>
              <b-form-tags v-model="videoData.update_tag" no-outer-focus class="mb-2">
                <template v-slot="{ tags, inputAttrs, inputHandlers, tagVariant, addTag, removeTag }">
                  <b-input-group class="mb-2">
                    <b-form-input
                      v-bind="inputAttrs"
                      v-on="inputHandlers"
                      placeholder="New tag - Press enter to add"
                      class="form-control"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-button @click="addTag()" variant="primary">Add</b-button>
                    </b-input-group-append>
                  </b-input-group>
                  <div class="d-inline-block" style="font-size: 1.5rem;">
                    <b-form-tag
                      v-for="tag in tags"
                      @remove="removeTag(tag)"
                      :key="tag"
                      :title="tag"
                      :variant="tagVariant"
                      class="mr-1"
                    >{{ tag }}</b-form-tag>
                  </div>
                </template>
              </b-form-tags>
            </div>
          </v-card>
          <v-btn color="primary" @click="createVideoFormData()">완료</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import RecordRTC  from "recordrtc";

export default {
  name: "VideoCreate",
  data() {
    return {
      videoData: {
        title: '',
        video_file: '',
        update_tag: [],
      },
      recorder: null,
      result: null,
      blobUrl: null,
      timer: {
        interval: null,
        value: 0
      },
      e1: 1,
    }
  },
  props: {
    msg: String
  },
  computed: {
    formatedTime() {
      let hour = Math.floor(this.timer.value /3600);
      let minute = Math.floor((this.timer.value - hour*3600)/60);
      let seconds = this.timer.value - (hour*3600 + minute*60);
      return [hour, minute, seconds].map(this._fillzero).join(':');
    }
  },
  methods: {
    ...mapActions([ "createVideo" ]),
    createVideoFormData() {
      const videoFormData = new FormData();
      const video_file_name = Date.now();
      videoFormData.append('title', this.videoData.title);
      videoFormData.append('video_file', this.videoData.video_file, video_file_name);
      videoFormData.append('update_tag', this.videoData.update_tag);
      this.createVideo(videoFormData);
    },
    _fillzero(value) { 
      return value < 9 ? '0' + value: value;
    },
    record() {
      this.recorder && this.recorder.startRecording()
      this.result = null;
      this.blobUrl && URL.revokeObjectURL(this.blobUrl);
      this.blobUrl = null;
      this.timer.interval = setInterval(() => ++this.timer.value, 1000)
    },
    stop() {
      this.recorder.stopRecording(() => {
        this.result = this.recorder.getBlob();
        this.blobUrl = window.URL.createObjectURL(this.result);
        clearInterval(this.timer.interval)
        this.timer.value = 0;
        this.timer.interval = null;
        this.videoData.video_file = this.result
      })
    },
  },
  mounted() {
    let self = this;
    let video = self.$refs.video;
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(async function(stream) {
      self.recorder = RecordRTC(stream, {
      type: 'video'
      });
      video.srcObject = stream;
      video.volume = 0;
      video.play()
    })
  }
};
</script>

<style scoped>
video{
  display: block;
  margin: 0 auto;
  box-shadow: 0 4px 8px 2px #999;
}
</style>