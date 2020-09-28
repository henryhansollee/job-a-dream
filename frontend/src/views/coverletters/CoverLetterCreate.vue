<template>
  <div class="m-5">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1"
          >STEP 1. 자기소개서 항목 입력</v-stepper-step
        >
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2"
          >STEP 2. 자기소개서 내용 입력</v-stepper-step
        >
        <v-divider></v-divider>
        <v-stepper-step step="3">STEP 3. 정보 입력</v-stepper-step>
        <v-divider></v-divider>
      </v-stepper-header>

      <v-stepper-items>
        <!--자소서 subject 입력-->
        <v-stepper-content step="1">
          <v-card class="mb-12" color="grey lighten-1" height="600px">
            <!-- 항목 -->
            <input
              type="text"
              placeholder="subject"
              v-model="coverletterData.subject"
            />
          </v-card>
          <v-btn color="primary" @click="e1 = 2">다음</v-btn>
        </v-stepper-content>

        <!--자소서 content 입력-->
        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="600px">
            <!-- 내용 -->
            <input
              type="text"
              placeholder="content"
              v-model="coverletterData.content"
            />
          </v-card>
          <v-btn color="primary" @click="e1 = 3">다음</v-btn>
        </v-stepper-content>

        <!--제목,태그 입력-->
        <v-stepper-content step="3">
          <v-card class="mb-12" color="grey lighten-1" height="600px">
            <input
              type="text"
              placeholder="title"
              v-model="coverletterData.title"
            />
            <!-- 태그 -->
            <div>
              <b-form-tags
                v-model="coverletterData.update_tag"
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
                      placeholder="New tag - Press enter to add"
                      class="form-control"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-button @click="addTag()" variant="primary"
                        >Add</b-button
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
                      >{{ tag }}</b-form-tag
                    >
                  </div>
                </template>
              </b-form-tags>
            </div>
          </v-card>
          <v-btn color="primary" @click="createCoverletter(coverletterData)"
            >완료</v-btn
          >
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CoverletterCreate",
  data() {
    return {
      coverletterData: {
        title: "",
        subject: "",
        content: "",
        update_tag: [],
      },
      e1: 1,
    };
  },
  methods: {
    ...mapActions(["createCoverletter"]),
  },
};
</script>

<style></style>
