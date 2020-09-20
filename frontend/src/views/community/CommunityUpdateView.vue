<template>
  <div>
    <Header />
    <div class="container mt-5">
      <div>
        <!-- 제목 -->
        <b-form-input type="text" placeholder="title" v-model="communitys.title" />
        <b-form-input class="mt-2" type="text" placeholder="content" v-model="communitys.content" />

        <!-- 태그 -->
        <div class="mt-3">
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
        <button 
          class="btn btn-info"
          @click="updateCommunity({
          id: communitys.id,
          communityData: {
            title: communitys.title,
            content: communitys.content,
            writer: communitys.writer,
            update_tag: []
          }
          })">작성완료</button>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Header from '../../components/Header'

export default {
  name: "CommunityUpdateView",
  components: {
    Header,
  },
  computed: {
    ...mapState(['communitys'])
  },
  methods: {
    ...mapActions(['getCommunity', 'updateCommunity'])
  },
  created() {
    this.getCommunity({id:this.$route.params.id})
  }
}
</script>

<style>

</style>