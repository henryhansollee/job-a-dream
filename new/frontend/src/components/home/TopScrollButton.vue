<template>
  <a @click="scrollTop" v-show="visible" class="bottom-right">
    <button class="basic-btn totheTop" style="border-radius:4px;">
      <i class="fas fa-arrow-up"></i>
    </button>
  </a>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 10);
    },
    scrollListener() {
      this.visible = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
}
.totheTop {
  position: fixed;
  bottom: 1%;
  right: 8%;
  cursor: pointer;
  width: 35px;
  height: 35px;
  background-color: transparent;
  border: 0.5px solid #bbb3b3;
  border-radius: 20px;
  color: #1d1c1c;
  box-shadow: 0 10px 20px -8px #b2b0b3;
  font-weight: 100;
  transition: all 0.3s ease;
}
.totheTop:hover {
  transform: translateY(-3px);
}
</style>
