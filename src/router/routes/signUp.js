import SignUp from '../../pages/signUp'
import store from '../../store'
import type from '../../store/mutation-type'

export default {
    name: 'signUp',
    path: '/signup',
    component: SignUp,
    beforeEnter: function(to, from, next){
        store.commit(type.LOADING_FLAG, true)
        setTimeout(function(){
            store.commit(type.LOADING_FLAG, false)
            store.commit(type.NET_STATUS, '')
        },100)
        next()
    }
}