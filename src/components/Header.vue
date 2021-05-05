<template>
  <header class="white-bg">
    <div class="wrapper">
      <div class="container">
        <div class="avatar"></div>
        <div class="logo"><img src="../assets/logo/logo.svg" /></div>
        <div
          class="avatar"
          :class="{ show: showDropdown }"
          @click="showDropdown = !showDropdown"
        >
          <img src="../assets/logo/avatar.jpg" />
          <i
            class="icomoon icon-angle-down"
            style="
              font-size: 26px;
              line-height: 40px;
              vertical-align: text-bottom;
              margin: 0 10px;
            "
          >
          </i>
          <ul class="dropdown">
            <li>
              <a><i class="icomoon icon-id-card"></i><span>Profile</span></a>
            </li>
            <li>
              <a><i class="icomoon icon-sign-in"></i><span>Sign Out</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Header",
  data() {
    return {
      showDropdown: false,
    };
  },
});
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  -moz-box-shadow: 0 1px 5px 1px gray;
  -webkit-box-shadow: 0 1px 5px 1px gray;
  box-shadow: 0 1px 5px 1px gray;
}
.logo {
  img {
    height: 40px;
  }
}
.avatar {
  position: relative;
  img {
    height: 40px;
    width: 40px;
    border-radius: 20px;
  }
  &.show > ul
  // &:hover > ul,
  // &:focus-within > ul {
  {
    visibility: visible;
    display: block;
  }
  ul {
    list-style: none;
    visibility: hidden;
    position: absolute;
    transition: all 0.5s ease;
    right: 0;
    display: none;
    -moz-box-shadow: 0 3px 5px 2px #ccc;
    -webkit-box-shadow: 0 3px 5px 2px #ccc;
    box-shadow: 0 3px 5px 2px #ccc;
  }

  li {
    background: white;
    display: block;
    padding: 1rem;
    position: relative;
    transition-duration: 0.5s;
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      i {
        width: 10%;
      }
      span {
        margin-left: 20px;
        white-space: nowrap;
      }
    }
    &:hover,
    &:focus-within {
      background: #efefef;
      cursor: pointer;
    }
    &:focus-within a {
      outline: none;
    }
  }
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
  height: 60px;
  align-items: center;
}
</style>