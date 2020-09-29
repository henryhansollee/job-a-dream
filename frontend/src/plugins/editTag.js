import Vue from "vue";

Vue.use(Vue);

export default new Vue({
  TagList(tags) {
    let result = [];
    let arr = tags[0].split(",");
    for (let tag of arr) {
      let res = "#" + tag;
      result.push(res);
    }
    return result;
  },
});

// Vue.prototype.$cutTag = editTag;
