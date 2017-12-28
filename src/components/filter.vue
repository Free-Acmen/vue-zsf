<template>
    <div class="m-filter">
        <ul class="filter-nav" :class="{'show-two' : groupWay}">
            <li v-for="(item, index) in navData" :class="{active: navIndex==index}" @click="navBoxSwitch(index)">{{item}}</li>
        </ul>
        <div class="container sort" :class="{active: navIndex== 0}">
            <p v-for="(item, index) in sortData" :class="{active: sortIndex==index}" @click="sortSwitch(index)">{{item}}</p>
        </div>
        <div class="container join-way" :class="{active: navIndex== 1}">
            <p v-for="(item, index) in sortData" :class="{active: joinIndex==index}" @click="joinSwitch(index)">{{item}}</p>
        </div>
        <div class="container filter-box" :class="{active: navIndex== 2}">
            <header>
                <span class="back" @click="filterClose">&lt;</span>
                <span>{{titleTxt}}</span>
                <span>全部清除</span>
            </header>
            <section class="clear">
                <ul class="left filter-left">
                    <li>线路玩法</li>
                    <li>线路玩法</li>
                    <li>线路玩法</li>
                    <li>线路玩法</li>
                    <li>线路玩法</li>
                    <li>线路玩法</li>
                    <li>线路玩法</li>
                    <li>线路玩法</li>
                    <li>线路玩法</li>
                    <li>线路玩法</li>
                    <li>线路玩法</li>
                    <li>线路玩法</li>
                    <li>线路玩法</li>
                </ul>
                <ul class="filter-right">
                    <li>美东+美西</li>
                    <li>美东+美西</li>
                    <li>美东+美西</li>
                    <li>美东+美西</li>
                    <li>美东+美西</li>
                    <li>美东+美西</li>
                    <li>美东+美西</li>
                    <li>美东+美西</li>
                    <li>美东+美西</li>
                    <li>美东+美西</li>
                    <li>美东+美西</li>
                    <li>美东+美西</li>
                    <li>美东+美西</li>
                    <li>美东+美西</li>
                </ul>
                <button class="filter-btn">确定</button>
            </section>

        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import store from '../store'

    export default{
        data(){
            return {
                navData: ['排序', '参团方式', '筛选'],
                sortData: ['综合', '价格从低到高', '价格从高到低', '热销度'],
                joinWayData: ['全部', '接机参团', '当地上车参团'],
                titleTxt: '筛选'
            }
        },
        props:{
            groupWay:{
                type: Boolean,
                default: false
            }
        },
        created(){
            if(this.groupWay){
                this.navData.splice(1,1)
            }
        },
        computed: {
            ...mapState(['publicBgState', 'zIndexState']),
            navIndex(){
                return store.state.filter.navIndex
            },
            sortIndex(){
                return store.state.filter.sortIndex
            },
            joinIndex(){
                return store.state.filter.joinIndex
            }
        },
        methods:{
            navBoxSwitch(index){
                store.commit("navIndex", index)
                store.commit('publicBgStateC', true)
                this.modalOpen.afterOpen()
            },
            sortSwitch(index){
                this.modalOpen.beforeClose()
                store.commit("navIndex", -1)
                store.commit("sortIndex", index)
                store.commit('publicBgStateC', false)
            },
            joinSwitch(index){
                this.modalOpen.beforeClose()
                store.commit("navIndex", -1)
                store.commit("joinIndex", index)
                store.commit('publicBgStateC', false)
            },
            filterClose(){
                this.modalOpen.beforeClose()
                store.commit("navIndex", -1)
                store.commit('publicBgStateC', false)
            }
        }
    }
</script>

<style scoped lang="scss">
    .m-filter{
        position: fixed;
        top: 2.5rem;
        width: 100%;
        height: 2rem;
        background-color: #fff;
        z-index: 90;
        .filter-nav{
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
            line-height: 2rem;
            li{
                position: relative;
                &.active{
                    color: #4b99f4;
                }
                &::after{
                     content: "";
                     position: absolute;
                     top: .5rem;
                     right: -1.8rem;
                     height: 1rem;
                     border-right: 1px solid #DCDCDC;
                }
                &:last-child{
                    &::after{
                        display: none;
                     }
                }
            }
            &.show-two{
                li::after{
                    right: -3.6rem;
                }
            }
        }
        .container{
            display: none;
            background-color: #fff;
            &.active{ display: block; }
            &>p{
                height: 2.4rem;
                line-height: 2.4rem;
                padding: 0 .8rem;
                border-top: 1px solid #DEDEDE;
                &.active{
                    background-color: #F9F9F9;
                }
            }
        }
        .filter-box{
            position: fixed;
            top:0 ;
            left:0 ;
            bottom:0 ;
            right: 0;
            header{
                font-size: .7rem;
                height: 2.5rem;
                line-height: 2.5rem;
                padding: 0 .5rem;
                -webkit-display: flex;
                display: flex;
                justify-content: space-between;
                background-color: #F6F6F6;
                .back{
                    font-size: 1.6rem;
                    padding-right:.8rem;
                }

            }
            .filter-left{
                max-height: 22.5rem;
                overflow-y: auto;
                width: 5rem;
                background-color: #F6F6F6;
                li{
                    text-align: center;
                    line-height: 2.2rem;
                    border-bottom: 1px solid #ccc;
                    border-right: 1px solid #ccc;
                }
            }
            .filter-right{
                max-height: 22.5rem;
                margin-left: 5rem;
                border-left: 1px solid #ccc;
                overflow-y: auto;
                position: relative;
                left: -1px;
                li{
                    padding: 0 .8rem;
                    line-height: 2.2rem;
                    border-bottom: 1px solid #ccc;
                }
            }
            .filter-btn{
                position: fixed;
                bottom: 0;
                width: 100%;
                color: #fff;
                background-color: #ED8426;
                line-height: 2.1rem;
                font-size: .9rem;
                border-radius: .2rem;
            }
        }
    }
</style>