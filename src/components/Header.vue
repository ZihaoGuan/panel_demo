<template>
  <header class="white-bg">
    <div class="wrapper">
      <div class="container">
        <div class="avatar"></div>
        <img src="../assets/logo/logo.svg" class="logo" />
        <img src="../assets/logo/avatar.jpg" class="avatar" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({ name: "Header" });
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}
.logo {
  height: 40px;
}
.avatar {
  height: 40px;
  width: 40px;
  border-radius: 20px;
}
.wrapper {
  max-width: 1200px;
  margin: auto;
}
.container {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  margin: 0 20px;
  height:60px;
  align-items: center;
}
</style>