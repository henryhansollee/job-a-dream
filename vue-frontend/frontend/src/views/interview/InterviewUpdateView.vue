<template>
  <div>
    <h1>InterviewUpdateView</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "InterviewUpdateView",
  computed: {
    ...mapState(['interviews'])
  },
  methods: {
    ...mapActions(['getInterview', 'updateInterview'])
  },
  created() {
    this.getInterview({id:this.$route.params.id})
  }
}
</script>

<style>

</style>