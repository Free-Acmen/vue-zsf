import List from '../../pages/productList'
import store from '../../store'
import type from '../../store/mutation-type'

export default {
    name: 'productList',
    path: '/list/:productBelo',
    component: List,
    beforeEnter: function(to, before, next) {
        const productBelo = to.params.productBelo
        console.log(productBelo);
        store.commit(type.LOADING_FLAG, true)
        setTimeout(function(){
            store.commit(type.LOADING_FLAG, false)
            store.commit(type.NET_STATUS, '')
        },1000)
        next()
    }
}