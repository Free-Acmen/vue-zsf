import Vue from 'vue'
import Router from 'vue-router'
import home from './routes/home'
import List from './routes/productList'
import Info from './routes/productInfo'
import Booking from './routes/booking'
import OrderFill from './routes/orderFill'
import SignIn from './routes/signIn'
import SignUp from './routes/signUp'
import Forgot from './routes/forgot'


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/home' },
        home,
        List,
        Info,
        Booking,
        OrderFill,
        SignIn,
        SignUp,
        Forgot
    ],
    scrollBehavior(to, from, savedPosition) {
        // return 期望新页面滚动到的位置
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    mode: 'hash',
    activeClass: 'active'
})