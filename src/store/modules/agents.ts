import Vue from "vue"
import { Commit } from 'vuex'

interface Agent {
    id: number
    name: string
    os: string
    status: string
    type: string
    ip: string
    location: string
    resources: string[]
}

interface ResourcesPayload {
    id: number
    resources: string
}

export interface State {
    agents: Agent[]
    agentShowPopUp: number | null
}

// initial state
const state: State = {
    agents: [],
    agentShowPopUp: null
}

const getters = {
    getAgentCount: (state: State) => () => {
        if (state.agents.length == 0) return
        return state.agents.length
    },
    getAgentCountByStatus: (state: State) => (status: string) => {
        if (state.agents.length == 0) return
        const count = state.agents.reduce((acc, cur) => {
            if (cur.status === status) {
                return ++acc
            } else {
                return acc
            }
        }, 0)
        return count
    },
    getAgentCountByType: (state: State) => (type: string) => {
        if (state.agents.length == 0) return
        const count = state.agents.reduce((acc, cur) => {
            if (cur.type === type) {
                return ++acc
            } else {
                return acc
            }
        }, 0)
        return count
    }
}

const mutations = {
    loadAllAgents: (state: State) => {
        Vue.axios.get("http://test.nekosaysmeow.cyou:4000/api/agents").then((response) => {
            console.log(response.data)
            state.agents = response.data
            //Vue.set(state, 'agents', response.data)
        })
    },
    addResourcesByAgentId: async (state: State, payload: ResourcesPayload) => {
        const { id, resources } = payload
        const resourcesToAdd = resources.split(",")
        const jsonToUpdate = state.agents.find(agent => agent.id == id);
        if (jsonToUpdate) {
            const copy = JSON.parse(JSON.stringify(jsonToUpdate))
            resourcesToAdd.forEach(element => {
                if (!copy['resources'].includes(element)) {
                    copy['resources'].push(element)
                }
            });
            const res = await Vue.axios.put(`http://test.nekosaysmeow.cyou:4000/api/agents/${id}`, copy)
            jsonToUpdate['resources'] = res.data['resources']
            //Vue.set(state, 'agents', state.agents)
        }
    },
    deleteResourcesByAgentId: async (state: State, payload: ResourcesPayload) => {
        const { id, resources } = payload
        const jsonToUpdate = state.agents.find(agent => agent.id == id)
        if (jsonToUpdate) {
            const copy = JSON.parse(JSON.stringify(jsonToUpdate))
            const len = copy['resources'].length
            for (let i = 0; i <= len; i++) {
                if (copy['resources'][i] === resources) {
                    copy['resources'].splice(i, 1)
                    break
                }
            }
            const res = await Vue.axios.put(`http://test.nekosaysmeow.cyou:4000/api/agents/${id}`, copy)
            jsonToUpdate['resources'] = res.data['resources']
            //Vue.set(state, 'agents', state.agents)
        }
    },
    showAgentListPopUpDialog: (state: State, id: number) => {
        Vue.set(state, "agentShowPopUp", id)
    },
    closeAgentListPopUpDialog: (state: State) => {
        Vue.set(state, "agentShowPopUp", null)
    }
}

const actions = {
    loadAllAgents: (context: { commit: Commit }) => {
        context.commit('loadAllAgents')
    },
    addResourcesByAgentId: (context: { commit: Commit }, payload: ResourcesPayload) => {
        context.commit('addResourcesByAgentId', payload)
    },
    deleteResourcesByAgentId: (context: { commit: Commit }, payload: ResourcesPayload) => {
        context.commit('deleteResourcesByAgentId', payload)
    },
    showAgentListPopUpDialog: (context: { commit: Commit }, id: number) => {
        context.commit('showAgentListPopUpDialog', id)
    },
    closeAgentListPopUpDialog: (context: { commit: Commit }) => {
        context.commit('closeAgentListPopUpDialog')
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}