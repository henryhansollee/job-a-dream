<template>
  <div>
    <Header />
    <div class="d-flex">
      <!-- 스텝 1 -->
      <div>
        <h1>Step 1</h1>
        <b-button @click="step1ModalShow = true" v-b-modal.modal-1>질문선택</b-button>

        <b-modal :visible="step1ModalShow" hide-footer id="modal-1" title="질문선택">
          <div
            class="my-4 main-font"
            style="font-size: large; margin: 0 8px"
            v-for="question in questions" :key="question.id"
          >
            <div class="d-flex flex-row justify-content-between">
              <div>{{ question.content }}</div>
              <b-form-radio v-model="selected" name="some-radios" :value="question.id" />
            </div>
          </div>
          <hr>
          <button @click="completeStep1()" class="btn btn-primary">완료</button>
        </b-modal>
      </div>

      <!-- 스텝 2 -->
      <div>
        <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <p class="card-text">Collapse contents Here</p>
            <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
            <b-collapse id="collapse-1-inner" class="mt-2">
              <b-card>Hello!</b-card>
            </b-collapse>
          </b-card>
        </b-collapse>
      </div>

      <div>
        <h1>Step 2</h1>
        <b-button v-b-modal.modal-2>면접시작</b-button>

        <b-modal id="modal-2" title="BootstrapVue">
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
              <button class="nxt-btn" style="font-size: large;" @click="record" v-else>녹화시작</button>
            </div>
          </div>
        </b-modal>
      </div>

      <!-- 스텝 3 -->
      <div>
        <h1>Step 3</h1>
        <b-button  v-b-modal.modal-3>정보입력</b-button>

        <b-modal  id="modal-3" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </div>
    </div>

















    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="false"
      data-interval="false"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" style="vertical-align:middle;">
          <div
            class="d-block w-100 d-flex flex-column align-items-center"
            style="padding:20px 100px 100px 100px;"
          >
            <div style="font-size:xx-large">STEP 1.</div>
            <p></p>
            <div style="font-size:x-large">질문을 선택하세요:)</div>
            <br />
            <div class="mt-4" style="margin-left:50px;">
              <div
                style="font-size: small; margin:0 8px;"
                v-for="question in questions"
                :key="question.id"
              >
                <div class="d-flex flex-row justify-content-start">
                  <div style="font-size:large">
                    <i class="fas fa-check" style="margin-right:15px;"></i>
                  </div>
                  <div style="font-size:large">
                    <button
                      @click="checkQ(question)"
                      :class="{'selected-question':question.id==interviewData.question, 'not-selected':question.id!=interviewData.question}"
                    >{{ question.content }}</button>
                  </div>
                  <!-- <input type="radio" name="questionBox" @click="checkQ(question)" /> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div
            class="d-flex flex-column align-items-center w-100"
            style="padding:20px 100px 100px 100px;"
          >
            <div style="font-size:xx-large">STEP 2.</div>
            <p></p>
            <div style="font-size:x-large">이제 면접 영상을 녹화해봐요!</div>
            <div style="font-size:x-large">질문 : {{selectedQ}}</div>
          </div>
        </div>
        <div class="carousel-item">
          <div
            class="w-100 d-flex flex-column align-items-center"
            style="padding:20px 100px 100px 100px;"
          >
            <div style="font-size:xx-large">STEP 3.</div>
            <p></p>
            <div style="font-size:x-large">썸네일, 제목, 태그를 설정하세요:)</div>
            <div class="container">
              <!-- 제목 -->
              <div class="mt-3 mb-3">
                <b-form-input
                  class="vue-boot-input"
                  type="text"
                  placeholder="title"
                  v-model="interviewData.title"
                />
              </div>
              <!-- 태그 -->
              <div>
                <b-form-tags v-model="interviewData.update_tag" no-outer-focus class="mb-2">
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
                        placeholder="태그를 입력하세요."
                        class="form-control"
                      ></b-form-input>
                      <b-input-group-append>
                        <b-button
                          @click="addTag()"
                          class="nxt-btn"
                          style="padding:0 10px; border-radius:0 3px 3px 0;"
                        >추가</b-button>
                      </b-input-group-append>
                    </b-input-group>
                    <div class="d-inline-block" style="font-size: 1.5rem">
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

              <button
                class="nxt-btn"
                style="margin-left:350px; border-radius:4px;"
                @click="createFormData"
              >작성완료</button>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
        v-if="stepNum>1"
        @click="prevPage"
      >
        <span aria-hidden>
          <i class="fas fa-chevron-left" style="color:black;"></i>
        </span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
        @click="nextPage"
      >
        <span aria-hidden="false">
          <i class="fas fa-chevron-right" style="color:black;"></i>
        </span>
        <span class="sr-only" style="color: white;">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import { mapState, mapActions } from "vuex";
import cookies from "vue-cookies";
import RecordRTC from "recordrtc";

export default {
  name: "InterviewCreateView",
  components: {
    Header,
  },
  data() {
    return {
      selected: '',
      step1ModalShow: false,
      recorder: null,
      result: null,
      blobUrl: null,
      timer: {
        interval: null,
        value: 0,
      },

      stepNum: 1,
      selectedQ: "",
      isSelected: false,
      haveVideo: false,
      content: "",
      file: "",
      interviewData: {
        writer: cookies.get("accessToken"),
        title: "",
        update_tag: [],
        video_file: "",
        audio_file: "",
        thumbnail: "",
        question: "",
      },
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
    completeStep1() {
      console.log(this.selected)
      this.step1ModalShow = false
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
        this.$emit("getVideo", this.result);
        this.blobUrl = window.URL.createObjectURL(this.result);
        console.log(this.blobUrl, "url");
        clearInterval(this.timer.interval);
        this.timer.value = 0;
        this.timer.interval = null;
      });
    },

    prevPage() {
      this.stepNum -= 1;
    },
    nextPage() {
      this.stepNum += 1;
    },
    checkPage() {
      console.log("왓냐");
      if (this.stepNum == 1 && this.isSelected == true) {
        console.log("됨");
        return true;
      } else if (this.stepNum == 2) {
        if (this.haveVideo == true) {
          return true;
        }
      } else if (this.stepNum == 3) {
        return false;
      } else {
        return false;
      }
    },
    checkQ(question) {
      console.log(this.isSelected, "체크됨?");

      this.selectedQ = question.content;
      this.interviewData.question = question.id;
      console.log(this.interviewData.question, "질문번호");
      console.log(this.selectedQ, "질문내용");
      if (this.interviewData.question != null) {
        this.isSelected = true;
        // this.stepNum = 2;
        console.log(this.isSelected, "체크됨?");
        // console.log(this.stepNum, "뀨");
      }
      // if (this.isChecked) {
      //   this.isChecked = false;
      //   this.selectedQ = "";
      //   this.interviewData.question = "";
      //   console.log(this.isChecked);
      // } else {
      //   this.isChecked = true;
      //   this.selectedQ = `${question}`;
      //   this.interviewData.question = question;
      //   console.log(this.interviewData.question, "질문질문");
      //   console.log(this.selectedQ);
      //   console.log(this.isChecked);
      // }
      // console.log(this.isChecked);
      // console.log(question);
    },

    ...mapActions(["createInterview", "getQuestions"]),
    getVideo(result) {
      this.interviewData.video_file = result;
      this.haveVideo = true;
      console.log(this.interviewData.video_file);
    },

    createFormData() {
      if (this.interviewData.title) {
        var formData = new FormData();
        formData.append("title", this.interviewData.title);
        formData.append("writer", this.interviewData.writer);
        formData.append("update_tag", this.interviewData.update_tag);
        formData.append("video_file", this.interviewData.video_file);
        formData.append("audio_file", this.interviewData.audio_file);
        formData.append("question", this.interviewData.question);
        formData.append("thumbnail", this.interviewData.thumbnail);

        this.createInterview(formData);

        // const reader = new FileReader();
        // reader.addEventListener("loadend", () => {
        //   // reader.result contains the contents of blob as a typed array
        // });
        // reader.readAsArrayBuffer(blob);
      } else {
        alert("제목을 입력하세요!");
      }
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
    console.log("뽑아옴?");
  },
  watch: {
    isSelected() {
      this.checkPage();
    },
    stepNum() {
      this.checkPage();
    },
    haveVideo() {
      this.checkPage();
    },
  },
};
</script>

<style>
.not-selected {
  border: none;
  outline: none;
}
.not-selected:focus {
  border: none;
  outline: none;
}
.selected-question {
  border: none;
  outline: none;
  color: orange;
}
.selected-question:focus {
  border: none;
  outline: none;
  color: orange;
}
.glyphicon.glyphicon-chevron-right {
  color: red !important;
}
.carousel-control {
  color: red !important;
}
.carousel-control.right {
  opacity: 1 !important;
  color: red !important;
}
.carousel-control-prev-icon {
  opacity: 1 !important;
  color: red !important;
}
video {
  display: block;
  margin: 0 auto;
  box-shadow: 0 4px 8px 2px #999;
}
</style>
