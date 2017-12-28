<template>
    <div class="sign-up">
        <m-head headTitle="会员注册">
            <router-link slot="right" to="/signin" class="sign-in">登录</router-link>
        </m-head>
        <div class="contain">
            <form>
                <div class="form-input">
                    <div class="email">
                        <input type="text" placeholder="邮箱">
                    </div>
                    <div class="pwd">
                        <input type="password" placeholder="请设置您的密码">
                    </div>
                </div>
                <div class="order-protocol">我已阅读并接受<span @click="openOrderPro">《订购协议》</span></div>
                <button type="submit" class="submit-btn">注册</button>
            </form>
        </div>
        <order-protocol :isShow="orderProtocol" @close-order-p="closeOrderProtocol"></order-protocol>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import store from '../store'
    import mHead from '../components/headOrder'
    import orderProtocol from '../components/orderProtocol'

    export default{
        data(){
            return {

            }
        },
        computed: {
            ...mapState(['publicBgState']),
            orderProtocol(){
                return store.state.signUp.orderProtocol;
            }
        },
        methods: {
            openOrderPro(){
                store.commit('publicBgStateC', true)

                store.commit('changeOrder', true)
            },
            closeOrderProtocol(state){
                store.commit('changeOrder', false)
                store.commit('publicBgStateC', state)
            }
        },
        components: {mHead, orderProtocol}
    }
</script>

<style scoped lang="scss">
    .sign-up{
        background-color: #F6F6F6;
        .sign-in{
            color: #fff;
            font-size: .6rem;
        }
        .contain{
            padding: 1rem 1rem .8rem;
            .form-input{
                padding: 0 1rem;
                border-radius: .3rem;
                background: #fff;
                div{
                    &>input{
                        width: 100%;
                        padding: .58rem 0;
                    }
                    &.email{
                        input{
                            border-bottom: 1px solid #D6D8DC;
                        }
                    }
                }
            }
            .order-protocol{
                line-height: 2rem;
                span{
                    color: #3B92DC;
                }
            }
            .submit-btn{
                display: block;
                width: 100%;
                color: #fff;
                background-color: #ED8426;
                border-radius: .3rem;
                line-height: 1.6rem;
                font-size: .8rem;
            }
        }
    }
</style>