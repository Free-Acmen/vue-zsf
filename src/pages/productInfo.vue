<template>
    <section class="m-info">
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
                <div>
                    <span>赠送国家门票</span>
                </div>
            </div>
            <div class="review">
                <div>
                    <span><i>12%</i>满意|12点评</span>
                    <a href="/">查看点评</a>
                </div>
                <div>
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
                <div class="data">
                    <s-calendar :sCalendarOp="calendarOptions"></s-calendar>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
    import mHead from '../components/head'
    import mSwiper from '../components/swiper'
    import countDown from '../components/countDown'
    import banner1 from '../assets/image/index/banner-1.jpg'

    import sCalendar from '../components/calendar/simple-calendar'

    export default{
        data(){
            return {
                swipOption: {
                    autoplay: false,
                    loop: false
                },
                btnState: false,
                bannerData : [{imgSrc: banner1, alt: "banner1"}],
                endTime: '2017-11-30 0:0:0'
            }
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
                    availSale: ['2017-11-16', '2017-11-18','2017-11-19','2017-11-20','2017-11-22','2017-11-23','2017-11-24','2017-11-25','2017-11-28','2017-11-29','2017-11-30'],
                    saleOut: ['2017-11-19','2017-11-26','2017-11-27'],
                    otherData: {},
                    callback: function(date){
                        console.log(1111)
                    }
                }
            }
        },
        beforeMount(){

        },
        components: {mHead, mSwiper, countDown, sCalendar}
    }
</script>

<style lang="scss" scoped>
    .m-info{
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
            padding: .5rem;
            h1{
                font-weight: bold;
                font-size: .75rem;
                line-height: 1.1rem;
            }
            .price{
                line-height: 1.5rem;
            }
        }

    }
</style>