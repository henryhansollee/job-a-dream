<template>
    <a @click="scrollTop" v-show="visible" class="bottom-right">
      <button>TOP</button>
    </a>
</template>

<script>
export default {
  data () {
    return {
      visible: true
    }
  },
  methods: {
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 10)
    },
    scrollListener() {
      this.visible = window.scrollY > 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
}
</style>