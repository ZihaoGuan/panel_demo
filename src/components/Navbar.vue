<template>
  <nav class="slategray-bg" :class="{ show: showNavBar }">
    <div class="btn-close" @click="closeNavBar">
      <i class="icomoon icon-close"></i>
    </div>
    <div class="tab-container">
      <router-link to="/" :class="'tab'">
        <i class="icomoon icon-dashboard"></i>
        <span>DASHBOARD</span>
      </router-link>
      <router-link to="/agent" :class="'tab'">
        <i class="icomoon icon-sitemap"></i>
        <span>AGENT</span>
      </router-link>
      <router-link to="/cruise" :class="'tab'">
        <i class="icomoon icon-boat"></i>
        <span>MY CRUISE</span>
      </router-link>
      <router-link to="/help" :class="'tab'">
        <i class="icomoon icon-life-bouy"></i>
        <span>HELP</span>
      </router-link>
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
  methods: {
    closeNavBar() {
      this.$emit("closeNavBar");
    },
  },
});
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: $navbar-width;
  top: 0;
  padding-top: $header-height;

  a{
    text-decoration: none;
  }

  .btn-close {
    position: absolute;
    right: 1.5rem;
    top: 1.2rem;
    i {
      color: $light-cyan_color;
      font-size: 24px;
    }
  }

  .tab-container {
    position: sticky;
    top: 0;
    height: 100vh;
    .tab {
      display: flex;
      height: 45px;
      padding-left: 1.5em;
      cursor: pointer;
      align-items: center;
      margin: 1em 0;
      span {
        margin-left: 1.5em;
      }
      i {
        font-size: 30px;
      }
      i,
      span {
        color: white;
      }

      &.router-link-exact-active,
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
    &.show {
      display: block;
    }
  }
}
</style>