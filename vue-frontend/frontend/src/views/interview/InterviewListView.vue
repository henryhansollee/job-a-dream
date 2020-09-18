<template>
  <div>
    <Header />
    <h1>InterviewListView</h1>
    <router-link to="/interview/create">인터뷰 시작</router-link>
  </div>
</template>

<script>
import Header from '../../components/Header'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'InterviewListView',
  components: {
    Header,
  },
  computed: {
    ...mapState(['interviews'])
  },
  methods: {
    ...mapActions(['getInterviews']),
  },
  created() {
    this.getInterviews()
  }
}
</script>

<style>

</style>