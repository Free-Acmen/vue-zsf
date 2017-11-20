import Info from '../../pages/productInfo'
import store from '../../store'
import type from '../../store/mutation-type'

export default {
    name: 'productInfo',
    path: '/info/:productId',
    component: Info,
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