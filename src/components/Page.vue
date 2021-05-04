<template>
  <div>
    <Header />
    <div class="wrapper">
      <Navbar />
      <main>
        <div class="box-container">
          <div class="box orange-bg box-status box-building">
            <span class="title">Building</span>
            <span class="number">
              {{ this.getAgentCountByStatus("building") }}
            </span>
          </div>
          <div class="box green-bg box-status box-idle">
            <span class="title">Idle</span>
            <span class="number">
              {{ this.getAgentCountByStatus("idle") }}
            </span>
          </div>
          <div class="box white-bg box-flex text-center">
            <div class="box-column">
              <span class="title">All</span>
              <span class="number">
                {{ this.getAgentCount() }}
              </span>
            </div>
            <div class="box-column">
              <span class="title">PHYSICAL</span>
              <span class="number">
                {{ this.getAgentCountByType("physical") }}
              </span>
            </div>
            <div class="box-column">
              <span class="title">VIRTUAL</span>
              <span class="number">
                {{ this.getAgentCountByType("virtual") }}
              </span>
            </div>
          </div>
        </div>
        <div class="control-bar white-bg">
          <div class="type-tab active">All</div>
          <div class="type-tab">Physical</div>
          <div class="type-tab">Virtual</div>
          <div class="search-box-container">
            <i class="icomoon icon-search i-20"></i>
            <input class="search-box" />
          </div>
          <div class="layout-tab" style="margin-left: auto">
            <i class="icomoon icon-th-card"></i>
          </div>
          <div class="layout-tab active" style="margin-right: 10px">
            <i class="icomoon icon-th-list"></i>
          </div>
        </div>
        <div class="item-agents">
          <div v-for="agent in agents" :key="agent.id">
            <agent :agent="agent"></agent>
          </div>
        </div>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { mapState, mapGetters } from "vuex";
import Agent from "./Agent.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Navbar from "./Navbar.vue";

import Vue from "vue";
export default Vue.extend({
  components: { Agent, Footer, Header, Navbar },
  name: "Page",
  computed: {
    ...mapState("agents", ["agents"]),
    ...mapGetters("agents", [
      "getAgentCountByStatus",
      "getAgentCountByType",
      "getAgentCount",
    ]),
  },
});
</script>

<style lang="scss" scoped>
main {
  margin-top: 50px;
  padding: 5px;
  margin-right: 0;
  margin-left: 300px;
}

.wrapper {
  max-width: 1200px;
  margin: auto;
}

.box-container {
  display: flex;
  justify-content: space-between;
}

.box {
  color: #7df7a1;
  margin: 20px;
  flex-grow: 1;
  flex-basis: 0;
  height: 144px;
}

.search-box-container {
  position: relative;
  border: 1px solid #ccc;
  margin: 0 24px;
}

.search-box-container i {
  padding: 0.5rem;
  vertical-align: middle;
}

.search-box {
  border: none;
  padding: 0.5rem 0.5rem 0.5rem 0;
  flex: 1;

  &:focus {
    outline: none;
  }
}

.box-status {
  position: relative;
  text-align: center;

  &::before {
    font-size: 144px;
    position: absolute;
    right: 0;
    left: 0;
    opacity: 20%;
    line-height: 144px;
  }

  &.box-building::before {
    font-family: "cruise";
    content: "\f013";
    -webkit-animation: spin 2s linear infinite;
    -moz-animation: spin 2s linear infinite;
    -o-keyframes: spin 2s linear infinite; 
    animation: spin 2s linear infinite;
  }

  &.box-idle::before {
    font-family: "cruise";
    content: "\f0f4";
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 5%;
    left: 5%;
  }

  .number {
    font-size: 48px;
    position: absolute;
    bottom: 10%;
    right: 5%;
  }
}



.box-flex {
  display: flex;

  .box-column {
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      padding: 20px 0;
      font-size: 12px;
    }

    .number {
      padding: 20px 0;
      font-size: 20px;
    }
  }
}

.control-bar {
  display: flex;
  margin: 20px;
  align-items: center;
  height: 50px;

  .type-tab {
    height: 50px;
    font-size: 14px;
    line-height: 50px;
    width: 80px;
    text-align: center;
    border-right: 1px solid grey;
    border-color: rgba(0, 0, 0, 0.137);

    &.active {
      border-bottom: 3px solid;
    }
  }

  .layout-tab {
    font-size: 20px;
    padding: 0 10px;
  }
}

.item-agents {
  display: block;
}
</style>
