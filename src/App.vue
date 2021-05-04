<template>
  <div id="app">
    <Page />
  </div>
</template>

<script>
import Page from "./components/Page";

export default {
  name: "App",
  components: {
    Page,
  },
};
</script>

<style lang="scss">
$dark-grey-color:#e1e4e6;

body {
  background-color: $dark-grey-color;
}
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

.i-20{
  font-size: 20px;
}

.white-bg {
  background-color: white;
}

.white-text{
  color:white
}

.light-grey-bg {
  background-color: #f3f3f3;
}

.dark-grey-bg {
  background-color: $dark-grey-color;
}

.orange-bg {
  background-color: #ff9a2a;
}

.green-bg {
  background-color: #7fbc39;
}

.light-cyan-bg {
  background-color: #00b4cf;
}

.light-cyan-text {
  color: #00b4cf;
}

.dark-cyan-bg {
  background-color: #01869a;
}

.slategray-bg {
  background-color: #2d4054;
}

.dimgray-bg {
  background-color: #435466;
}

.column {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;
}

.text-center {
  text-align: center;
}


</style>