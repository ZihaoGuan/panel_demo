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

<style scoped>
nav {
  position: fixed;
  width: 300px;
}

nav .a-container {
  position: sticky;
  top: 0;
  height: 100vh;
}

nav a {
  display: block;
  height: 45px;
  text-decoration-line: none;
  color: #ccc;
  font: 24;
}

nav i {
  color: white;
}

nav a:hover,
nav i:hover {
  color: #00b4cf;
}
</style>