<template>
  <div class="main-font">

    <!-- 헤더 -->
    <Header />
    
    <div class="d-flex">
      <!-- 사이드바 -->
      <Sidebar />

      <div>
        - 이름수정
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default {
  name: "InterviewListView",
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style>

</style>