<template>
  <footer>
    <p>&#169; Copyright 2017 <strong>Thought</strong>Works</p>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({ name: "Footer" });
</script>

<style lang="scss" scoped>
footer {
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>