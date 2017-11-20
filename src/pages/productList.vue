<template>
    <div class="product-list">
        <m-head></m-head>
        <m-filter></m-filter>
        <div class="filter-top">
            <list-item v-for="item in data" :key="item"></list-item>
        </div>
        <m-foot></m-foot>
    </div>
</template>

<script>
    import mHead from '../components/head'
    import mFoot from '../components/mFooter'
    import listItem from '../components/listItem'
    import mFilter from '../components/filter'

    export default{
        data(){
            return {
                data:[1,2,3,4,5,6,7,8,9]
            }
        },
        created(){

        },
        components:{mHead, mFoot, listItem, mFilter}
    }
</script>

<style lang="scss" scoped>
    .product-list{

    }
</style>