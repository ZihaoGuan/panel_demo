<template>
  <div class="item white-bg" :class="agent.status">
    <OsIcon :os="agent.os" />
    <div class="column">
      <div class="row row-1">
        <div class="name light-cyan-text">
          <i class="icomoon icon-desktop i-16"></i>
          {{ agent.name }}
        </div>
        <div :class="agent.status" class="status white-text">
          {{ agent.status }}
        </div>
        <div class="ip">
          <i class="icomoon icon-info i-16"></i>
          {{ agent.ip }}
        </div>
        <div class="location">
          <i class="icomoon icon-folder i-16"></i>
          {{ agent.location }}
        </div>
      </div>
      <div class="row row-2">
        <div class="btn-square btn-add popup btn-blue">
          <i
            class="icomoon icon-plus i-16 btn"
            @click="showAgentListPopUpDialog(agent.id)"
          ></i>
          <PopupDialog
            :show="agent.id == agentShowPopUp"
            :id="agent.id"
          />
        </div>
        <div
          v-for="resource in agent.resources"
          :key="resource"
          class="btn-square btn-delete"
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
          <i class="icomoon icon-deny white-text"></i>
          Deny
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { mapActions, mapState } from "vuex";
import Vue from "vue";
import OsIcon from "./OsIcon.vue";
import PopupDialog from "./PopupDialog.vue";

export default Vue.extend({
  name: "AgentItem",
  props: {
    agent: Object,
  },
  components: { OsIcon, PopupDialog },
  computed: {
    ...mapState("agents", ["agentShowPopUp"]),
  },
  methods: {
    ...mapActions("agents", [
      "deleteResourcesByAgentId",
      "showAgentListPopUpDialog",
    ]),
  },
});
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: row;
  margin: 1.2rem;
  padding: 0.8rem;
}

.popup {
  position: relative;
}

.row {
  padding: 0.5em 1em;
}

.row-1 i {
  color: grey;
  margin-right: 0.5em;
  vertical-align: middle;
}

.row-2 {
  flex-wrap: wrap;
  .btn-square {
    margin-top: 0.5em;
    margin-bottom: 0.1em;
  }
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
  padding: 0 0.7em;
  margin-right: 0.7em;
}

.btn {
  cursor: pointer;
}

.btn-delete{
  background: #efefef;
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

.building .status {
  background: $orange-color;
}

.idle .status {
  background: $green-color;
}

.status {
  margin: 0 1.3em;
  padding: 0 0.3em;
}

.ip{
margin-right: 1em
}

@media only screen and (max-width: $tablet-size) {
  .building.item {
    border-left: 3px solid $orange-color;
  }
  .idle.item {
    border-left: 3px solid $green-color;
  }
  .row-1 {
    flex-direction: column;
    .status {
      display: none;
    }
  }
}
</style>
