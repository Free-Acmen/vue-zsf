import Vue from 'vue'
import Vuex from 'vuex'
import type from './mutation-type'
import home from './modules/home'
import filter from './modules/filter'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        netStatus: '', //网络访问状态
        loadingFlag: true, //加载模块显示状态
        phoneState: false, //联系方式显示状态
        searchState: false, //搜索模块显示状态
        navListState: false, //导航列表显示状态
        publicBgState: false, //公共背景显示状态
        zIndexState: false  //是否提升背景层级状态
    },
    actions: {},
    mutations: {
        [type.LOADING_FLAG](state, loadingFlag) {
            state.loadingFlag = loadingFlag
        },
        [type.NET_STATUS](state, netStatus) {
            state.netStatus = netStatus
        },
        phoneStateC(state, status){  //改变相应状态的mutations
            status = typeof status != "undefined" ? status : !state.phoneState
            state.phoneState = status
        },
        searchStateC(state){
            state.searchState = !state.searchState
        },
        navListStateC(state){
            state.navListState = !state.navListState
        },
        publicBgStateC(state, status){
            status = typeof status != "undefined" ? status : !state.publicBgState
            state.publicBgState = status
        },
        zIndexStateC(state, status){
            status = typeof status != "undefined" ? status : !state.zIndexState
            state.zIndexState = status
        }
    },
    modules: { //各个页面的状态模块
        home,
        filter
    }
})

export default store