<template>
  <div class="m-5">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">STEP 1. 질문 선택</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">STEP 2. 음성 녹음</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">STEP 3. 정보 입력</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <h3 class="text-center m-4">질문을 선택해주세요.</h3>
          <v-card class="mx-auto" max-width="700" min-height="300" tile>
            <v-list flat>
              <v-list-item-group color="primary">
                <v-list-item 
                  v-for="question in questions"
                  :key="question.id"
                  @click="checkQ(question)"
                >
                  <v-list-item-icon>
                    <i class="fas fa-check" style="margin-right:15px;"></i>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ question.content }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
          <div class="w-100 d-flex flex-column">
            <v-btn v-if="isSelected" class="align-self-center m-4 w-25" color="primary" @click="e1 = 2">다음</v-btn> 
            <v-btn v-else class="align-self-center m-4 w-25" color="primary" depressed disabled>다음</v-btn>
          </div>
        </v-stepper-content>
        <v-stepper-content step="2">
          <h3 class="text-center mt-4">음성을 녹음하세요.</h3>
          <h6 class="text-center mb-4">질문: {{ selectedQ }}</h6>
          <v-card class="mx-auto d-flex flex-column align-items-center" max-width="700" min-height="300" tile>
            <dictaphone
            class="mt-5"
              @stop="handleRecording($event)"
              mime-type="audio/wav"
              v-slot="{ isRecording, startRecording, stopRecording }"
            >
              <button class="btn btn-danger" v-if="!isRecording" @click="startRecording">녹음시작</button>
              <button class="btn btn-secondary" v-else @click="stopRecording">녹음종료</button>
            </dictaphone>
            <vue-dictaphone-spectrum-analyser />
            <div v-if="audioSource">
              <audio :src="audioSource" controls></audio>
            </div>
          </v-card>
          <div class="w-100 d-flex flex-column">
            <v-btn v-if="audioData.audio_file" class="align-self-center m-4 w-25" color="primary" @click="e1 = 3">다음</v-btn> 
            <v-btn v-else class="align-self-center m-4 w-25" color="primary" depressed disabled>다음</v-btn>
          </div>
        </v-stepper-content>
        <v-stepper-content step="3">
          <h3 class="text-center m-4">정보를 입력해주세요.</h3>
          <v-card class="mx-auto d-flex flex-column justify-content-center" max-width="700" min-height="300" tile>
            <div class="w-100 d-flex flex-column align-items-center">
              <label for="input-with-list" class="mt-5">제목</label>
              <b-form-input class="w-50" list="input-list" id="input-with-list" type="text" placeholder="제목을 입력해주세요." v-model="audioData.title"></b-form-input>
            </div>
            <div class="w-100 d-flex flex-column align-items-center">
            <label class="mt-5">태그</label>
            <div class="w-50">
              <b-form-tags
                v-model="audioData.update_tag"
                no-outer-focus
                class="mb-2"
              >
                <template
                  v-slot="{
                    tags,
                    inputAttrs,
                    inputHandlers,
                    tagVariant,
                    addTag,
                    removeTag,
                  }"
                >
                  <b-input-group class="mb-2">
                    <b-form-input
                      v-bind="inputAttrs"
                      v-on="inputHandlers"
                      placeholder="태그를 추가해주세요."
                      class="form-control"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-button @click="addTag()" variant="secondary">추가</b-button>
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
                      style="font-family: 'Cute Font', cursive;"
                      >{{ tag }}</b-form-tag
                    >
                  </div>
                </template>
              </b-form-tags>
            </div>
            </div>
          </v-card>
          <div class="w-100 d-flex flex-column">
            <v-btn v-if="audioData.title && audioData.update_tag" class="align-self-center m-4 w-25 text-white" color="cyan" @click="createAudioFormData()">완료</v-btn> 
            <v-btn v-else class="align-self-center m-4 w-25" color="primary" depressed disabled>완료</v-btn>
          </div>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Dictaphone from "@/components/audios/Dictaphone";

export default {
  name: "AudioCreate",
  components: {
    Dictaphone,
  },
  data() {
    return {
      audioData: {
        title: "",
        audio_file: "",
        update_tag: [],
        question: "",
      },
      audioSource: "",
      e1: 1,
      selectedQ: "",
      isSelected: false,
    };
  },
  computed: {
    ...mapState(["questions"]),
  },
  methods: {
    ...mapActions(["getQuestions", "createAudio"]),
    checkQ(question) {
      this.selectedQ = question.content;
      this.audioData.question = question.id;
      if (this.audioData.question) {
        this.isSelected = true;
      }
    },
    handleRecording({ blob, src }) {
      this.audioData.audio_file = blob;
      this.audioSource = src;
    },
    createAudioFormData() {
      console.log(this.audioData, "보낼거ㅓㅓ");
      const audioFormData = new FormData();
      const audio_file_name = Date.now();
      audioFormData.append("title", this.audioData.title);
      audioFormData.append(
        "audio_file",
        this.audioData.audio_file,
        audio_file_name
      );
      audioFormData.append("update_tag", this.audioData.update_tag);
      audioFormData.append("question", this.audioData.question);

      this.createAudio(audioFormData);
    },
  },
  created() {
    this.getQuestions();
  },
};
</script>

<style></style>
