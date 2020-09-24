<template>
<DarkMode>
    <em slot="lightIcon"><b><em>light!</em></b></em>
    <em slot="darkIcon"><img src="..."/>></em>
</DarkMode>
</template>

<script>
export default {
  name: "DarkMode",
  data() {
    return {
      darkMode: null
    };
  },
  mounted() {
    if (localStorage.getItem("darkMode") == 'true') {
      this.darkMode = true;
    } else {
      this.darkMode = false;
    }
    this.checkColorScheme();
  },
  methods: {
    switchColorScheme(bool) {
      const el = document.querySelector("body");
      if (bool) {
        localStorage.setItem("darkMode", true);
        el.classList.add("theme-dark");
      } else {
        localStorage.setItem("darkMode", false);
        el.classList.remove("theme-dark");
      }
    },
    checkColorScheme() {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches &&
        localStorage.getItem("darkMode") === null
      ) {
        this.darkMode = true;
      }
    }
  },
  watch: {
    darkMode: function(val) {
      this.switchColorScheme(val);
    }
  }
};
</script>

<style>
.action {
  cursor: pointer;
}
</style>