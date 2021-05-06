import { GetterTree, Getter } from 'vuex'
import { State } from './index'

const coverOn: Getter<State, any> = (state: State) => {
    return state.agents.agentShowPopUp
}

const getterTree: GetterTree<State, any> = {
    coverOn,
}

export default getterTree