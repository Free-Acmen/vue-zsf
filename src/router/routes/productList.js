import List from '../../pages/productList'
import store from '../../store'
import type from '../../store/mutation-type'
import {setStore, getStore} from '../../config/utils'
import axios from 'axios'

export default {
    name: 'productList',
    path: '/list/:productBelo(.*)',
    component: List,
    beforeEnter: function(to, before, next) {
        document.title = '走四方-列表页'
        let listStore = getStore('listStore')
        let productBelo = to.params.productBelo
        if(!productBelo){
            productBelo = 'east-coast'
        }
        console.log(productBelo)

        if (Object.keys(store.state.productList.listData).length !== 0 && listStore == productBelo) {
            store.commit(type.LOADING_FLAG, false);
            store.commit(type.NET_STATUS, '')
            next();
            return;
        }
        setStore('listStore', productBelo)


        store.commit(type.LOADING_FLAG, true)
        setTimeout(function(){
            store.commit(type.LOADING_FLAG, false)
            store.commit(type.NET_STATUS, '')
        },500)
        next()
    }
}