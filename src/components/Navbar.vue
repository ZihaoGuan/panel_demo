<template>
  <nav class="slategray-bg">
    <div class="tab-container">
      <a class="tab">
        <i class="icomoon icon-dashboard"></i>
        <span>DASHBOARD</span>
      </a>
      <a class="tab active">
        <i class="icomoon icon-sitemap"></i>
        <span>AGENT</span>
      </a>
      <a class="tab">
        <i class="icomoon icon-boat"></i>
        <span>MY CRUISE</span>
      </a>
      <a class="tab">
        <i class="icomoon icon-life-bouy"></i>
        <span>HELP</span>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Navbar",
  props: {
    showNavBar: Boolean,
  },
});
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

      &.active,
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

@media only screen and (max-width: $desktop-size) {
  nav {
    z-index: 101;
    display: none;
    &.show{
      display: block;
      top:0;
    }
  }
}
</style>