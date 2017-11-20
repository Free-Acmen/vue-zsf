<template>
    <div class="navlist">
        <header class="head clear">
            <span class="close" @click="navlistClose"></span>
            <span>导航</span>
            <ul class="head-right">
                <li class="phone" @click="phoneSwitch"><span></span></li>
                <li class="user"><router-link to="/"></router-link></li>
            </ul>
        </header>
        <section class="section">
            <div class="nav-list clear">
                <dl class="clear">
                    <dt>美西</dt>
                    <dd><router-link to="/">纽约</router-link></dd>
                    <dd>华盛顿</dd>
                    <dd>纽约</dd>
                    <dd>纽约</dd>
                    <dd>华盛顿</dd>
                    <dd>纽约</dd>
                </dl>
                <dl class="clear">
                    <dt>美果冻还啊</dt>
                    <dd>纽约</dd>
                    <dd>华盛顿</dd>
                    <dd>纽约</dd>
                    <dd>纽约</dd>
                    <dd>华盛顿</dd>
                    <dd>纽约</dd>
                </dl>
                <dl class="clear">
                    <dt>美果冻还啊</dt>
                    <dd><router-link to="/">纽约</router-link></dd>
                    <dd>华盛顿</dd>
                    <dd>纽约</dd>
                    <dd>纽约</dd>
                    <dd>华盛顿</dd>
                    <dd>纽约</dd>
                    <dd>纽约</dd>
                    <dd>华盛顿</dd>
                    <dd>纽约</dd>
                </dl>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import store from '../store'
    export default{
        data(){
            return {

            }
        },
        computed:{
             ...mapState(["navListState", "phoneState", 'zIndexState'])
        },
        methods: {
            navlistClose(){
                this.modalOpen.beforeClose()
                store.commit("navListStateC")
            },
            phoneSwitch(){
                store.commit("zIndexStateC")
                store.commit('publicBgStateC')
                store.commit("phoneStateC")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navlist{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        overflow-y: auto;
        z-index: 300;
        .head {
            text-align: center;
            font-size: .8rem;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #F6F6F6;
            z-index: 100;
            .close {
                position: absolute;
                top: .5rem;
                left: .5rem;
                width: 1.5rem;
                height: 1.5rem;
                border: 1px solid red;
            }
            .head-right{
                position: absolute;
                right:.5rem;
                top:.5rem;
                li{
                    float: left;
                    span, a{
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
            }
        }
        .section {
            margin-top: 2.5rem;
            line-height: 1.5rem;
            .nav-list {
                dl {
                    text-align: center;
                    padding: 0 .25rem;
                    dt {
                        position: relative;
                        padding-bottom: .25rem;
                        &:before,&:after {
                            content: '';
                            display: block;
                            position: absolute;
                            top: .8rem;
                            width: 38%;
                            border-top: 1px solid #e4e4e4;
                        }
                        &:before {
                            left: -.25rem;
                        }
                        &:after {
                            right: -.25rem;
                        }
                    }
                    dd {
                        float: left;
                        width: 22%;
                        margin: 0 .23rem .4rem;
                        border: 1px solid #e4e4e4;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }

        }
    }
</style>














