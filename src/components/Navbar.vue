<template>
  <nav class="slategray-bg">
    <div class="tab-container">
      <div class="tab">
        <i class="icomoon icon-dashboard" style="font-size: 30px"></i>
        <span>DASHBOARD</span>
      </div>
      <div class="tab">
        <i class="icomoon icon-sitemap" style="font-size: 30px"></i>
        <span>AGENT</span>
      </div>
      <div class="tab">
        <i class="icomoon icon-boat" style="font-size: 30px"></i>
        <span>MY CRUISE</span>
      </div>
      <div class="tab">
        <i class="icomoon icon-life-bouy" style="font-size: 30px"></i>
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
      display: block;
      height: 45px;
      padding-left: 20px;
      cursor: pointer;

      span{
        margin-left:20px;
      }
      i,span {
        vertical-align: middle;
        color: #ccc;
      }

      &:hover {
        color: #00b4cf;
        i,span {
          color: #00b4cf;
        }
      }
    }
  }
}
</style>