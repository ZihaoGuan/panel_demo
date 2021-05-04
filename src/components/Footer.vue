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
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  -moz-box-shadow: 0 3px 5px 2px gray;
  -webkit-box-shadow: 0 3px 5px 2px gray;
  box-shadow: 0 3px 5px 2px gray;
}
</style>