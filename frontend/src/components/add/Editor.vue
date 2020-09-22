<template>
  <div id="app">
    <vue-editor v-model="content"></vue-editor>
    <div v-html="content"></div>
    <button @click="wannaview()">wannaview</button>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  components: {
    VueEditor
  },
  data() {
    return {
      content: '',
    }
  },
  methods: {
    wannaview() {
      console.log(this.content)
    }
  }
}
</script>