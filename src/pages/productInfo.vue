<template>
    <section class="m-info" ref="proInfo">
        <m-head></m-head>
        <section class="padding-top">
            <m-swiper :swiper-slides = "bannerData" :navBtn="btnState" :slider-btn = "btnState" :swiper-option="swipOption">
                <p class="other" slot="other">团号:152321</p>
            </m-swiper>
            <div class="time-limit clear">
                <span class="limit-left"><b>抢购</b>已预订<i>116</i>人</span>
                <span class="limit-right">
                    距离抢购结束还有<br>
                    <count-down :endTime="endTime"></count-down>
                </span>
            </div>
            <div class="pro-title">
                <h1>[畅玩7日游] 温哥华+维农市+班芙国家公园+冰河国家公园+冰原大道+维多利亚|加西自然人文之旅</h1>
                <p class="price">$360<i>起</i><del>$461</del></p>
                <div class="pro-tips">
                    <span>赠送国家门票</span>
                    <span>赠送国家门票</span>
                    <span>赠送国家门票</span>
                    <span>赠送国家门票</span>
                </div>
            </div>
            <div class="review">
                <div class="review-data">
                    <span><i>12%</i>满意&nbsp;|&nbsp;12点评</span>
                    <a href="/" class="right">查看点评</a>
                </div>
                <div class="percent">
                    <span>行程安排:11%</span>
                    <span>导游讲解:11%</span>
                    <span>订购服务:11%</span>
                </div>
            </div>
            <div class="exc-service">
                <p>专属服务</p>
                <div>
                    <span>国家公园纪念碑</span>
                    <span>专业中英文导游</span>
                </div>
            </div>
            <div class="start-end-date">
                <p>出发地: 温哥华</p>
                <p>结束的: 温哥华</p>
                <div class="date clear">
                    <s-calendar :sCalendarOp="calendarOptions"></s-calendar>
                </div>
            </div>
            <div class="travel-feat">
                <p>行程特色</p>
                <ul>
                    <li>1.最美加州一号公路的精华:最美加州一号公路,最美加州一号公路,最美加州一号公路,最美加州一号公路</li>
                    <li>2.最美加州一号公路的精华:最美加州一号公路,最美加州一号公路,最美加州一号公路,最美加州一号公路</li>
                    <li>3.最美加州一号公路的精华:最美加州一号公路,最美加州一号公路,最美加州一号公路,最美加州一号公路</li>
                    <li>4.最美加州一号公路的精华:最美加州一号公路,最美加州一号公路,最美加州一号公路,最美加州一号公路</li>
                </ul>
            </div>
            <div class="travel-profile">
                <nav class="profile-nav">
                    <span>行程概要</span>
                    <span>行程内容</span>
                </nav>
                <ul class="profile-content">
                    <li><span>D1</span>原居地(Home)-洛杉矶(Los Angeles)</li>
                    <li><span>D2</span>原居地(Home)-洛杉矶(Los Angeles)原居地(Home)-洛杉矶(Los Angeles)原居地(Home)-洛杉矶(Los Angeles)</li>
                    <li><span>D3</span>原居地(Home)-洛杉矶(Los Angeles)</li>
                    <li><span>D4</span>原居地(Home)-洛杉矶(Los Angeles)</li>
                    <li><span>D5</span>原居地(Home)-洛杉矶(Los Angeles)</li>
                </ul>
                <span class="see-info">查看详情</span>
            </div>
            <ul class="bottom-nav">
                <li>上车地址 <span class="right">&gt;</span></li>
                <li>价格明细 <span class="right">&gt;</span></li>
                <li>注意事项 <span class="right">&gt;</span></li>
                <li>用户咨询 <i>1条咨询</i> <span class="right">&gt;</span></li>
            </ul>
        </section>
        <div id="bottom" class="load-more" ref="bottom">继续拖动,参看详细行程介绍</div>
        <div class="btn-group">
            <span class="online">在线咨询</span>
            <span class="phone">电话咨询</span>
            <span class="order"><a href="/booking/25">立即订购</a></span>
        </div>
        <div class="modal-travel" v-show="modalTravelState">
            <div class="modial-content">
                <div class="travel-head">
                    <div class="title">
                        <span @click="modialClose">&lt;</span>
                        行程详情
                    </div>
                    <ul class="nav clear">
                        <li class="selected">行程介绍</li>
                        <li>上车地址</li>
                        <li>价格明细</li>
                        <li>注意事项</li>
                    </ul>
                </div>
                <div class="travel-section">
                    <div class="selected">
                        <div class="day-container">
                            <div class="day-title">
                                <span>第1天</span>
                                <span>家园(home)-纽约机场(New York)</span>
                            </div>
                            <div class="day-content">
                                <div class="travel-intro">
                                    <h4>行程介绍:</h4>
                                    <p>接送服务,由于安居对符合贷款发放贷款打飞机快递费看到蝴蝶结发卡对方的发动机东海舰队防空打飞机贷款发放开发活动空间</p>
                                    <h4>温馨提示:</h4>
                                    <p>请带够钱在出门,防止被导游扔路上</p>
                                    <dl>
                                        <dt>
                                            <div>餐饮服务</div>
                                            <div>入住酒店</div>
                                        </dt>
                                        <dd>
                                            <div>
                                                <img src="#" alt="111">
                                                <span>图片标题</span>
                                            </div>
                                            <button>查看更多</button>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script type="text/ecmascript-6">
    import mHead from '../components/head'
    import mSwiper from '../components/swiper'
    import countDown from '../components/countDown'
    import banner1 from '../assets/image/index/banner-1.jpg'

    import sCalendar from '../components/calendar/simple-calendar'

    import {Myload} from '../config/utils'

    export default{
        data(){
            return {
                swipOption: {
                    autoplay: false,
                    loop: false
                },
                btnState: false,
                bannerData : [{src: banner1, alt: "banner1"}],
                endTime: '2017-12-30 0:0:0',
                options: {
                    distance: 100,
                    bottomElem: null,
                    callback: this.travelModalS
                },
                modalTravelState: false
            }
        },
        mounted(){
            this.options.bottomElem = this.$refs.bottom
            const load = new Myload(document.documentElement, this.options)
            load.init()
        },
        computed: {
            calendarOptions () {
                let dateObj = new Date()
                return {
                    options: {
                        local: 'zh',
                        weekStartOn: 0, //定义第一列从星期及开始 0为周日
                        color: ' #f29543'
                    },
                    params: {
                        curYear: dateObj.getFullYear(),
                        curMonth: dateObj.getMonth(),
                        curDate: dateObj.getDate(),
                        curEventsDate: 'all'
                    },
                    availSale: ['2017-12-2','2017-12-8','2017-12-9','2017-12-10'],
                    saleOut: ['2017-11-19','2017-11-26','2017-11-27'],
                    name: 'calendar',
                    showIpt: false,
                    callback: function(date = {}){
                        console.log(date)
                    }
                }
            }
        },
        beforeMount(){

        },
        methods: {
            travelModalS(){
                this.modalTravelState = true
                this.modalOpen.afterOpen()
            },
            modialClose(){
                this.modalOpen.beforeClose()
                this.modalTravelState = false
            }

        },
        components: {mHead, mSwiper, countDown, sCalendar}
    }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    .m-info{
        background-color: #f6f6f6;
        .other{
            position: absolute;
            bottom:0;
            left:0;
            width: 100%;
            padding: 0 .8rem;
            text-align: right;
            color: #fff;
            line-height: 1.5rem;
            background: rgba(0, 0, 0, .6);
        }
        .time-limit{
            background-color:#FDF0E1;
            .limit-left{
                float: left;
                padding-left: .5rem;
                position: relative;
                background-color: #F78B46;
                line-height: 1.9rem;
                color: #fff;
                margin-right: 1.5rem;
                b{
                    font-weight: bold;
                    color: #fff;
                    font-size: .9rem;
                    margin-right: .5rem;
                }
                i{
                    color: #fff;
                    font-weight: bold;
                }
                &:after{
                    content: '';
                    border: 1rem solid #F78B46;
                    border-bottom-color: transparent;
                    border-top-color: transparent;
                    border-right-color: transparent;
                    position: absolute;
                    top: 0;
                    right: -2rem;
                }
            }
            .limit-right{
                line-height: .9rem;;
            }
        }
        .pro-title{
            background-color: #ffffff;
            padding: .5rem;
            h1{
                font-weight: bold;
                font-size: .65rem;
                line-height: 1rem;
            }
            .price{
                line-height: 1.5rem;
                color:#F78B45;
                font-size: .75rem;
                i{
                    color:#F78B45;
                    font-size: .5rem;
                }
                del {
                    padding-left: .15rem;
                    color: #A1A1A1;
                    font-size: .5rem;
                }
            }
            .pro-tips{
                span{
                    display: inline-block;
                    padding: .1rem .3rem;
                    color: #fff;
                    background-color: #F78B45;
                    margin-bottom: .3rem;
                }
            }
        }

        .review{
            background-color: #ffffff;
            padding: .3rem .5rem;
            margin-top: .5rem;
            line-height: 1.1rem;
            .review-data{
                span i{
                    color: #F78B45;
                    font-size: .75rem;
                    margin-right: .15rem;
                }
            }
            .percent{
                margin-top: .3rem;
                span{
                    display: inline-block;
                    background-color: #F0F0F0;
                    padding: 0 .4rem;
                    border-radius: .3rem;
                }
            }

        }

        .exc-service{
            background-color: #ffffff;
            padding: .3rem .5rem;
            margin-top: .5rem;
            p{
                font-weight: bold;
            }
            div{
                padding-top: .5rem;
                span{
                    display: inline-block;
                    padding: 0 .4rem;
                    border: 1px solid #ccc;
                    margin-right: .3rem;
                    margin-bottom: .3rem;
                }
            }
        }

        .start-end-date{
            background-color: #ffffff;
            margin-top: .5rem;
            p{
                padding: .3rem .5rem;
                border-bottom: 1px solid #ccc;
            }
            .date{
                padding: 0 .5rem .3rem;
            }
        }

        .travel-feat{
            background-color: #ffffff;
            padding: .3rem .5rem;
            margin-top: .5rem;
            p{
                font-weight: bold;

            }
            ul{
                li{
                    line-height: .9rem;
                    padding: .2rem 0;
                }
            }
        }

        .travel-profile{
            position: relative;
            background-color: #ffffff;
            margin-top: .5rem;
            .profile-nav{
                border-bottom: 1px solid #efefef;
                span{
                    display: inline-block;
                    width: 3.8rem;
                    text-align:center;
                    line-height: 1.6rem;
                    &:first-child{
                        border-right: 1px solid #efefef;
                        border-top: 1px solid #4F9AF1;
                        color: #4F9AF1;
                    }
                }
            }
            .profile-content{
                padding-left:.5rem;
                padding-right: 1.5rem;
                li{
                    border-bottom: 1px solid #efefef;
                    padding: .4rem 0;
                    margin-left: 1.8rem;
                    span{
                        display: inline-block;
                        padding-left: .2rem;
                        width: 1.2rem;
                        margin-right: .6rem;
                        margin-left: -1.8rem;
                        background-color: #DCEBFC;
                    }
                }
            }
            .see-info{
                position: absolute;
                top: 50%;
                right: 0;
                width:1rem;
                color: #4F9AF1;
                -webkit-transform: translate(0, -50%);
                transform: translate(0, -50%);
            }
        }

        .bottom-nav{
            background-color: #ffffff;
            margin-top: .5rem;
            font-size: .7rem;
            li{
                padding: 0 1rem;
                line-height: 1.6rem;
                border-bottom: 1px solid #D1D1D1;
                span{
                    font-size: 1.2rem;
                }
                i{
                    font-size: .5rem;
                    margin-left: .5rem;
                }
            }
        }

        .load-more{
            text-align: center;
            color: #aaa;
            line-height:2.5rem;
            margin-bottom: 2.5rem;
        }

        .btn-group{
            position: fixed;
            bottom: 0;
            left:0;
            width: 100%;
            background-color: #fff;
            text-align: center;
            span{
                float: left;
                width: 25%;
                height: 2.5rem;
                line-height: 2.5rem;
                &:first-child{
                    border-right: 1px solid #DADADA;
                }
                &.order{
                    background-color: #EA8332;
                    color: #fff;
                    width: 50%;
                    line-height: 2.5rem;
                }
            }
        }

        .modal-travel{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 2.5rem;
            background-color: #fff;
            z-index: 120;
            .modial-content{
                height: 100%;
                overflow-y: auto;
                .travel-head{
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    border-bottom: 1px solid #C6C6C6;
                    .title{
                        line-height: 1.85rem;
                        background-color: #f6f6f6;
                        span:first-child{
                            position: absolute;
                            top: 0;
                            left: .5rem;
                            font-size: 1.2rem;
                        }
                    }
                    .nav{
                        padding: .5rem 0;
                        li{
                            float: left;
                            width: 25%;
                            border-left: 1px solid #C6C6C6;
                            &:first-child{
                                border-left: none;
                            }
                            &.selected{
                                color: #569AE2;
                             }
                        }
                    }
                }
            }
            .travel-section{
                padding-top: 3.7rem;
                &>div{
                    display: none;
                    &.selected{
                        display: block;
                    }
                }
            }
        }
    }
</style>