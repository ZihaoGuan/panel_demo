import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import store from './store/index'
import './assets/font icons/fonts.css' 


Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  store,
  render: h => h(App),
  created() {
    this.$store.dispatch('agents/loadAllAgents')
  }
}).$mount('#app')
