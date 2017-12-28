import OrderFill from '../../pages/orderFill'
import store from '../../store'
import type from '../../store/mutation-type'

export default{
    name: 'orderFill',
    path: '/orderfill',
    component: OrderFill,
    beforeEnter: function(to, before, next){
        store.commit(type.LOADING_FLAG, true)
        setTimeout(function(){
            store.commit(type.LOADING_FLAG, false)
            store.commit(type.NET_STATUS, '')
        },100)
        next()
    }
}