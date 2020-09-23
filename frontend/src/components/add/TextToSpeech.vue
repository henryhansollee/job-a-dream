<template>
  <div>
    <input type="text" v-model="text">
    <button @click="onSpeak()">버튼</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    }
  },
  methods: {
    onSpeak() {
      const msg = new SpeechSynthesisUtterance();
      msg.text = this.text;
      window.speechSynthesis.speak(msg);
    }
  }

}
</script>

<style>

</style>