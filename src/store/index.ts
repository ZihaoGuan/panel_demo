import Vue from 'vue'
import Vuex from 'vuex'

import agents, { State as AgentsState } from './modules/agents'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    agents
  }
})

export interface State {
  agents: AgentsState,
}