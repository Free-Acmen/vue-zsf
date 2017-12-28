/**
 * 筛选公共状态树
 * */

const state = {
    navIndex: -1,
    sortIndex: 0,
    joinIndex: 0
}

const actions = {
    
}

const getters = {}

const mutations = {
    navIndex(state, navIndex) {
        state.navIndex = navIndex
    },
    sortIndex(state, sortIndex){
        state.sortIndex = sortIndex
    },
    joinIndex(state, joinIndex){
        state.joinIndex = joinIndex
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}