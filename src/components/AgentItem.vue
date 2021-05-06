<template>
  <div class="item white-bg" :class="agent.status">
    <!-- ------------------------------------------- -->
    <img
      class="osicons"
      v-if="agent.os === 'windows'"
      src="../assets/os-icons/windows.png"
    />
    <img
      class="osicons"
      v-else-if="agent.os === 'ubuntu'"
      src="../assets/os-icons/ubuntu.png"
    />
    <img
      class="osicons"
      v-else-if="agent.os === 'suse'"
      src="../assets/os-icons/suse.png"
    />
    <img
      class="osicons"
      v-else-if="agent.os === 'debian'"
      src="../assets/os-icons/debin.png"
    />
    <img
      class="osicons"
      v-else-if="agent.os === 'centos'"
      src="../assets/os-icons/cent_os.png"
    />
    <!-- ------------------------------------------- -->
    <div class="column">
      <div class="row row-1">
        <div class="name light-cyan-text">
          <i class="icomoon icon-desktop i-16"></i>
          {{ agent.name }}
        </div>
        <div
          :class="[
            agent.status === 'idle'
              ? 'green-bg'
              : agent.status === 'building'
              ? 'orange-bg'
              : '',
          ]"
          class="status white-text"
        >
          {{ agent.status }}
        </div>
        <div class="ip" style="margin-right: 10px">
          <i class="icomoon icon-info i-16"></i>
          {{ agent.ip }}
        </div>
        <div class="location">
          <i class="icomoon icon-folder i-16"></i>
          {{ agent.location }}
        </div>
      </div>
      <div class="row">
        <div class="btn-square btn-add popup btn-blue">
          <i
            class="icomoon icon-plus i-16 btn"
            @click="showAgentListPopUpDialog(agent.id)"
          ></i>
          <div
            class="popup-window white-bg"
            :class="{ show: agent.id == agentShowPopUp }"
            :id="'popup' + agent.id"
          >
            <div class="btn-close btn" @click="closeAgentListPopUpDialog()">
              <i class="icomoon icon-close"></i>
            </div>
            <div class="row">
              <p>Seperate multiple resource name with commas</p>
            </div>
            <div class="row">
              <input type="text" v-model="value" placeholder="Input Value" />
            </div>
            <div class="row">
              <div
                class="btn-square btn btn-blue btn-add-resources"
                @click="addResources(agent.id, value)"
              >
                Add Resources
              </div>
              <div
                class="btn-square btn btn-gray btn-cancel"
                @click="closeAgentListPopUpDialog()"
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="resource in agent.resources"
          :key="resource"
          class="btn-square"
          style="background-color: #efefef"
        >
          {{ resource }}
          <i
            class="icomoon icon-trash i-16 btn"
            @click="
              deleteResourcesByAgentId({ id: agent.id, resource: resource })
            "
          ></i>
        </div>
        <div
          v-if="agent.status === 'building'"
          class="btn-square rightmost btn-blue btn"
        >
          <i class="icomoon icon-deny" style="color: white"></i>
          Deny
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { mapActions, mapState } from "vuex";
import Vue from "vue";
export default Vue.extend({
  name: "AgentItem",
  props: {
    agent: Object,
  },
  computed: {
    ...mapState("agents", ["agentShowPopUp"]),
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    ...mapActions("agents", [
      "deleteResourcesByAgentId",
      "addResourcesByAgentId",
      "showAgentListPopUpDialog",
      "closeAgentListPopUpDialog",
    ]),
    addResources(id: number, resources: string) {
      this.addResourcesByAgentId({
        id,
        resources,
      });
      this.value = "";
      this.closeAgentListPopUpDialog();
    },
  },
});
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: row;
  margin: 20px;
  padding: 5px;
}

img.osicons {
  display: none;
}

.popup {
  position: relative;

  .popup-window {
    visibility: hidden;
    width: 570px;
    color: white;
    padding: 24px 0 8px 0;
    position: absolute;
    z-index: 1;
    top: 125%;
    left: 0%;
    border: 2px solid $light-cyan-color;
    -moz-box-shadow: 0 3px 5px 2px #ccc;
    -webkit-box-shadow: 0 3px 5px 2px #ccc;
    box-shadow: 0 3px 5px 2px #ccc;

    &::after {
      content: "";
      position: absolute;
      top: -7.5px;
      left: 7.5px;
      width: 10px;
      height: 10px;
      background-color: white;
      transform: rotate(225deg);
      -webkit-transform: rotate(225deg);
      -moz-transform: rotate(225deg);
      -o-transform: rotate(225deg);
      -ms-transform: rotate(225deg);
      border-right: 2px solid $light-cyan-color;
      border-bottom: 2px solid $light-cyan-color;
    }

    input {
      width: 100%;
      padding: 10px;
    }
  }

  .show {
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
  }

  .btn-close {
    position: absolute;
    right: 10px;
    top: 10px;
    i {
      color: $light-cyan_color;
      font-size: 24px;
    }
  }
}

.row {
  padding: 5px 10px;
}

.row-1 i {
  color: grey;
  margin-right: 7px;
  vertical-align: middle;
}

.column {
  width: 100%;
  justify-content: space-between;
}

.btn-square {
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  padding: 0 10px;
  margin-right: 10px;
}

.btn {
  cursor: pointer;
}

.btn-square i {
  height: 30px;
  vertical-align: middle;
}

.btn-blue {
  background-color: $light-cyan-color;
  color: white;
  i {
    color: white;
  }
  &:hover {
    background-color: $dark-cyan-color;
  }
}

.btn-gray {
  background-color: $dimgray-color;
  color: white;
  i {
    color: white;
  }
  &:hover {
    background-color: $slategray-color;
  }
}

.rightmost {
  margin-left: auto !important;
  margin-right: 0 !important;
}

.status {
  margin: 0 20px;
  padding: 0 5px;
}

@media only screen and (max-width: $tablet-size) {
  .building.item {
    border-left: 3px solid $green-color;
  }
  .idle.item {
    border-left: 3px solid $orange-color;
  }
  .row-1 {
    flex-direction: column;
    .status {
      display: none;
    }
  }
}

@media only screen and (min-width: $desktop-HD-size) {
  img.osicons {
    display: block;
    width: 80px;
    height: 80px;
    margin: 0 10px;
  }
}

@media only screen and (min-width: $tablet-size) and (max-width: $desktop-size) {
  .popup .popup-window {
    position: fixed;
    z-index: 1000;
    top: 40vh;
    left: 50%;
    transform: translateX(-50%);
    &::after {
      display: none;
    }
  }
}

@media only screen and (max-width: $tablet-size) {
  .popup .popup-window {
    position: fixed;
    width: 100%;
    z-index: 1000;
    bottom: 0;
    left: 0;
    top: unset;
    &::after {
      display: none;
    }

    p {
      text-align: start;
      line-height: initial;
    }
  }

  .btn-add-resources {
    width: 100%;
    margin: 0;
  }

  .btn-cancel {
    display: none;
  }
}
</style>
