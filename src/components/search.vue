<template>
    <div class="search">
        <header class="head clear">
            <span class="close" @click="searchClose"></span>
            <span>选择、搜索目的地</span>
            <div class="search-input" :class="{'search-input-focus': searchFocus}">
                <input type="text" placeholder="请输入出发城市或想去的景点" @focus="focusFuc" @blur="blurFuc">
                <span class="search-btn">搜索</span>
            </div>
        </header>
        <section class="section">
            <div class="default-list clear">
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
            <div class="result-list">
                <p>浪漫巴黎的约会</p>
                <p>激情四射的冲浪</p>
                <p>浪漫巴黎的约会</p>
                <p>激情四射的冲浪</p>
                <p>浪漫巴黎的约会</p>
                <p>激情四射的冲浪</p>
                <p>浪漫巴黎的约会</p>
                <p>激情四射的冲浪</p>
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
                searchFocus: false
            }
        },
        computed:{
             ...mapState(["searchState"])
        },
        methods: {
            searchClose(){
                this.modalOpen.beforeClose()
                store.commit("searchStateC")
            },
            focusFuc(){
                this.searchFocus = true
            },
            blurFuc(){
                this.searchFocus = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        overflow-y: auto;
        z-index: 300;
        .head{
            text-align: center;
            font-size: .8rem;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #F6F6F6;
            line-height:2rem;
            padding-bottom: .25rem;
            z-index: 100;
            .close{
                position:absolute;
                top: .25rem;
                left: .5rem;
                width: 1.5rem;
                height: 1.5rem;
                border: 1px solid red;
            }

            .search-input{
                padding: 0 .5rem;
                text-align: left;
                input{
                    height: 1.5rem;
                    padding-left: 1.5rem;
                    border-radius: .3rem;
                    width: 100%;
                }
                .search-btn{
                    display: none;
                    font-size: .7rem;
                    margin-left: .5rem
                }
                &.search-input-focus{
                    input{
                        width: 84%;
                    }
                    .search-btn{
                        display: inline-block;
                    }
                 }
            }
        }
        .section{
            margin-top: 4.25rem;
            line-height: 1.5rem;
            .default-list{
                dl{
                    text-align:center;
                    padding: 0 .25rem;
                    dt{
                        position: relative;
                        padding-bottom: .25rem;
                        &:before,&:after{
                            content: '';
                            display: block;
                            position: absolute;
                            top: .8rem;
                            width: 38%;
                            border-top: 1px solid #e4e4e4;
                        }
                        &:before{
                            left: -.25rem;
                        }
                        &:after{
                            right: -.25rem;
                        }
                    }
                    dd{
                        float: left;
                        width: 30%;
                        margin: 0 .25rem .4rem;
                        border: 1px solid #e4e4e4;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }

            }

            .result-list{
                padding: 0 .5rem;
                p{
                    padding: 0 .25rem;
                    border-bottom: 1px solid #e4e4e4;
                }


            }
        }


    }
</style>