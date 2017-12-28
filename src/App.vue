<template>
  <div id="m-app">
    <transition name='router-fade' mode='out-in'>
      <m-error v-if='netStatus' :netStatus='netStatus'></m-error>
      <m-loading v-else-if='!netStatus && loadingFlag'></m-loading>
      <router-view v-else></router-view>
    </transition>

    <!--手机号模块-->
    <transition name="phone">
       <m-phone v-show="phoneState"></m-phone>
    </transition>
    <div class="public-bg" :class="{'bg-zindex': zIndexState}" v-show="publicBgState" @click="bgSwitch"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import mError from './components/error'
import mLoading from './components/loading'
import mPhone from './components/phone'
import store from './store'

export default {
    data(){
        return {
        }
    },
    components: {
        mError,
        mLoading,
        mPhone
    },
    computed: {
      ...mapState(['loadingFlag','netStatus', 'phoneState', 'publicBgState', 'zIndexState'])
    },
    methods:{
        //背景弹出层状态逻辑
        bgSwitch(){
            store.commit('phoneStateC', false);
            store.commit('publicBgStateC');
            store.commit('zIndexStateC', false);
            store.commit("navIndex", -1);
            store.commit('changeOrder', false);

        }
    }
}
</script>

<style rel="stylesheet/scss" lang='scss'>
    @import './assets/style/reset';
    #m-app{
        font-size: .6rem;max-width: 720px;margin: 0 auto;min-height: 100%;
    }
    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }

    .phone-enter, .phone-leave-to{
        opacity: 0;-moz-transform: translate(0, 160px);-webkit-transform: translate(0, 160px);transform: translate(0, 160px);
    }
    .phone-enter-active, .phone-leave-active{
        -webkit-transition: all .3s linear;transition: all .3s linear;
    }
    .phone-enter-to, .phone-leave{
        opacity: 1;
    }

    .fadein-enter{
        opacity: 0;
    }
    .fadein-enter-active{
        -webkit-transition: all .3s linear;transition: all .3s linear;
    }

    //公共背景弹出层样式
    .public-bg{
       position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 80;background-color: rgba(0, 0, 0, .6);
       &.bg-zindex{
          z-index: 340;
       }
    }

</style>
