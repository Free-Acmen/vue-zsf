<template>
    <div class="forgot">
        <m-head headTitle="找回密码"></m-head>
        <div class="contain">
            <ul class="clear">
                <li :class="{selected: valiWay}" @click="changeValiWay(1)">手机验证</li>
                <li :class="{selected: !valiWay}" @click="changeValiWay(2)">邮箱验证</li>
            </ul>
            <form class="vail-form">
                <input type="hidden" v-model="valiData.type">
                <div v-show="valiWay" id="user-phone"></div>
                <div v-show="!valiWay" class="email">
                    <input type="text" placeholder="请输入您绑定的邮箱帐号">
                </div>
                <div>
                    <input type="text" placeholder="请输入验证码">
                </div>
            </form>
            <button class="submit-btn" type="button">找回密码</button>
        </div>
    </div>
</template>

<script>
    import mHead from '../components/headOrder'
    export default{
        data(){
            return{
                valiData: {
                    type: 'email'
                }
            }
        },
        mounted(){
            new this.$mobile({
                el: '#user-phone',
                tipson: true,
                needIco:false,	//判断是否需要国旗
                tipText : ' ',
                initValue: {
                    phoneValue: "+86 1869586585",//+86 18098916029
                    zhWidth: 45,
                    tipson : false,
                    phoneWidth: 200,
                    placeholder : '输入您的手机号'
                },
                areaEnDisplay:true,//显示英文国家
                name: 'customers_telephone',
                areaname: 'customers_areaname'
            });
        },
        computed: {
            valiWay(){
                return this.valiData.type == 'phone'
            }
        },
        methods: {
            changeValiWay(type){
                if(type==2){
                    this.valiData.type = 'email'
                }else{
                    this.valiData.type = 'phone'
                }
            }
        },
        components: {mHead}
    }
</script>

<style lang="scss" scoped>
    @import "../plugins/mobilePhone/mobilephone.css";
    .forgot{
        background-color: #F6F6F6;
        .contain {
            padding: 1.8rem 1rem;
            ul {
                border: 1px solid #4DA4ED;
                background-color: #fff;
                border-radius: .3rem;
                margin-bottom: .8rem;
                li {
                    float: left;
                    width: 50%;
                    text-align: center;
                    line-height: 1.2rem;
                    color: #4DA4ED;
                    &:first-child {
                        border-top-left-radius: .3rem;
                        border-bottom-left-radius: .3rem;
                    }
                    &:last-child {
                        border-top-right-radius: .3rem;
                        border-bottom-right-radius: .3rem;
                    }
                    &.selected {
                        background: #4DA4ED;
                        color: #fff;
                    }
                }
            }
            .vail-form{
                border-radius: .3rem;
                background: #fff;
                padding: 0 1rem;
                div{
                    &>input{
                          width: 100%;
                          padding: .58rem 0;
                    }
                }
                .email, #user-phone{
                    border-bottom: 1px solid #D6D8DC;
                }
                #user-phone{
                    padding: .45rem 0;
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
                margin-top: 1rem;
            }
        }
    }
</style>