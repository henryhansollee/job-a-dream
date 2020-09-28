<template>
  <div>
    <!-- {{ coverletterResult }} -->
    <input
      type="text"
      id="title"
      v-model="coverletterResult.title"
      placeholder=" 제목을 입력하세요"
    />
    <br />
    <input
      type="text"
      id="title"
      v-model="coverletterResult.subject"
      placeholder=" 주제를 입력하세요"
    />
    <br />
    <input
      type="text"
      id="title"
      v-model="coverletterResult.content"
      placeholder=" 내용을 입력하세요"
    />
    <br />
    <!-- 태그 -->
    <div>
      <b-form-tags v-model="coverletterResult.tag" no-outer-focus class="mb-2">
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
              >{{ tag }}</b-form-tag
            >
          </div>
        </template>
      </b-form-tags>
    </div>
    <!-- <div v-for="tag in coverletterResult.tag" :key="tag">#{{ tag }}</div> -->
    <v-btn medium color="primary" dark @click="updateCV()">수정완료</v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      // updatedCoverletterData: {
      // },
    };
  },
  computed: {
    ...mapState(["coverletterResult"]),
  },
  methods: {
    ...mapActions(["getCoverletterResult", "updateCoverletter"]),
    updateCV() {
      let updatedCVData = {
        id: this.coverletterResult.id,
        title: this.coverletterResult.title,
        subject: this.coverletterResult.subject,
        content: this.coverletterResult.content,
        update_tag: this.coverletterResult.tag,
      };

      this.updateCoverletter(updatedCVData);
    },
  },
  created() {
    this.getCoverletterResult(this.$route.params.id);
    // this.updatedCoverletterData = this.coverletterResult;
  },
};
</script>

<style></style>
