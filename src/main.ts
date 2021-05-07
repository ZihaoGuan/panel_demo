import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/font icons/fonts.css'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    this.$store.dispatch('agents/loadAllAgents')
  }
}).$mount('#app')
