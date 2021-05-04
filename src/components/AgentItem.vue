<template>
  <div class="item white-bg">
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
        <!-- -------------------- -->
        <div v-if="agent.status === 'idle'" class="status green-bg white-text">
          {{ agent.status }}
        </div>
        <div
          v-else-if="agent.status === 'building'"
          class="status orange-bg white-text"
        >
          {{ agent.status }}
        </div>
        <!-- -------------------- -->
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
        <div class="btn-square btn-add popup light-cyan-bg">
          <i
            class="icomoon icon-plus i-16 btn"
            style="color: white"
            @click="showAgentListPopUpDialog(agent.id)"
          ></i>
          <div
            class="popup-window white-bg"
            :class="{ show: agent.id == agentShowPopUp }"
            :id="'popup' + agent.id"
          >
            <p class="row">Seperate multiple resource name with commas</p>
            <div class="row">
              <input
                style="width: 100%"
                type="text"
                v-model="value"
                placeholder="Input Value"
              />
            </div>
            <div class="row">
              <div
                class="btn-square light-cyan-bg white-text btn"
                @click="addResources(agent.id, value)"
              >
                Add Resources
              </div>
              <div
                class="btn-square dimgray-bg white-text btn"
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
          class="btn-square rightmost light-cyan-bg white-text"
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
  width: 80px;
  height: 80px;
  margin: 0 10px;
}

.popup {
  position: relative;

  .popup-window {
    visibility: hidden;
    width: 570px;
    color: #fff;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    top: 125%;
    left: 0%;
    border: 2px solid #00b4cf;

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
      border-right: 2px solid #00b4cf;
      border-bottom: 2px solid #00b4cf;
    }
  }

  .show {
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
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

.rightmost {
  margin-left: auto !important;
  margin-right: 0 !important;
}

.status {
  margin: 0 20px;
  padding: 0 5px;
}
</style>
