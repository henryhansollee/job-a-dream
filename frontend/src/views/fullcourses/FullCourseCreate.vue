<template>
  <div class="m-5">
    <div v-if="!isLoaded">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1"
            >STEP 1. 자기소개서 입력</v-stepper-step
          >
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 2" step="2"
            >STEP 2. 질문 선택</v-stepper-step
          >
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 3" step="3"
            >STEP 3. 음성 녹음 & 영상 촬영</v-stepper-step
          >
          <v-divider></v-divider>
          <v-stepper-step step="4">STEP 4. 정보 입력</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <h3 class="text-center m-4">자기소개서를 입력해주세요.</h3>
            <v-card class="mx-auto" max-width="700" min-height="300" tile>
              <div class="w-100 d-flex flex-column align-items-center">
                <label for="input-with-list1" class="mt-5">항목</label>
                <b-form-input
                  class="w-50"
                  list="input-list1"
                  id="input-with-list"
                  type="text"
                  placeholder="항목을 입력해주세요."
                  v-model="fullcourseData.subject"
                ></b-form-input>
              </div>
              <div class="w-100 d-flex flex-column align-items-center">
                <label for="input-with-list2" class="mt-5">내용</label>
                <b-form-textarea
                  class="w-50"
                  list="input-list2"
                  id="input-with-list"
                  type="text"
                  placeholder="내용을 입력해주세요."
                  v-model="fullcourseData.content"
                ></b-form-textarea>
              </div>
            </v-card>
            <div class="w-100 d-flex flex-column">
              <v-btn
                v-if="fullcourseData.subject && fullcourseData.content"
                class="basic-btn align-self-center m-4 w-25"
                color="primary"
                @click="e1 = 2"
                >다음</v-btn
              >
              <v-btn
                v-else
                class="basic-btn align-self-center m-4 w-25"
                color="primary"
                depressed
                disabled
                >다음</v-btn
              >
            </div>
          </v-stepper-content>
          <v-stepper-content step="2">
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
                      <v-list-item-title>{{
                        question.content
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
            <div class="w-100 d-flex flex-column">
              <v-btn
                v-if="isSelected"
                class="basic-btn align-self-center m-4 w-25"
                color="primary"
                @click="e1 = 3"
                >다음</v-btn
              >
              <v-btn
                v-else
                class="basic-btn align-self-center m-4 w-25"
                color="primary"
                depressed
                disabled
                >다음</v-btn
              >
            </div>
          </v-stepper-content>
          <v-stepper-content step="3">
            <h4 class="text-center mb-4">질문: {{ selectedQ }}</h4>
            <h5 class="text-center mt-4">영상을 촬영하세요.</h5>

            <v-card class="mx-auto" max-width="700" min-height="300" tile>
              <!-- 비디오 -->
              <div
                class="block d-flex flex-column align-items-center"
                v-show="!result"
              >
                <!-- <h4 class="title is-4">
                {{ timer.interval ? `녹화중 ${formatedTime}` : "준비" }}
              </h4> -->
                <!-- <video v-if="!this.result" class="mb-4 w-75" ref="video"></video> -->
                <h6 class="text-center">
                  {{ timer.interval ? `녹화중 ${formatedTime}` : "" }}
                </h6>
                <video ref="video" class="mb-4 w-75"></video>
              </div>
              <div class="block" v-show="result">
                <h4 class="title is-4">녹화종료</h4>
                <video controls :src="blobUrl"></video>
              </div>
              <div class="field">
                <button
                  class="btn btn-secondary m-3"
                  @click="stop"
                  v-if="recorder && recorder.getState() === 'recording'"
                >
                  영상 분석 완료
                </button>
                <button class="btn btn-danger m-2 mt-4" @click="record" v-else>
                  영상 분석 시작
                </button>
              </div>
              <!-- 오디오 -->
              <dictaphone
                class="mt-5"
                @stop="handleRecording($event)"
                mime-type="audio/wav"
                v-slot="{ isRecording, startRecording, stopRecording }"
              >
                <button
                  class="btn btn-danger m-2 mt-4"
                  v-if="!isRecording"
                  @click="startRecording(selectedQ)"
                >
                  음성 분석 시작
                </button>
                <button
                  class="btn btn-secondary m-3"
                  v-else
                  @click="stopRecording"
                >
                  음성 분석 완료
                </button>
              </dictaphone>
              <vue-dictaphone-spectrum-analyser />
              <div v-if="audioSource">
                <audio :src="audioSource" controls></audio>
              </div>
            </v-card>
            <div class="w-100 d-flex flex-column">
              <v-btn
                v-if="fullcourseData.video_file && fullcourseData.audio_file"
                class="basic-btn align-self-center m-4 w-25"
                color="primary"
                @click="e1 = 4"
                >다음</v-btn
              >
              <v-btn
                v-else
                class="basic-btn align-self-center m-4 w-25"
                color="primary"
                depressed
                disabled
                >다음</v-btn
              >
            </div>
          </v-stepper-content>
          <v-stepper-content step="4">
            <h3 class="text-center m-4">정보를 입력해주세요.</h3>
            <v-card
              class="mx-auto d-flex flex-column justify-content-center"
              max-width="700"
              min-height="300"
              tile
            >
              <div class="w-100 d-flex flex-column align-items-center">
                <label for="input-with-list" class="mt-5">제목</label>
                <b-form-input
                  class="w-50"
                  list="input-list"
                  id="input-with-list"
                  type="text"
                  placeholder="제목을 입력해주세요."
                  v-model="fullcourseData.title"
                ></b-form-input>
              </div>
              <div class="w-100 d-flex flex-column align-items-center">
                <label class="mt-5">태그</label>
                <div class="w-50">
                  <b-form-tags
                    v-model="fullcourseData.update_tag"
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
                          <b-button @click="addTag()" variant="secondary"
                            >추가</b-button
                          >
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
              <v-btn
                v-if="fullcourseData.title && fullcourseData.update_tag"
                class="basic-btn align-self-center m-4 w-25 text-white"
                color="cyan"
                @click="createFullcourseFormData()"
                >완료</v-btn
              >
              <v-btn
                v-else
                class="basic-btn align-self-center m-4 w-25"
                color="primary"
                depressed
                disabled
                >완료</v-btn
              >
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>

    <div v-if="isLoaded" class="d-flex flex-column align-items-center">
      <div class="loading-icon" style="margin-top:185px;">
        <i class="fas fa-circle-notch fa-spin fa-8x"></i>
      </div>
      <div class="loading-icon-text" style="font-size:x-large;">분석중..</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import RecordRTC from "recordrtc";
import Dictaphone from "@/components/audios/Dictaphone";

export default {
  name: "FullcourseCreate",
  components: {
    Dictaphone,
  },
  data() {
    return {
      fullcourseData: {
        title: "",
        subject: "",
        content: "",
        question: "",
        video_file: "",
        audio_file: "",
        update_tag: [],
      },
      selectedQ: "",
      isSelected: false,
      recorder: null,
      result: null,
      blobUrl: null,
      timer: {
        interval: null,
        value: 0,
      },
      audioSource: "",
      e1: 1,
      isLoaded: false,
    };
  },
  props: {
    msg: String,
  },
  computed: {
    ...mapState(["questions"]),
    formatedTime() {
      let hour = Math.floor(this.timer.value / 3600);
      let minute = Math.floor((this.timer.value - hour * 3600) / 60);
      let seconds = this.timer.value - (hour * 3600 + minute * 60);
      return [hour, minute, seconds].map(this._fillzero).join(":");
    },
  },
  methods: {
    ...mapActions(["createFullcourse", "getQuestions"]),
    checkQ(question) {
      this.selectedQ = question.content;
      this.fullcourseData.question = question.id;
      if (this.fullcourseData.question) {
        this.isSelected = true;
      }
    },
    createFullcourseFormData() {
      const fullcourseFormData = new FormData();
      const video_file_name = Date.now();
      const audio_file_name = Date.now();
      fullcourseFormData.append("title", this.fullcourseData.title);
      fullcourseFormData.append("subject", this.fullcourseData.subject);
      fullcourseFormData.append("content", this.fullcourseData.content);
      fullcourseFormData.append(
        "video_file",
        this.fullcourseData.video_file,
        video_file_name
      );
      fullcourseFormData.append(
        "audio_file",
        this.fullcourseData.audio_file,
        audio_file_name
      );
      fullcourseFormData.append("update_tag", this.fullcourseData.update_tag);
      fullcourseFormData.append("question", this.fullcourseData.question);
      this.isLoaded = true;
      this.createFullcourse(fullcourseFormData);
    },
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
        this.blobUrl = window.URL.createObjectURL(this.result);
        clearInterval(this.timer.interval);
        this.timer.value = 0;
        this.timer.interval = null;
        this.fullcourseData.video_file = this.result;
      });
    },
    handleRecording({ blob, src }) {
      this.fullcourseData.audio_file = blob;
      this.audioSource = src;
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
  created() {
    this.getQuestions();
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
