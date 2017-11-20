import Vue from 'vue'
import Router from 'vue-router'
import home from './routes/home'
import List from './routes/productList'
import Info from './routes/productInfo'


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/home' },
        home,
        List,
        Info
    ],
    scrollBehavior(to, from, savedPosition) {
        // return 期望新页面滚动到的位置
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    mode: 'history',
    activeClass: 'active'
})