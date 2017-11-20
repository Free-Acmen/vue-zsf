<template>
    <div class='m-loading'>
        <p>欢迎来到北美旅游领航者--走四方</p>
        <loading type='spiningDubbles' color='#4B99F4' width='6'></loading>
    </div>
</template>

<script>
import loading from './mLoading/mLoading'
export default{
    components:{loading}
}
</script>
<style scoped lang='scss'>
    .m-loading{
        padding: 5rem 0;
        text-align:center;
        img{
            position: relative;
            width: 3.5rem;
            top: -6.2rem;
        }
        p{
            margin-bottom: 1.5rem;
        }
    }
</style>