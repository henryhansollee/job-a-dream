<template>
  <div>
    <Header />
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="false"
      data-interval="false"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div
            class="d-block w-100 d-flex flex-column align-items-center"
            style="border:1px solid red; background-color: purple; heigh: 100%;"
          >
            <div>질문 1개 선택</div>
            <br />
            <div>
              <div
                style="font-size: small; margin:0 8px;border: 1px solid yellow;"
                v-for="question in questions"
                :key="question.id"
              >
                <div class="d-flex flex-row justify-content-between">
                  <div>{{ question.content }}</div>
                  <input type="radio" name="questionBox" @click="checkQ(question.content)" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div
            class="d-block w-100 d-flex justify-content-center"
            style="border:1px solid red; background-color: purple; height: 800px;"
          >
            <div>당신이 선택한 질문 : {{interviewData.question}}</div>
            <Video @getVideo="getVideo" />
          </div>
        </div>
        <div class="carousel-item">
          <div
            class="d-block w-100 d-flex justify-content-center"
            style="border:1px solid red; background-color: purple; height: 50px;"
          >
            <div>썸넬</div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="carousel-item active">
            <div
              class="d-block w-100 d-flex justify-content-center"
              style="border:1px solid red; background-color: green; height: 800px;"
            >
              <div class="container">
                <div>
                  <!-- 제목 -->
                  <div class="mt-3 mb-3">
                    <b-form-input type="text" placeholder="title" v-model="interviewData.title" />
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
                            <b-button @click="addTag()" variant="primary">추가</b-button>
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
                    class="btn btn-dark"
                    style="margin-left:100px;"
                    @click="createFormData"
                  >작성완료</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
        v-if="isChecked"
      >
        <span class="carousel-control-next-icon" v-if="isChecked" aria-hidden="false"></span>
        <span class="sr-only" style="background-color: yellow; color: white;">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Video from "../../components/video/Video";
import { mapState, mapActions } from "vuex";
import cookies from "vue-cookies";

export default {
  name: "InterviewCreateView",
  components: {
    Header,
    Video,
  },
  data() {
    return {
      stepNum: 1,
      selectedQ: "",
      isChecked: false,
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
  computed: {
    ...mapState(["questions"]),
  },
  methods: {
    checkQ(question) {
      this.selectedQ = `${question}`;
      this.interviewData.question = question;
      console.log(this.interviewData.question, "질문질문");
      console.log(this.selectedQ);
      if (this.interviewData.question != null) {
        this.isChecked = true;
        this.stepNum = 2;
        console.log(this.isChecked, "체크됨?");
        console.log(this.stepNum, "뀨");
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
  created() {
    this.getQuestions();
    console.log("뽑아옴?");
  },
};
</script>

<style></style>
