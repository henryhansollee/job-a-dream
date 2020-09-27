<template>
  <div>
    <h1>자소서 분석 시작</h1>
    <!-- 항목 -->
    <input type="text" placeholder="subject" v-model="coverletterData.subject">
    <!-- 내용 -->
    <input type="text" placeholder="content" v-model="coverletterData.content">
    <!-- 태그 -->
    <div>
      <b-form-tags v-model="coverletterData.update_tag" no-outer-focus class="mb-2">
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
    <button @click="createCoverletter(coverletterData)">완료</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CoverletterCreate",
  data() {
    return {
      coverletterData: {
        subject: '',
        content: '',
        update_tag: [],
      },
    };
  },
  methods: {
    ...mapActions([ "createCoverletter" ]),
  },
};
</script>

<style>

</style>