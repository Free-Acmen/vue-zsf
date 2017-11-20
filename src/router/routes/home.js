import Home from '../../pages/home'
import store from '../../store'
import type from '../../store/mutation-type'

export default {
    path: '/home',
    component: Home,
    beforeEnter: function(to, before, next) {
        store.commit(type.LOADING_FLAG, true)
        setTimeout(function(){
            store.commit(type.LOADING_FLAG, false)
            store.commit(type.NET_STATUS, '')
        },2000)
        next()
    }
}