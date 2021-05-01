export default {
    getAgentCount: (state) => () => {
        if (state.agents.length == 0) return
        return state.agents.length
    },
    getAgentCountByStatus: (state) => (status) => {
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
    getAgentCountByType: (state) => (type) => {
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