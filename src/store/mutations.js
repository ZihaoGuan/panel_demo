import Vue from "vue"

export default {
    loadAllAgents: (state) => {
        Vue.axios.get("http://nekosaysmeow.cyou:4000/api/agents").then((response) => {
            console.log(response.data)
            state.agents = response.data
            //Vue.set(state, 'agents', response.data)
        })
    },
    addResourcesByAgentId: (state, payload) => {
        let { id, resources } = payload
        let resourcesToAdd = resources.split(",")
        let jsonToUpdate = state.agents.find(agent => agent.id == id);
        if (jsonToUpdate) {
            let copy = JSON.parse(JSON.stringify(jsonToUpdate))
            resourcesToAdd.forEach(element => {
                if (!copy['resources'].includes(element)) {
                    copy['resources'].push(element)
                }
            });
            Vue.axios.put(`http://nekosaysmeow.cyou:4000/api/agents/${id}`, copy).then((response) => {
                jsonToUpdate['resources'] = response.data['resources']
                //Vue.set(state, 'agents', state.agents)
            })
        }
    },
    deleteResourcesByAgentId: (state, payload) => {
        let { id, resource } = payload
        let jsonToUpdate = state.agents.find(agent => agent.id == id)

        let copy = JSON.parse(JSON.stringify(jsonToUpdate))
        let len = copy['resources'].length
        for (let i = 0; i <= len; i++) {
            if (copy['resources'][i] === resource) {
                copy['resources'].splice(i, 1)
                break
            }
        }
        Vue.axios.put(`http://nekosaysmeow.cyou:4000/api/agents/${id}`, copy).then((response) => {
            jsonToUpdate['resources'] = response.data['resources']
            //Vue.set(state, 'agents', state.agents)
        })
    },
    showAgentListPopUpDialog: (state, id) => {
        Vue.set(state, "agentShowPopUp", id)
    },
    closeAgentListPopUpDialog: (state)=>{
        Vue.set(state, "agentShowPopUp", null)
    }
}