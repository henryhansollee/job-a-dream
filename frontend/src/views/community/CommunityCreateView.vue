<template>
  <div>
    <Header />
    <div class="container">
      <div>
        <div class="mt-5">
          <b-form-input type="text" placeholder="title" v-model="communityData.title" />
          <b-form-input class="mt-2" type="text" placeholder="writer" v-model="communityData.writer" />
          <b-form-input class="mt-2" type="text" placeholder="content" v-model="communityData.content" />
        </div>

        <div class="mt-5">
          <b-form-tags v-model="value" no-outer-focus class="mb-2">
            <template v-slot="{ tags, inputAttrs, inputHandlers, tagVariant, addTag, removeTag }">
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
        <div class="d-flex justify-content-center">
          <button class="btn btn-dark" @click="createCommunity(communityData)">작성완료</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import { mapActions } from 'vuex'

export default {
  name: "CommunityCreateView",
  components: {
    Header,
  },
  data() {
    return {
      communityData: {
        title: '',
        writer: '',
        content: '',
        update_tag: [],
      },
      value: []
    }
  },
  methods: { 
    ...mapActions(['createCommunity']),
  }
}
</script>

<style>

</style>