<template>
    <div class="order-head">
        <span class="left" @click="backOne"></span>
        {{headTitle}}
        <span class="right">
            <slot name="right"></slot>
        </span>
    </div>
</template>

<script>
    export default{
        props: ["headTitle"],
        methods: {
            backOne(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .order-head{
        position: relative;
        text-align: center;
        height: 2.5rem;
        line-height: 2.5rem;
        background-color: #4F9AF1;
        font-size: .8rem;
        color: #fff;
        span{
            width: 2.5rem;
            height: 2.5rem;
        }
        .left{
            border: 1px solid red;
        }
        .right{
            border: 1px solid red;
        }
    }
</style>