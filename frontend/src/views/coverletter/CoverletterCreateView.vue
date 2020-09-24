<template>
  <div>
    <Header />
    <div>
      <b-form-input
        type="text"
        placeholder="자소서 항목을 입력하세요"
        v-model="cvData.subject"
        class="mb-1"
        style="height: 45px; margin-top: 1px;font-family: fontawesome, 'Do Hyeon', sans-serif; "
      />

      <b-form-input
        type="text"
        placeholder="자소서 내용을 입력하세요"
        v-model="cvData.content"
        class="mb-1 main-font"
        style="height: 45px; margin-top: 1px; font-family: fontawesome, 'Do Hyeon', sans-serif;"
      />
      <button
        class="nxt-btn"
        style="border-radius:4px;"
        @click="postCvData(cvData)"
      >
        완료
      </button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { mapActions } from "vuex";

export default {
  name: "CoverletterCreateView",
  components: {
    Header,
  },
  data() {
    return {
      cvData: {
        subject: "",
        content: "",
      },
    };
  },
  methods: {
    ...mapActions([""]), //vuex에 createCvData만든거 불러오고
    postCvData(data) {
      console.log("여기서 호출");
      //작성완료하고
      this.cvData.subject = "";
      this.cvData.content = "";
    },
  },
};
</script>

<style></style>
