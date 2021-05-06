<template>
  <div
    class="type-tab"
    :class="{ active: active }"
  >
    {{ type }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TypeTab",
  props: {
    type: String,
    active: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.type-tab {
  height: 50px;
  font-size: 14px;
  line-height: 50px;
  width: 80px;
  text-align: center;
  border-right: 1px solid grey;
  border-color: rgba(0, 0, 0, 0.137);
  cursor: pointer;

  &.active {
    color: $light-cyan-color;
    border-bottom: 3px solid $light-cyan-color;
  }
}

@media only screen and (max-width: $tablet-size) {
  .type-tab {
    flex-grow: 1;
    background: white;
  }
}
</style>