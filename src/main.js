// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import store from './store'
import './config/fontsize'

// import './plugins/swiper.min'
// Object.definePrototype(Vue.prototype, '$swiper', { value: Swiper})

/**
 * 解决滑动穿透问题
 * */

Vue.prototype.modalOpen = (function(bodyCls) {
  var scrollTop;
  return {
    afterOpen: function() {
      scrollTop = document.body.scrollTop;
      document.body.classList.add(bodyCls);
      document.body.style.top = -scrollTop + 'px';
    },
    beforeClose: function() {
      document.body.classList.remove(bodyCls);
      document.body.scrollTop = scrollTop;
    }
  };
})("modal-open");


Vue.config.productionTip = false
Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper)

//挂在vue实例到到dom中
new Vue({
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
