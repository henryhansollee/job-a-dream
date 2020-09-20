<template>
  <div>
    <Header />
    <div class="container mt-5">
      <h4>제목: {{ communitys.title }}</h4>
      <h4>글쓴이: {{ communitys.writer }}</h4>
      <h4>내용: {{ communitys.content }}</h4>
      <h4>태그: {{ communitys.update_tag }}</h4>
      <router-link class="btn btn-info" :to="`/community/detail/${communitys.id}/update`">수정</router-link>
      <button class="btn btn-danger" @click="deleteCommunity({id: communitys.id})">삭제</button>
    </div>

  </div>
</template>

<script>
import Header from '../../components/Header'
import { mapState, mapActions } from 'vuex'

export default {
  name: "CommunityDetailView",
  components: {
    Header,
  },
  computed: {
    ...mapState(['communitys'])
  },
  methods: {
    ...mapActions(['getCommunity', 'deleteCommunity'])
  },
  created() {
    this.getCommunity({id: this.$route.params.id})
  }
}
</script>

<style>

</style>