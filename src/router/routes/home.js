import Home from '../../pages/home'
import store from '../../store'
import type from '../../store/mutation-type'
import axios from 'axios'
import ajaxUrl from '../../store/ajaxUrl'

export default {
    path: '/home',
    component: Home,
    beforeEnter: function(to, before, next) {
        document.title = '走四方-首页';
        if (Object.keys(store.state.home.homeData).length !== 0) {
            store.commit(type.LOADING_FLAG, false);
            store.commit(type.NET_STATUS, '')
            next();
            return;
        }
        store.commit(type.LOADING_FLAG, true)
        axios.get(ajaxUrl.home).then(function(data){
            store.commit(type.HOME_DATA, data.data)
            store.commit(type.LOADING_FLAG, false)
            store.commit(type.NET_STATUS, '')
        }).catch(function(err){
            document.title = '出错啦-走四方';
            store.commit(type.LOADING_FLAG, false)
            store.commit(type.NET_STATUS, err)
        })
        next()
    }
}