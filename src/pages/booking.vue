<template>
    <div class="booking">
        <o-head headTitle="在线预定"></o-head>
        <h4>[尊享6日游]纽约+费城+华盛顿+尼亚加拉大瀑布+波士顿+哈佛大学|畅游名城博览名校</h4>
        <div class="start-date">
            <div class="title">
                <span>出发日期</span>
                <label for="companion">
                    <input id="companion" type="checkbox" v-model="companionC">结伴同游{{companionC}}
                </label>
            </div>
            <div class="date">
                <input type="hidden" value="2017-12-5">
                <span>请选择出发日期</span>
                <i>&gt;</i>
            </div>
        </div>
        <div class="room-person">
            <div class="title">
                <span>房间/人数</span>
            </div>
            <div class="room-box">
                <dl>
                    <dt>房间1(一个房间最多4人)</dt>
                    <dd>
                        <span>成人
                            <select name="room[0][adult]">
                                <option value="1">1人</option>
                                <option value="2">2人</option>
                                <option value="3">3人</option>
                            </select>
                        </span>
                        <span>
                            儿童
                            <select name="room[0][child]">
                                <option value="1">0人</option>
                                <option value="1">1人</option>
                                <option value="1">2人</option>
                                <option value="1">3人</option>
                            </select>
                        </span>
                        <span>
                            床型
                            <select name="room[0][bed]">
                                <option value="1">不限制</option>
                                <option value="2">2张标准大床</option>
                                <option value="3">一张皇冠级大床</option>
                            </select>
                        </span>
                    </dd>
                </dl>
                <div class="add-room">
                    添加一间房(儿童价标准:年龄2-9周岁)
                </div>
            </div>
        </div>
        <div class="need-choose">
            <div class="title">
                <span>必选项目</span>
            </div>
            <div class="choose-item">
                <dl>
                    <dt>请选择你的选项</dt>
                    <dd>
                        <p>请选择多选测试(选择2*3项)</p>
                        <p>
                            <label>
                                <input type="checkbox">对方的恢复健康就看大家分开是肯德基都会觉得很大幅低开凯撒电话卡了
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox">对方的恢复健康就看大家分开是肯德基都会觉得很大幅低开凯撒电话卡了
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox">对方的恢复健康就看大家分开是肯德基都会觉得很大幅低开凯撒电话卡了
                            </label>
                        </p>
                        <div class="choose-btn">
                            <button class="ok">确定</button>
                            <button class="cancel">取消</button>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>

        <div class="able-choose">
            <div class="title">
                <span>自选目的</span>
            </div>
            <div class="choose-item">
                <dl>
                    <dt>请选择你的选项</dt>
                    <dd>
                        <p>请选择多选测试(选择2*3项)</p>
                        <p>
                            <label>
                                <input name="one-choose" type="radio">对方的恢复健康就看大家分开是肯德基都会觉得很大幅低开凯撒电话卡了
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="one-choose" type="radio">对方的恢复健康就看大家分开是肯德基都会觉得很大幅低开凯撒电话卡了
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="one-choose" type="radio">对方的恢复健康就看大家分开是肯德基都会觉得很大幅低开凯撒电话卡了
                            </label>
                        </p>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="total-price">
            <div class="dollar">总费用: <span>$1212.00</span></div>
            <div class="rmb">人民币: <span>￥7415.25</span></div>
            <div class="euro">欧元: <span>€7415.25</span></div>
        </div>
        <div class="order-btn">
            <button><a href="/orderfill">立即预定</a></button>
        </div>
    </div>
</template>

<script>
    import oHead from '../components/headOrder.vue'
    export default{
        data(){
            return{
                companionC: false
            }
        },
        components: {oHead}
    }
</script>

<style lang="scss" scoped>
    .booking{
        &>h4{
            padding: .5rem;
            line-height: 1rem;
        }
        div>.title{
            height: 1.6rem;
            line-height: 1.5rem;
            background-color: #EEEEEE;
            border-top: 1px solid #CACACA;
            padding: 0 .5rem;
            span{
                color: #4e4e4e;
                font-weight: 600;
            }
            label{
                float: right;
                input{
                    vertical-align: middle;
                    margin-top: -.15rem;
                }
            }
        }
        .start-date{
            .date{
                height: 1.6rem;
                line-height: 1.5rem;
                padding: 0 .5rem;
                border-top: 1px solid #CACACA;
                i{
                    float: right;
                    font-size: 1rem;
                }
            }
        }
        .room-person{
            .room-box{
                dl{
                    padding: 0 .5rem;
                    dt{
                        padding: .4rem 0;
                        border-bottom: 1px solid #ccc;
                    }
                    dd{
                        padding: .4rem 0;
                        span{
                            select{
                                border: 1px solid #ccc;
                                width: 5rem;
                                height: 1.2rem;
                                padding-left: .3rem;
                                margin: 0 .4rem 0;
                            }
                        }
                        span:last-child{
                            display: block;
                            margin-top: .5rem;
                            select{
                                width: 12.35rem;
                            }
                        }
                    }
                }
                .add-room{
                    border-top: 1px solid #ccc;
                    line-height: 2rem;
                    text-align:center;
                }
            }
        }

        .choose-item{
            dt{
                padding: 0 .5rem;
                line-height: 1.5rem;
            }
            dd{
                background-color: #C0DDFE;
                p{
                    padding: .25rem .5rem;
                    &:not(:first-child){
                        line-height:1rem;
                        border-bottom: 1px solid #fff;
                     }
                }
                .choose-btn{
                    padding: .5rem;
                    text-align: center;
                    button{
                        width: 6rem;
                        line-height: 1.4rem;
                        border-radius: .3rem;
                        &.ok{
                            color: #fff;
                            background: #1F73D9;
                            margin-right: 1rem;
                        }
                        &.cancel{
                            background-color: #fff;
                        }
                    }
                }
            }
        }

        .need-choose{

        }

        .total-price{
            margin-top: .25rem;
            div{
                padding: 0 .5rem;
                text-align: right;
                line-height: 1.1rem;
            }
        }

        .order-btn{
            padding: .3rem .5rem;
            button{
                width: 100%;
                line-height: 1.8rem;
                color: #fff;
                font-size: .8rem;
                background: #ED8426;
                border-radius: .2rem;
            }
        }
    }
</style>