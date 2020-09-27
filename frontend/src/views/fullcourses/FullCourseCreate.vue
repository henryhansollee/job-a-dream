<template>
  <div>
    <h1>풀코스 분석 시작</h1>
    <!-- 제목 -->
    <input type="text" placeholder="title" v-model="fullcourseData.title">
    <input type="text" placeholder="subject" v-model="fullcourseData.subject">
    <input type="text" placeholder="content" v-model="fullcourseData.content">
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
    <!-- 오디오 -->
    <vue-dictaphone @stop="handleRecording($event)" mime-type="audio/wav"
          v-slot="{ isRecording, startRecording, stopRecording }">
        <button v-if="!isRecording" @click="startRecording">Start recording</button>
        <button v-else @click="stopRecording">Stop recording</button>
    </vue-dictaphone>

    <vue-dictaphone-spectrum-analyser/>

    <div v-if="audioSource">
      <audio :src="audioSource" controls></audio>
    </div>
    <!-- 태그 -->
    <div>
      <b-form-tags v-model="fullcourseData.update_tag" no-outer-focus class="mb-2">
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
    <button @click="createFullcourseFormData()">완료</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import RecordRTC  from "recordrtc";

export default {
  name: "FullcourseCreate",
  data() {
    return {
      fullcourseData: {
        title: '',
        subject: '',
        content: '',
        video_file: '',
        audio_file: '',
        update_tag: [],
      },
      recorder: null,
      result: null,
      blobUrl: null,
      timer: {
        interval: null,
        value: 0
      },
      audioSource: '',
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
    ...mapActions([ "createFullcourse" ]),
    createFullcourseFormData() {
      const fullcourseFormData = new FormData();
      const video_file_name = Date.now();
      const audio_file_name = Date.now();
      fullcourseFormData.append('title', this.fullcourseData.title);
      fullcourseFormData.append('subject', this.fullcourseData.subject);
      fullcourseFormData.append('content', this.fullcourseData.content);
      fullcourseFormData.append('video_file', this.fullcourseData.video_file, video_file_name);
      fullcourseFormData.append('audio_file', this.fullcourseData.audio_file, audio_file_name);
      fullcourseFormData.append('update_tag', this.fullcourseData.update_tag);
      this.createFullcourse(fullcourseFormData);
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
        this.fullcourseData.video_file = this.result
      })
    },
    handleRecording({ blob, src }) {
      this.fullcourseData.audio_file = blob;
      this.audioSource = src;
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