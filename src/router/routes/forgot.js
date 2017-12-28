import Forgot from '../../pages/forgotPwd'
import store from '../../store'
import type from '../../store/mutation-type'

export default{
    name:'forgot',
    path: '/forgot',
    component: Forgot,
    beforeEnter: function(to, from, next){
        store.commit(type.LOADING_FLAG, true)
        setTimeout(function(){
            store.commit(type.LOADING_FLAG, false)
            store.commit(type.NET_STATUS, '')
        },100)
        next()
    }
}