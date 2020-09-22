<template>
  <div>
    <Header />
    <div class="container">
      <Video @getVideo="getVideo" />
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
        <button class="btn btn-dark" @click="createInterview(interviewData)">작성완료</button>
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
      content: "",
      interviewData: {
        title: "",
        writer: cookies.get("accessToken"),
        update_tag: [],
        video_file: "",
      },
    };
  },
  methods: {
    ...mapActions(["createInterview"]),
    getVideo(result) {
      this.interviewData.video_file = result;
      console.log(this.interviewData.video_file);
    },
  },
};
</script>

<style></style>
