<template>
  <div class="row">
    <div class="col-3">
      <h3>즐겨찾기</h3>
      <draggable class="list-group" :list="list1" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="(element, index) in list1"
          :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <h3>삼성</h3>
      <draggable class="list-group" :list="list2" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="(element, index) in list2"
          :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>

    <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" />
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  name: "DragAndDropMenus",
  display: "DragAndDropMenus",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "비디오1", id: 1 },
        { name: "비디오2", id: 2 },
        { name: "비디오3", id: 3 },
        { name: "비디오4", id: 4 }
      ],
      list2: [
        { name: "비디오5", id: 5 },
        { name: "비디오6", id: 6 },
        { name: "비디오7", id: 7 }
      ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>