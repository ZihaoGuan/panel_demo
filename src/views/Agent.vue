<template>
  <div>
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
            <AgentItem :agent="agent"></AgentItem>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState, mapGetters } from "vuex";
import AgentItem from "../components/AgentItem.vue";
import Navbar from "../components/Navbar.vue";

import Vue from "vue";
export default Vue.extend({
  components: { AgentItem, Navbar },
  name: "Agent",
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
  margin: 20px;
  flex-grow: 1;
  flex-basis: 0;
  height: 144px;
}

.search-box-container {
  position: relative;
  border: 1px solid #ccc;
  margin: 0 24px;
  background-color: $light-grey-color;
}

.search-box-container i {
  padding: 0.5rem;
  vertical-align: middle;
}

.search-box {
  border: none;
  padding: 0.5rem 0.5rem 0.5rem 0;
  flex: 1;
  background-color: $light-grey-color;
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
    opacity: 0.2;
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

  span {
    color: white;
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

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@-o-keyframes spin {
  100% {
    -o-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
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
    cursor: pointer;

    &.active {
      color: $light-cyan-color;
      border-bottom: 3px solid $light-cyan-color;
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
