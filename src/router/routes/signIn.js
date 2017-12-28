import SignIn from '../../pages/signIn'
import store from '../../store'
import type from '../../store/mutation-type'

export default{
    name:'sing-in',
    path: '/signin',
    component: SignIn,
    beforeEnter: function(to, from, next){
        store.commit(type.LOADING_FLAG, true)
        setTimeout(function(){
            store.commit(type.LOADING_FLAG, false)
            store.commit(type.NET_STATUS, '')
        },100)
        next()
    }
}