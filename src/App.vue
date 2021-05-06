<template>
  <div id="app">
    <Header @openNavBar="openNavBar" />
    <div class="wrapper">
      <Navbar :showNavBar="this.showNavBar" @closeNavBar="closeNavBar" />
      <main>
        <Agent />
      </main>
    </div>
    <Footer />
    <div :class="{ cover: agentShowPopUp }"></div>
  </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import Agent from "./views/Agent.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";

import Vue from "vue";
export default Vue.extend({
  name: "App",
  components: {
    Agent,
    Footer,
    Header,
    Navbar,
  },
  computed: {
    ...mapState("agents", ["agentShowPopUp"]),
  },
  methods: {
    openNavBar() {
      this.showNavBar = true;
    },
    closeNavBar() {
      this.showNavBar = false;
    },
  },
  data() {
    return {
      showNavBar: false,
    };
  },
});
</script>

<style lang="scss">
body {
  background-color: $dark-grey-color;
}

.wrapper {
  max-width: 1200px;
  margin: auto;
}

main {
  margin-top: 60px;
  padding: 0.5rem;
}

@media only screen and (min-width: $desktop-size) and (max-width: $desktop-HD-size) {
  main {
    margin-left: 300px;
  }
}

@media only screen and (min-width: $desktop-HD-size) {
  main {
    margin-left: 300px;
  }
}

@media only screen and (max-width: $desktop-size) {
  .cover {
    background: black;
    opacity: 0.3;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    top: 0;
    left: 0;
  }
}

//default setting
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #2d4054;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
}

.i-16 {
  font-size: 16px;
}

.i-20 {
  font-size: 20px;
}

.white-bg {
  background-color: white;
}

.white-text {
  color: white;
}

.light-grey-bg {
  background-color: $light-grey-color;
}

.dark-grey-bg {
  background-color: $dark-grey-color;
}

.orange-bg {
  background-color: $orange-color;
}

.green-bg {
  background-color: $green-color;
}

.light-cyan-bg {
  background-color: $light-cyan-color;
}

.light-cyan-text {
  color: $light-cyan-color;
}

.dark-cyan-bg {
  background-color: $dark-cyan-color;
}

.slategray-bg {
  background-color: $slategray-color;
}

.dimgray-bg {
  background-color: $dimgray-color;
}

.text-center {
  text-align: center;
}

.column {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;
}
</style>