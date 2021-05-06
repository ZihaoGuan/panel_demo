<template>
  <div class="wrapper">
    <Navbar :showNavBar="this.showNavBar" @closeNavBar="closeNavBar" />
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
      <div class="control-bar">
        <div
          class="type-tab"
          :class="{ active: tab === 'all' }"
          @click="selectTypeTab('all')"
        >
          All
        </div>
        <div
          class="type-tab"
          :class="{ active: tab === 'physical' }"
          @click="selectTypeTab('physical')"
        >
          Physical
        </div>
        <div
          class="type-tab"
          :class="{ active: tab === 'virtual' }"
          @click="selectTypeTab('virtual')"
        >
          Virtual
        </div>
        <div class="search-box-container">
          <i class="icomoon icon-search i-20"></i>
          <input class="search-box" />
        </div>
        <div class="layout-tab" style="margin-left: auto">
          <i class="icomoon icon-th-card btn"></i>
        </div>
        <div class="layout-tab active" style="margin-right: 10px">
          <i class="icomoon icon-th-list btn"></i>
        </div>
      </div>
      <div class="item-agents">
        <div v-for="agent in getAgentsByType(tab)" :key="agent.id">
          <AgentItem :agent="agent"></AgentItem>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import AgentItem from "../components/AgentItem.vue";
import Navbar from "../components/Navbar.vue";

import Vue from "vue";
export default Vue.extend({
  components: { AgentItem, Navbar },
  name: "Agent",
  props: {
    showNavBar: Boolean,
  },
  data() {
    return { tab: "all" };
  },
  computed: {
    //...mapState("agents", ["agents"]),
    ...mapGetters("agents", [
      "getAgentCountByStatus",
      "getAgentCountByType",
      "getAgentCount",
      "getAgentsByType",
    ]),
  },
  methods: {
    closeNavBar() {
      this.$emit("closeNavBar");
    },
    selectTypeTab(type: string) {
      this.tab = type;
    },
  },
});
</script>

<style lang="scss" scoped>
main {
  margin-top: 60px;
  padding: 5px;
}

.wrapper {
  max-width: 1200px;
  margin: auto;
}

.box-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.box {
  margin: 20px;
  flex-grow: 1;
  flex-basis: 0;
  height: 120px;
  overflow: hidden;
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
  border-radius: 0;
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
    top: -11px;
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

.control-bar {
  display: flex;
  margin: 20px;
  align-items: center;
  overflow: hidden;
  background: white;
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
    display: none;
    font-size: 20px;
    padding: 0 10px;
    &.active i {
      color: $light-cyan-color;
    }
  }
}

.btn {
  cursor: pointer;
}

.item-agents {
  display: block;
}

.box-flex {
  display: flex;
  .box-column {
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    justify-content: space-between;
  }
}

@media only screen and (max-width: $tablet-size) {
  .box-flex {
    flex-basis: 100%;
    flex-direction: row;
    .box-column {
      flex-direction: column;
      justify-content: space-evenly;
      .title {
        padding: 10px 0;
        font-size: 12px;
      }
      .number {
        padding: 10px 0;
        font-size: 20px;
      }
    }
  }
  .control-bar {
    margin-top: 0;
    background: none;
    flex-wrap: wrap;
    .search-box-container {
      order: -1;
      flex-basis: 100%;
      padding: 10px;
      background-color: white;
      margin: 10px auto;
      display: flex;
      border: none;
      input,
      i {
        background: $light-grey-color;
      }
    }
    .type-tab {
      flex-grow: 1;
      background: white;
    }
  }
}

@media only screen and (min-width: $tablet-size) and (max-width: $desktop-HD-size) {
  .box-flex {
    flex-direction: column;
    .box-column {
      margin: 10px;
      flex-direction: row;
      align-items: center;
    }
  }
}

@media only screen and (min-width: $desktop-size) and (max-width: $desktop-HD-size) {
  main {
    margin-left: 300px;
  }
  .layout-tab {
    display: block !important;
  }
}

@media only screen and (min-width: $desktop-HD-size) {
  main {
    margin-left: 300px;
  }
  .layout-tab {
    display: block !important;
  }
  .box-flex {
    .box-column {
      flex-direction: column;
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
}

//animation keyframes declaration
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
</style>
