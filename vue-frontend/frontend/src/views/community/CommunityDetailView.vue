<template>
  <div>
    <Header />
    <h1>CommunityDetailView</h1>
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
    ...mapActions(['getCommunity'])
  },
  created() {
    this.getCommunity({id: this.$route.params.id})
  }
}
</script>

<style>

</style>