<template>
  <div>
    <h1>음성 분석 시작</h1>
    <!-- 항목 -->
    <input type="text" placeholder="title" v-model="audioData.title">
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
      <b-form-tags v-model="audioData.update_tag" no-outer-focus class="mb-2">
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
    <button @click="createAudioFormData()">완료</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AudioCreate",
  data() {
    return {
      audioData: {
        title: '',
        audio_file: '',
        update_tag: [],
      },
      audioSource: '',
    };
  },
  methods: {
    ...mapActions([ "createAudio" ]),
    handleRecording({ blob, src }) {
      this.audioData.audio_file = blob;
      this.audioSource = src;
    },
    createAudioFormData() {
      const audioFormData = new FormData();
      const audio_file_name = Date.now();
      audioFormData.append('title', this.audioData.title);
      audioFormData.append('audio_file', this.audioData.audio_file, audio_file_name);
      audioFormData.append('update_tag', this.audioData.update_tag);
      this.createAudio(audioFormData);
    },
  },
};
</script>

<style>

</style>