<template>
  <nav class="slategray-bg">
    <div class="a-container">
      <a href="#" class="dashboard">
        <i class="icomoon icon-dashboard" style="font-size: 30px"></i>
        DASHBOARD
      </a>
      <a href="#" class="agent">AGENT</a>
      <a href="#" class="myCruise">MY CRUISE</a>
      <a href="#" class="help">HelP</a>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({ name: "Navbar" });
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: 300px;

  .a-container {
    position: sticky;
    top: 0;
    height: 100vh;
  }

  a {
    display: block;
    height: 45px;
    text-decoration-line: none;
    color: #ccc;
    font: 24;
  }

  i {
    color: white;
  }

  a:hover, i:hover {
    color: #00b4cf;
  }
}
</style>