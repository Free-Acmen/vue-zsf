<template>
    <div class="product-list">
        <m-head></m-head>
        <m-filter></m-filter>
        <div class="filter-top" ref='loading'>
            <list-item v-for="item in data" :key="item"></list-item>
        </div>
        <m-loading v-show='loadingState' type='spiningDubbles' color='#11B91E' width='1.5'></m-loading>
        <m-foot></m-foot>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapState} from 'vuex'
    import mHead from '../components/head'
    import mFoot from '../components/mFooter'
    import listItem from '../components/listItem'
    import mFilter from '../components/filter'
    import mLoading from '../components/mLoading/mLoading'
    import {loadMoreData} from '../config/utils'


    export default{
        data(){
            return {
                loadingState: true,
                data:[1,2,3,4,5,6,7,8,9]
            }
        },
        created(){

        },
        mounted(){
            loadMoreData(this.$refs.loading, this.handLoad)
        },
        computed: {
                ...mapState({
                    homeData(state){
                        return state.productList.listData
                    }
                })
        },
        methods:{
            handLoad(){
                //到底部触发加载更多逻辑
                console.log(111)
            },
        },
        components:{mHead, mFoot, listItem, mFilter, mLoading}
    }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    .product-list{

    }
</style>