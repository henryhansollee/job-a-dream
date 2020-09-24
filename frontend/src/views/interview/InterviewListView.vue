<template>
  <div class="main-font">

    <!-- 헤더 -->
    <Header />
    
    <div class="d-flex">
      <!-- 사이드바 -->
      <Sidebar />

      <!-- 내용 -->
      <div class="container">
        <div class="row">
          <div class="col-3 d-flex" v-for="interview in interviews" :key="interview.id">
            <v-card>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              ></v-img>
              <v-card-title>
                {{ interview.title}}
              </v-card-title>
              <v-card-subtitle>
                {{ interview.tag}}
              </v-card-subtitle>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { mapState, mapActions } from "vuex";

export default {
  name: "InterviewListView",
  components: {
    Header,
    Sidebar,
  },
  methods: {
    ...mapActions([ "getInterviews" ]),
  },
  computed: {
    ...mapState([ "interviews" ]),
  },
  created() {
    this.getInterviews();
    console.log(this.interviews)
  },
};
</script>

<style>

</style>