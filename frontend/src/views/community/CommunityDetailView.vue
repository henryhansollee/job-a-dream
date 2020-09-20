<template>
  <div>
    <Header />
    <h1>CommunityDetailView</h1>
    <h4>{{ communitys.title }}</h4>
    <h4>{{ communitys.writer }}</h4>
    <h4>{{ communitys.content }}</h4>
    <h4>{{ communitys.update_tag }}</h4>
    <router-link :to="`/community/detail/${communitys.id}/update`">수정</router-link>
    <button @click="deleteCommunity({id: communitys.id})">삭제</button>
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