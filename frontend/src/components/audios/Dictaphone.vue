<template>
  <div v-if="mediaRecorder">
    <slot :isRecording="isRecording"
          :startRecording="startRecording"
          :stopRecording="stopRecording"
          :deleteRecording="deleteRecording">
    </slot>
  </div>
</template>

<script>
export default {
  name: 'dictaphone',
  data() {
    return {
      audioBlob: null,
      mediaRecorder: null,
      isRecording: false,
    };
  },
  props: {
    mimeType: {
      type: String,
      default: 'audio/webm',
    },
  },
  methods: {
    startRecording(text) {
      this.isRecording = true;
      this.onSpeak(text)
      this.mediaRecorder.start();
      this.$awn.tip('30초 동안 답변을 말해주세요 :)', {durations: {tip: 30000}})
      setTimeout(() => {
        this.stopRecording();
        this.$awn.info('시간이 종료되었습니다.', {durations: {info: 0}})
      }, 30000);
    },
    stopRecording() {
      this.isRecording = false;
      this.mediaRecorder.stop();
    },
    deleteRecording() {
      this.audioBlob = null;
    },
    onSpeak(text) {
      const msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    },
  },
  watch: {
    audioBlob() {
      this.$emit('stop', {
        blob: this.audioBlob,
        src: URL.createObjectURL(this.audioBlob),
      });
    },
  },
  // eslint-disable-next-line consistent-return
  async mounted() {
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (error) {
      this.$emit('error', '`navigator.mediaDevices.getUserMedia()` failed.');
      return Promise.resolve();
    }
    const recorder = new MediaRecorder(stream);
    let chunks = [];
    recorder.addEventListener('stop', () => {
      this.audioBlob = new Blob(chunks, { type: this.mimeType });
      chunks = [];
    });
    recorder.addEventListener('dataavailable', (e) => {
      chunks.push(e.data);
    });
    this.mediaRecorder = recorder;
  },
};
</script>

<style>
@import '~vue-awesome-notifications/dist/styles/style.css';
</style>