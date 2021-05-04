<template>
  <nav class="slategray-bg">
    <div class="tab-container">
      <div class="tab">
        <i class="icomoon icon-dashboard"></i>
        <span>DASHBOARD</span>
      </div>
      <div class="tab">
        <i class="icomoon icon-sitemap"></i>
        <span>AGENT</span>
      </div>
      <div class="tab">
        <i class="icomoon icon-boat"></i>
        <span>MY CRUISE</span>
      </div>
      <div class="tab">
        <i class="icomoon icon-life-bouy"></i>
        <span>HELP</span>
      </div>
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
  padding: 20px 0;

  .tab-container {
    position: sticky;
    top: 0;
    height: 100vh;
    .tab {
      display: flex;
      height: 45px;
      padding-left: 20px;
      cursor: pointer;
      align-items: center;
      span {
        margin-left: 20px;
      }
      i {
        font-size: 30px;
      }
      i,
      span {
        color: #ccc;
      }

      &:hover {
        color: $light-cyan-color;
        background-color: $dimgray-color;
        i,
        span {
          color: $light-cyan-color;
        }
      }
    }
  }
}
</style>