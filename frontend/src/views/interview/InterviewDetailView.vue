<template>
  <div>
    <Header />
    <h1>InterviewDetailView</h1>
  </div>
</template>

<script>
import Header from "../../components/Header";
import { mapState, mapActions } from "vuex";

export default {
  name: "InterviewDetailView",
  components: {
    Header,
  },
  computed: {
    ...mapState(["interviews"]),
  },
  methods: {
    ...mapActions(["getInterview"]),
  },
  created() {
    this.getInterview({ id: this.$route.params.id });
  },
};
</script>

<style>
</style>