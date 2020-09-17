<template>
  <div>
    <h1>CommunityUpdateView</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "CommunityUpdateView",
  computed: {
    ...mapState(['reviews'])
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