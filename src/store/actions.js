export default{
    loadAllAgents:({commit})=>{
        commit('loadAllAgents')
    },
    addResourcesByAgentId:({commit}, payload) => {
        commit('addResourcesByAgentId', payload)
    },
    deleteResourcesByAgentId:({commit}, payload) => {
        commit('deleteResourcesByAgentId', payload)
    },
    showAgentListPopUpDialog:({commit}, payload) =>{
        commit('showAgentListPopUpDialog', payload)
    },
    closeAgentListPopUpDialog:({commit}) =>{
        commit('closeAgentListPopUpDialog')
    }
}