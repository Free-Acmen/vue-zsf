<template>
    <div class="search">
        <header class="head clear">
            <span class="close" @click="searchClose"></span>
            <span>选择、搜索目的地</span>
            <div class="search-input" :class="{'search-input-focus': searchFocus}">
                <input type="text" placeholder="请输入出发城市或想去的景点" v-model="searchKeyWord" @focus="focusFuc" @blur="blurFuc">
                <span class="search-btn">搜索</span>
            </div>
        </header>
        <section class="section">
            <div class="default-list clear" v-if="searchDefault.length"  v-show="!searchResult.length">
                <dl class="clear" v-for="item in searchDefault[0].list">
                    <dt>{{item.tbmd_name}}</dt>
                    <dd v-for="list in item.list"><router-link to="/">{{list.tbmd_name}}</router-link></dd>
                </dl>
            </div>
            <div class="result-list" v-if="searchResult.length">
                <p v-for="item in searchResult"  :data-searchTid="item.type_id">
                    <span>{{item.title}}</span>
                    <span class="" v-if="item.text != '&nbsp;'">{{item.text}}</span>
                    <span class="right">约{{item.count}}个结果</span>
                </p>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import store from '../store'
    import type from '../store/mutation-type'
    import ajaxUrl from '../store/ajaxUrl'

    export default{
        data(){
            return {
                searchFocus: false,
                ResultList: false,
                searchKeyWord: '',
                searchDefault: [],
                searchResult: [],
                debounce: 500,
                timer: null
            }
        },
        props:{
            searchData: {
                type: Array
            }
        },
        created(){
            if(this.searchData.length>0){
                this.searchDefault = this.searchData
            }else if(this.home.homeData.length>0){
                this.searchDefault = this.home.homeData.SearchBoxMenu
            }else{
                this.$http.get(ajaxUrl.searchDeafut).then( response => {
                    this.searchDefault = response.data.SearchBoxMenu
                })
            }
        },
        watch: {
            searchKeyWord(val, old){
                clearTimeout(this.timer)
                    this.timer = setTimeout(() => {
                        let url = ajaxUrl.searchKey(val)
                        this.$http.get(url).then(response => {
                            this.searchResult = []
                            response.data.rows.forEach((val) => {
                                if(typeof val.sub_data != 'undefined'){
                                    val.sub_data.forEach(item => {
                                        item.title=val.text
                                        this.searchResult.push(item)
                                    })
                                }
                            })
                        })
                }, this.debounce)
            }
        },
        computed:{
             ...mapState(["searchState","home"])
        },
        methods: {
            searchClose(){
                this.modalOpen.beforeClose()
                store.commit("searchStateC")
                this.searchKeyWord = ''
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