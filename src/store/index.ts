import Vue from 'vue'
import Vuex from 'vuex'

import agents, { State as AgentsState } from './modules/agents'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    agents
  }
})

export interface State {
  agents: AgentsState,
}