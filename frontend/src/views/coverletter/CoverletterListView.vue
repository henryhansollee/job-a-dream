<template>
  <div>
    <Header />
    <div class="d-flex">
      <Sidebar />
      <div><h1>자기소개서 리스트- 이름수정</h1></div>
      <div>
        <router-link to="/coverletter/create"
          ><button class="nxt-btn" style="border-radius:3px; color: black;">
            작성
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { mapState, mapActions } from "vuex";

//자소서 리스트 받아오는 함수 create로 실행

export default {
  name: "CoverletterListView",
  components: {
    Header,
    Sidebar,
  },
  computed: {
    ...mapState([""]),
  },
  created: {
    ...mapActions([""]),
  },
};
</script>

<style></style>
