<template>
    <div class='m-footer'>
        <ul class="foot-link clear">
            <li><router-link to="/">访问电脑板</router-link></li>
            <li><router-link to="/">关于我们</router-link></li>
            <li><router-link to="/">联系我们</router-link></li>
            <li><router-link to="/">意见反馈</router-link></li>
        </ul>
        <p>Copyright@2008-2017 Usitrip.com|All rights reserved</p>
        <p>走四方旅游网 粤ICP备12040635号</p>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang='scss' scoped>
    .m-footer{
        background-color: #f6f6f6;
        padding: .5rem 0;
        text-align: center;
        .foot-link{
            background-color: #EBEBEB;
            color: #636363;
            margin-bottom: .5rem;
            li{
                float: left;
                width: 20%;
                margin: .25rem 0;
                &:nth-child(1){
                    width: 40%;
                }
                 &:nth-child(3){
                      border-left: 1px solid #ccc;
                      border-right: 1px solid #ccc;
                 }
            }
        }
        p{
            color: #adadad;
            line-height: 1rem;
        }
    }
</style>