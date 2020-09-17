<template>
  <div>
    <Header />
    <h1>CommunityListView</h1>
    <router-link to="/community/create">글 쓰기</router-link>
  </div>
</template>

<script>
import Header from '../../components/Header'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CommunityListView',
  components: {
    Header,
  },
  computed: {
    ...mapState(['communitys'])
  },
  methods: {
    ...mapActions(['getCommunitys']),
  },
  created() {
    this.getCommunitys()
  }
}
</script>

<style>

</style>