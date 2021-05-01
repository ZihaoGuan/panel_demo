import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import store from './store'
import './assets/font icons/fonts.css' 


Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  store,
  render: h => h(App),
  created() {
    this.$store.dispatch('loadAllAgents')
    //setTimeout(() => { this.$store.dispatch('addResourcesByAgentId', { id: 2, resources: 'abc,sc' }) }, 2000)
    
    //setTimeout(()=>{this.$store.dispatch('deleteResourcesByAgentId', {id: 2, resource: 'abc'}) }, 5000)
  }
}).$mount('#app')
