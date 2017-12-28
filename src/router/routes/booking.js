import Booking from '../../pages/booking'
import store from '../../store'
import type from '../../store/mutation-type'

export default {
    name: 'booking',
    path: '/booking/:productId',
    component: Booking,
    beforeEnter: function(to, before, next) {
        const productId = to.params.productId
        console.log(productId)
        store.commit(type.LOADING_FLAG, true)
        setTimeout(function(){
            store.commit(type.LOADING_FLAG, false)
            store.commit(type.NET_STATUS, '')
        },100)
        next()
    }
}