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
            class="d-block w-100 d-flex justify-content-center"
            style="border:1px solid red; background-color: purple; height: 50px;"
          >
            <div>질문 리스트</div>
          </div>
        </div>
        <div class="carousel-item">
          <div
            class="d-block w-100 d-flex justify-content-center"
            style="border:1px solid red; background-color: purple; height: 50px;"
          >
            <div>영상 촬영</div>
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
              style="border:1px solid red; background-color: green; height: 50px;"
            >
              <div>제목,타이틀</div>
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
        @click="toNext"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div class="container">
      <Video @getVideo="getVideo" />
      <div>
        <!-- 제목 -->
        <div class="mt-3 mb-3">
          <b-form-input
            type="text"
            placeholder="title"
            v-model="interviewData.title"
          />
        </div>
        <!-- 태그 -->
        <div>
          <b-form-tags
            v-model="interviewData.update_tag"
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
                  >{{ tag }}</b-form-tag
                >
              </div>
            </template>
          </b-form-tags>
        </div>
        <div>
          <input type="file" id="file" name="file" ref="file" />
        </div>
        <button class="btn btn-dark" @click="createFormData">작성완료</button>
      </div>
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
      content: "",
      file: "",
      interviewData: {
        title: "",
        writer: cookies.get("accessToken"),
        update_tag: [],
        video_file: "",
      },
    };
  },
  computed: {
    ...mapState(["questions"]),
  },
  methods: {
    toNext() {},

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
        // formData.append("video_file", this.interviewData.video_file);
        this.file = this.$refs.file.files[0];
        console.log(this.file, "파일");
        formData.append("video_file", this.file);
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
