
const state = {
    signUpData: {},
    orderProtocol: false
}

const actions = {

}

const getters = {}

const mutations = {
    signUpData(state, signUpData) {
        state.homeData = homeData
    },
    changeOrder(state,status){
        state.orderProtocol = status
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}