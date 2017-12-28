<template>
    <div class="order-fill">
        <oHead headTitle="填写订单"></oHead>
        <h4>[尊享6日游]纽约+费城+华盛顿+尼亚加拉大瀑布+波士顿+哈佛大学|畅游名城博览名校</h4>
        <div class="order-info">
            <div class="title">订购人信息</div>
            <div class="information">
                <label>
                    <span>邮箱</span>
                    <input type="text" placeholder="请输入您的电子邮箱">
                </label>
                <label>
                    <span>姓名</span>
                    <input type="text" placeholder="请输入您的姓名">
                </label>
                <label class="clear">
                    <span>手机号码</span>
                    <div class="left">
                        <span>中国</span>
                        <i>+86</i>
                        <input type="text" placeholder="请输入您的手机号码">
                    </div>
                </label>
            </div>
        </div>
        <div class="connect">
            <div class="title">
                游客1
            </div>
            <div class="connect-information">
                <label>
                    <span>姓(英文)</span>
                    <input type="text" placeholder="请输入姓的拼音或者英文">
                </label>
                <label>
                    <span>名(英文)</span>
                    <input type="text" placeholder="请输入名的拼音或者英文">
                </label>
                <label>
                    <span>性别</span>
                    <input type="text" placeholder="请输入您的姓名">
                </label>
                <label>
                    <span>邮箱</span>
                    <input type="text" placeholder="请输入您的电子邮箱">
                </label>
                <div class="clear phone-label">
                    <span>手机号码</span>
                    <div class="left" id="JS_customers_telephone"></div>
                </div>
            </div>
        </div>
        <div class="order-message">
            <div class="title">订购留言</div>
            <textarea class="message" name="" id="" placeholder="如您对行程有特殊要求,请务必在此留言"></textarea>
        </div>
        <div class="protocol">我已阅读并接受<span>《订购协议》</span></div>
        <div class="order-btn">
            <button>同意协议并提交</button>
        </div>
    </div>
</template>

<script>
    import oHead from '../components/headOrder.vue'
    export default{
        data(){
            return{

            }
        },
        mounted(){
            new this.$mobile({
                el: '#JS_customers_telephone',
                tipson: true,
                needIco:false,	//判断是否需要国旗
                tipText : ' ',
                initValue: {
                    phoneValue: "+86 1869586585",//+86 18098916029
                    zhWidth: 45,
                    tipson : false,
                    phoneWidth: 170,
                    placeholder : '输入您的手机号'
                },
                areaEnDisplay:true,//显示英文国家
                name: 'customers_telephone',
                areaname: 'customers_areaname'
            });
        },
        components: {oHead}
    }
</script>

<style lang="scss" scoped>
    @import "../plugins/mobilePhone/mobilephone.css";
    .order-fill{
        background-color: #f6f6f6;
        &>h4{
            background-color: #fff;
            padding: .5rem;
        }
        .title{
            font-weight: 600;
            padding: .3rem .5rem;
        }
        label, .phone-label{
            padding: .4rem 0;
            background-color: #fff;
            display: block;
            width: 100%;
            line-height: 1rem;
            border-top: 1px solid #ccc;
        &:last-child{
             border-bottom: 1px solid #ccc;
        }
        &>span{
              float: left;
              width: 3.2rem;
              padding: 0 .2rem;
              text-align: right;
              border-right: 1px solid #ccc;
              margin-right: .3rem;
          }
        }
        .order-info{
            .information{
                padding: 0 .5rem;
            }
        }
        .connect{
            .connect-information{
                padding: 0 .5rem;
            }
        }
        .order-message{
            padding: 0 .5rem;
            .message{
                resize: none;
                width: 100%;
                height: 4.5rem;
                padding: .2rem;
                border: 1px solid #ccc;
            }
        }
        .protocol{
            padding: .3rem 0;
            text-align: center;
            span{
                color: #52A6F0;
            }
        }
        .order-btn{
            padding: .3rem .5rem;
            button{
                width: 100%;
                line-height: 1.8rem;
                color: #fff;
                background-color: #ED8426;
                border-radius: .2rem;
                font-size: .8rem;
            }
        }
    }
</style>