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
          <i class="icomoon icon-desktop"></i>
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
          <i class="icomoon icon-info"></i>
          {{ agent.ip }}
        </div>
        <div class="location">
          <i class="icomoon icon-folder"></i>
          {{ agent.location }}
        </div>
      </div>
      <div class="row">
        <div class="btn popup">
          <i
            class="icomoon icon-plus light-cyan-bg"
            style="color: white"
            @click="showAgentListPopUpDialog(agent.id)"
          ></i>
          <div
            class="popup-window white-bg"
            ref="popupwindow"
            :class="{ show: agent.id === agentShowPopUp }"
            :id="'popup' + agent.id"
          >
            <p class="row">Seperate multiple resource name with commas</p>
            <input
              class="row"
              type="text"
              v-model="value"
              placeholder="Input Value"
            />
            <div class="row">
              <button @click="addResources(agent.id, value)">
                Add Resources
              </button>
              <button @click="closeAgentListPopUpDialog()">Cancel</button>
            </div>
          </div>
        </div>
        <div v-for="resource in agent.resources" :key="resource">
          <div
            class="btn btn-trash"
            @click="
              deleteResourcesByAgentId({ id: agent.id, resource: resource })
            "
          >
            {{ resource }}
            <i
              class="icomoon icon-trash"
              style="font-size: 14px; color: white"
            ></i>
          </div>
        </div>
        <div
          v-if="agent.status === 'building'"
          class="green-bg white-text"
          style="font: 14; margin-left: auto"
        >
          <i
            class="icomoon icon-deny"
            style="font-size: 14px; color: white"
          ></i>
          deny
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { mapActions, mapState } from "vuex";
import Vue from "vue";
export default Vue.extend({
  name: "Agent",
  props: {
    agent: Object,
  },
  computed: {
    ...mapState(["agentShowPopUp"]),
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    ...mapActions([
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
    },
  },
});
</script>
<style scoped>
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
}

/* The actual popup */
.popup .popup-window {
  visibility: hidden;
  width: 570px;
  color: #fff;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 0%;
  border: 2px solid #00b4cf;
}

/* Popup arrow */
.popup .popup-window::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 4px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #00b4cf transparent;
}

.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

.row {
  padding: 10px;
}

.row-1 i {
  font-size: 16px;
  color: grey;
  margin-right: 7px;
}

.column {
  width: 100%;
  justify-content: space-between;
}

.btn.popup i {
  height: 18px;
  padding: 0 3px;
  font-size: 18px;
}

.btn-trash {
  background-color: #efefef;
  height: 18px;
  margin-left: 8px;
}

.status {
  margin: 0 20px;
  padding: 0 5px;
}
</style>
