<template>
    <header class="m-head">
        <router-link class='title left' to='/home'><img src="../assets/image/logo.png" alt="logo"></router-link>
        <slot name="bread"></slot>
        <ul class='nav right clear'>
            <li :class="icon1">
                <span v-if="icon1 == 'phone'" @click="phoneShowSwitch"></span>
                <span v-else @click="searchSwitch"></span>
            </li>
            <li :class="icon2">
                <router-link v-if="icon2 == 'user'" to="/home"></router-link>
                <span v-else @click="navListSwitch"></span>
            </li>
        </ul>

        <transition-group name="fadein">
            <!--搜索模块-->
            <m-search v-show="searchState" key="search"></m-search>
            <!--导航模块-->
            <m-navlist v-show="navListState" key="navlist"></m-navlist>
        </transition-group>
    </header>
</template>

<script>
    import {mapState} from 'vuex'
    import store from '../store'
    import mSearch from './search'
    import mNavlist from './navlist'

    export default{
        data(){
            return{

            }
        },
        props: {
            icon1: { //右侧图标样式参数,默认搜索
               type: String,
               default: "search"
            },
            icon2: {//右侧图标样式参数,默认导航
                type: String,
                default: "navList"
            }
        },
        computed: {
            ...mapState(['phoneState', 'searchState', 'navListState'])
        },
        methods: {
            //电话弹出层状态逻辑
            phoneShowSwitch(){
                store.commit("zIndexStateC", true)
                store.commit('phoneStateC')
                store.commit('publicBgStateC')
            },
            searchSwitch(){
                store.commit("searchStateC")
                this.modalOpen.afterOpen()
            },
            navListSwitch(){
                store.commit("navListStateC")
                this.modalOpen.afterOpen()
            }
        },
        components: {mSearch, mNavlist}
    }
</script>

<style lang='scss' scoped>
    .m-head{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2.5rem;
        line-height:2.5rem;
        padding: 0 .5rem; 
        background-color: #f6f6f6;
        border-bottom: 1px solid #ccc;
        z-index: 100;
        .title{
            display: inline-block;
            width: 95px;
            img{
                vertical-align: middle;
            }
        }
        .bread{
            margin-left: 100px;
            margin-right: 85px;
        }
        .nav{
            position: absolute;
            right:.5rem;
            top:.5rem;
            li{
                float: left;
                a, span{
                    display: block;
                    width: 1.25rem;
                    height: 1.75rem;
                    background: url(../assets/image/webAppSprite.png) no-repeat 0 0;
                    background-size: 10rem 10rem;
                }
            }
            li.phone span{
                background-position: 0 -.3rem;
                margin-right: .8rem;
            }
            li.user a{
                background-position: -1.4rem -.3rem;
            }
            li.search span{
                background-position: -2.8rem -.3rem;
                margin-right: .8rem;
            }
            li.navList span{
                background-position: -4.4rem -.3rem;
            }
        }
    }
</style>