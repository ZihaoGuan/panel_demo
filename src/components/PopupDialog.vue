<template>
  <div class="popup-window white-bg" :class="{ show: show }">
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
        @click="addResources(id, value)"
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
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
export default Vue.extend({
  name: "PopupDialog",
  props: { show: Boolean, id: Number },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    ...mapActions("agents", [
      "addResourcesByAgentId",
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
.row {
  padding: 0.5em 1em;
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

.popup-window {
  visibility: hidden;
  width: 570px;
  color: white;
  padding: 2em 0 1em 0;
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 0%;
  border: 2px solid $light-cyan-color;
  -moz-box-shadow: 0 3px 5px 2px $dark-grey-color;
  -webkit-box-shadow: 0 3px 5px 2px $dark-grey-color;
  box-shadow: 0 3px 5px 2px $dark-grey-color;

  &.show {
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
  }

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
    padding: 0.8em;
  }

  .btn-close {
    position: absolute;
    right: 0.8em;
    top: 0.8em;
    i {
      color: $light-cyan_color;
      font-size: 24px;
    }
  }
}

@media only screen and (min-width: $tablet-size) and (max-width: $desktop-size) {
  .popup-window {
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
  .popup-window {
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