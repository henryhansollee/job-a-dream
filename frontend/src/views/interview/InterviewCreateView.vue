<template>
  <div>
    <Header />
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts" ref="example">
        <div class="page-1 page d-flex justify-content-around mt-5">
          <div class="part-1" v-animate="{ value: 'bounceInLeft', delay: 0 }">
            질문 리스트
          </div>
          <div>
            <button class="nxt-btn" @click="moveNext">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div class="page-2 page ">
          <div v-animate="{ value: 'bounceInRight', delay: 0 }">
            <!--동영상ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ-->
            <div class="container">
              <Video @getVideo="getVideo" />
              <!-- <div>
                <div>
                  <input type="file" id="file" name="file" ref="file" />
                </div>
                <button class="btn btn-dark" @click="createFormData">
                  작성완료
                </button>
              </div> -->
            </div>
          </div>
          <div>
            <button class="nxt-btn" @click="movePrev">
              <i class="fas fa-chevron-left"></i>
            </button>
          </div>

          <div>
            <button class="nxt-btn" @click="moveNext">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div class="page-3 page d-flex justify-content-around ">
          <div>
            <button class="nxt-btn" @click="movePrev">
              <i class="fas fa-chevron-left"></i>
            </button>
          </div>
          <div class="part-3" v-animate="{ value: 'bounceInLeft', delay: 0 }">
            썸네일
          </div>
          <div>
            <button class="nxt-btn" @click="moveNext">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
          <!-- <p class="part-3" v-animate="{ value: 'bounceInRight', delay: 600 }">
            4
          </p>
          <p class="part-3" v-animate="{ value: 'zoomInDown', delay: 1200 }">
            5
          </p> -->
        </div>
        <div class="page-4 page ">
          <div class="part-4" v-animate="{ value: 'bounceInRight', delay: 0 }">
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
                      <b-button @click="addTag()" variant="primary"
                        >추가</b-button
                      >
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
            <button class="btn btn-dark" @click="createFormData">
              작성완료
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Video from "../../components/video/Video";
import { mapActions } from "vuex";
import cookies from "vue-cookies";

export default {
  name: "InterviewCreateView",
  components: {
    Header,
    Video,
  },
  data() {
    return {
      opts: {
        start: 0,
        dir: "v",
        duration: 100,
        // beforeChange: function(currentSlideEl, currenIndex, nextIndex) {},
        // afterChange: function(currentSlideEl, currenIndex) {},
      },
      options: {
        afterLoad: this.afterLoad,
        controlArrows: true,
        scrollBar: true,
      },

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
  methods: {
    movePrev() {
      this.$refs.example.$fullpage.movePrev();
    },
    moveNext() {
      console.log("푸킼");
      this.$refs.example.$fullpage.moveNext(); //Move to the next page
    },

    // down() {
    //   console.log("ㅎㅇ");
    //   this.$refs.fullpage.$fullpage.moveSectionDown();
    // },
    // moveSectionDown() {
    //   this.$refs.fullpage.$fullpage.moveSectionDown();
    // },

    ...mapActions(["createInterview"]),
    getVideo(result) {
      this.interviewData.video_file = result;
      console.log(this.interviewData.video_file);
    },

    createFormData() {
      if (this.interviewData.title) {
        var formData = new FormData();
        const file_name = Date.now();
        formData.append("title", this.interviewData.title);
        formData.append("writer", this.interviewData.writer);
        formData.append("update_tag", this.interviewData.update_tag);
        formData.append("video_file", this.interviewData.video_file, file_name);
        // this.file = this.$refs.file.files[0];
        // console.log(this.file, "파일");
        // formData.append("video_file", this.file);
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
};
</script>

<style></style>
