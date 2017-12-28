<template>
    <div class="m-signin">
        <m-head headTitle="会员登陆">
            <router-link to="/signup" slot="right" class="sign-up">注册</router-link>
        </m-head>
        <div class="contain">
            <ul class="clear">
                <li :class="{selected: signWay}" @click="chagneSign(1)">邮箱登录</li>
                <li :class="{selected: !signWay}" @click="chagneSign(2)">手机登陆</li>
            </ul>
            <form class="sigin-form">
                <input type="hidden" v-model="signData.loginType">
                <div v-show="signWay" class="email">
                    <input type="text" v-model="signData.email_address" placeholder="请输入您的注册邮箱">
                </div>
                <div v-show="!signWay" id="login-phone"></div>
                <div>
                    <input type="password" v-model="signData.password" placeholder="请输入您的注册密码">
                </div>
            </form>
            <router-link class="forgot-psw" to="/forgot">忘记密码?</router-link>
            <button class="sign-btn" @click="signIn">登录</button>
        </div>
    </div>
</template>

<script>
    import mHead from '../components/headOrder'

    export default{
        data(){
            return{
                signData: {
                    loginType: 'email',
                    email_address: '',
                    password: ''
                }
            }
        },
        mounted(){
            new this.$mobile({
                el: '#login-phone',
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
            signWay(){
                return this.signData.loginType == "email"
            }
        },
        methods: {
            chagneSign(type){
                if(type==1){
                    this.signData.loginType = 'email'
                }else{
                    this.signData.loginType = 'phone'
                }
            },
            signIn(){
                var data = $(".sigin-form").serialize()
                console.log(data)
                console.log(this.signData)
//                this.$http.post('http://m.lmn-trunk.com/ajax.php?mod=login&action=process&language_code=gb2312', this.signData)
//                        .then(function(response){
//                            console.log(response)
//                        })

                this.$http({
//                    headers: {
//                        'Content-Type': 'application/x-www-form-urlencoded',
//                    },
                    method: 'post',
                    url: 'http://m.lmn-trunk.com/ajax.php?mod=login&action=process&language_code=gb2312',
                    data: {
                        loginType: 'email'
                    }
                }).then(function(response){
                    console.log(response)
                })
            }
        },
        components: {mHead}
    }
</script>

<style lang="scss" scoped>
    @import "../plugins/mobilePhone/mobilephone.css";
    .m-signin{
        background-color: #F6F6F6;
        .sign-up{
            color: #fff;
            font-size: .6rem;
        }
        .contain{
            padding: 1.8rem 1rem;
            ul{
                border: 1px solid #4DA4ED;
                background-color: #fff;
                border-radius: .3rem;
                margin-bottom: .8rem;
                li{
                    float: left;
                    width: 50%;
                    text-align: center;
                    line-height: 1.2rem;
                    color: #4DA4ED;
                    &:first-child{
                        border-top-left-radius: .3rem;
                        border-bottom-left-radius: .3rem;
                    }
                    &:last-child{
                         border-top-right-radius: .3rem;
                         border-bottom-right-radius: .3rem;
                    }
                    &.selected{
                        background: #4DA4ED;
                        color: #fff;
                    }
                }
            }
            .sigin-form{
                border-radius: .3rem;
                background: #fff;
                padding: 0 1rem;
                div{
                    &>input{
                        width: 100%;
                        padding: .58rem 0;
                    }
                }
                .email, #login-phone{
                    border-bottom: 1px solid #D6D8DC;
                }
                #login-phone{
                    padding: .45rem 0;
                }
            }
            .forgot-psw{
                float: right;
                line-height: 2rem;
            }
            .sign-btn{
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