<template>
  <img :src="imageSource" />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "OsIcon",
  props: {
    os: String,
  },
  computed: {
    imageSource: function () {
      switch (this.os) {
        case "windows":
          return require("../assets/os-icons/windows.png");
        case "ubuntu":
          return require("../assets/os-icons/ubuntu.png");
        case "suse":
          return require("../assets/os-icons/suse.png");
        case "debian":
          return require("../assets/os-icons/debin.png");
        case "centos":
          return require("../assets/os-icons/cent_os.png");
        default:
          return "";
      }
    },
  },
});
</script>

<style lang="scss" scoped>
img {
  display: none;
}
@media only screen and (min-width: $desktop-HD-size) {
  img {
    display: block;
    width: 80px;
    height: 80px;
    margin: 0 10px;
  }
}
</style>