<template>
    <section class='m-home'>
        <m-head icon1="phone" icon2="user" :search-data="homeData.SearchBoxMenu"></m-head>
        <div class="padding-top">
            <m-swiper :swiper-slides = "homeData.Slide.ad" :slider-btn = "btnState"></m-swiper>
        </div>
        <!--<swipe class="my-swipe">
            <swipe-item class="slide1"><img v-lazy="bannerData[0].imgSrc" alt=""></swipe-item>
            <swipe-item class="slide2"><img v-lazy="bannerData[1].imgSrc" alt=""></swipe-item>
        </swipe>-->

        <div class="search">
            <span class="search-text" @click="searchSwitch">搜索目的地</span>
        </div>
        <nav class="nav">
            <div class="nav-box nav-top">
                <div><a @click.prevent="navChildStateSwitch"><img src="../assets/image/index/nav-dangdi.png" alt="当地参团"><span>当地参团</span></a></div>
                <div><router-link to="/list/activity"><img src="../assets/image/index/nav-baotuan.png" alt="当地参团"><span>定制旅游</span></router-link></div>
                <div><router-link to="/list/ticket"><img src="../assets/image/index/nav-menpiao.png" alt="当地参团"><span>门票</span></router-link></div>
                <div><router-link to=""><img src="../assets/image/index/nav-jiudian.png" alt="当地参团"><span>酒店</span></router-link></div>
            </div>
            <ul class="nav-child clear" v-show="navChildState">
                <li v-for="item in navList.navChild" :key="item.name"><router-link :to="{path:'/list/'+item.url}">{{item.name}}</router-link></li>
                <li><router-link to="/list">更多</router-link></li>
            </ul>
            <div class="nav-box nav-middle">
                <div><router-link to="/list/tours-departing-from-china"><img src="../assets/image/index/nav-chufa.png" alt="当地参团"><span>中国出发</span></router-link></div>
                <div><router-link to="/list/cruise"><img src="../assets/image/index/nav-youlun.png" alt="当地参团"><span>邮轮</span></router-link></div>
                <div><router-link to="/list/activity"><img src="../assets/image/index/nav-dangdi-cantuan.png" alt="当地参团"><span>当地玩乐</span></router-link></div>
                <div><router-link to="/list/transfer"><img src="../assets/image/index/nav-jiesongji.png" alt="当地参团"><span>接送机</span></router-link></div>
            </div>
            <div class="nav-bottom-box">
                <router-link v-for="item in navList.navBottom" :to="{path: '/list/'+item.url}" :key="item.name"><span></span>包&nbsp;&nbsp;车</router-link>
            </div>
        </nav>

        <div class="special-offer container clear">
            <header class="clear">
                <span class="left">
                    <a :class="{'active': timeBuyState}" @click="tabSwitch">限时抢购</a>
                    <a :class="{'active': !timeBuyState}" @click="tabSwitch">特价专区</a>
                </span>
                <router-link class="right" to="/">更多</router-link>
            </header>
            <ul v-show="timeBuyState">
                <li v-for="item in homeData.SpecialGroupBuy.GroupBuyList">
                    <router-link :to="item.productsUrl">
                        <img v-lazy="item.products_image" alt="test">
                        <p class="ellipsis-two">{{item.mainName}}</p>
                        <p>${{item.price}}<span>起</span> <i>${{item.final_price}}</i></p>
                        <span class="discount">{{item.Discounts}}</span>
                    </router-link>
                </li>
            </ul>
            <ul v-show="!timeBuyState">
                <li v-for="item in homeData.SpecialGroupBuy.SpecialList">
                    <router-link :to="item.productsUrl">
                        <img v-lazy="item.products_image" alt="test">
                        <p class="ellipsis-two">{{item.mainName}}</p>
                        <p>${{item.price}}<span>起</span> <i>${{item.final_price}}</i></p>
                        <span class="discount">{{item.Discounts}}</span>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="hot-nation container clear">
            <header class="clear">
                <span class="left">热门目的地</span>
                <router-link class="right"  :to="homeData.HotNation.ad[0].links">更多</router-link>
            </header>
            <section class="clear">
                <dl v-for="item in homeData.HotNation.ad.slice(1)" >
                    <dt><router-link :to="item.links"><img v-lazy="item.src" alt="item.alt"></router-link></dt>
                    <dd><router-link :to="item.links">
                        <h4>{{item.alt}}</h4>
                        <p>{{item.text}}</p>
                    </router-link></dd>
                </dl>
            </section>
        </div>

        <div class="season-hot">
            <header class="title">当季热门推荐</header>
            <nav>
                <ul class="nav-tab clear">
                    <li v-for="(item, index) in seasonHotData" :class="{'active': currentIndex == item.m_id}" @click="hotSeasonSwitch(item.m_id)">{{item.m_name}}</li>
                </ul>
                <div class="nav-content">
                    <ul class="clear" v-for="(item, index) in seasonHotData" v-show="currentIndex == item.m_id">
                        <li :class="{'active': navChildIndex == 0}" @click="navChildSwitch(0)"><span>全部</span></li>
                        <li v-for="(list, key) in item.list" :class="{'active': navChildIndex == list.m_id}" @click="navChildSwitch(list.m_id)"><span>{{list.m_name}}</span></li>
                    </ul>
                </div>
            </nav>
            <section class="play-line-content" v-if="seasonHot.length">
                <dl v-for="item in seasonHot" class="clear" v-show="currentIndex == item.basic_id && (navChildIndex == 0 || navChildIndex == item.type_id)">
                    <dt>
                        <router-link :to="item.product_url">
                            <img v-lazy="item.img_src" alt="">
                            <span class="start-city">{{item.info.startCityStr}}</span>
                            <span class="label">{{item.info.productsRate}}%满意 | {{item.info.productsReviewsNum}}条评论</span>
                        </router-link>
                    </dt>
                    <dd class="clear">
                        <router-link :to="item.product_url">{{item.product_title}}</router-link>
                        <div class="offers clear" v-if="item.info.typeIcons.length">
                            <span v-for="val in item.info.typeIcons">{{val.text}}</span>
                        </div>
                        <div class="price">${{item.info.priceValue.Price}}起</div>
                    </dd>
                </dl>
            </section>
        </div>

        <m-foot></m-foot>

    </section>
</template>

<script type="text/ecmascript-6">
    import {mapState, mapActions} from 'vuex'
    import store from '../store'
    import type from '../store/mutation-type'
    import mHead from '../components/head'
    import mSwiper from '../components/swiper'
    import mLoading from '../components/mLoading/mLoading'
    import mFoot from '../components/mFooter'
    import ajaxUrl from '../store/ajaxUrl'

    import banner1 from '../assets/image/index/banner-1.jpg'
    import banner2 from '../assets/image/index/banner-2.jpg'
    import { Swipe, SwipeItem } from 'vue-swipe'

    export default{
        data(){
            return {
                title: '首页',
                btnState: false,
                navChildState: false,
                bannerData:[{imgSrc: banner1, alt: "banner1"}, {imgSrc: banner2, alt: "banner2"}],
                navList: {
                    navTop: ['private_group', 'hotels', 'ticket'],
                    navChild: [{url: 'east-coast', name: '美东'}, {url: 'west-coast', name: '美西'}, {
                        url: 'hawaii',
                        name: '夏威夷'
                    }, {url: 'canada', name: '加拿大'}, {url: 'europe', name: '欧洲'}, {
                        url: 'latin-america-tours',
                        name: '拉丁美洲'
                    }, {url: 'australia-new-zealand', name: '澳新'}],
                    navMiddle: ['tours-departing-from-china', 'cruise', 'activity', 'transfer'],
                    navBottom: [{url:'baoche', name: '包&nbsp;&nbsp;车'}, {url:'wifi',name:'电话卡/wifi'}, {url:'news',name:'旅游攻略'}]
                },
                timeBuyState: true,
                currentIndex: 2,
                navChildIndex: 0,
                seasonHotData: [],
                seasonHot: []
            }
        },
        created(){
            this.$http.get(ajaxUrl.homeSeasonHot).then( response => {
                this.seasonHotData = response.data.recommendType
                let data = response.data.recommendType
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < data[i].list.length; j++) {
                        if(Object.prototype.toString.call(data[i]['list'][j].product_list) === '[object Array]'){
                            for (var k = 0; k < data[i]['list'][j].product_list.length; k++) {
                                this.seasonHot.push(data[i]['list'][j].product_list[k])
                            }
                        }
                    }
                }
            })
        },
        mounted(){
            console.log(this.homeData)
        },
        computed:{
            ...mapState({
                homeData(state){
                    return state.home.homeData
                },
                searchState(state){
                    return state.searchState;
                }
            })
        },
        methods: {
            navChildStateSwitch(){
                this.navChildState = !this.navChildState
            },
            tabSwitch(){
                this.timeBuyState = !this.timeBuyState
            },
            hotSeasonSwitch(index){
                this.navChildIndex = 0;
                this.currentIndex = index
            },
            navChildSwitch(index){
                this.navChildIndex = index
            },
            searchSwitch(){
                store.commit("searchStateC")
                this.modalOpen.afterOpen()
            }
        },
        components: {mHead, mSwiper, mLoading, mFoot, Swipe, SwipeItem}
    }
</script>

<style lang='scss' scoped rel="stylesheet/scss">
    @import '../assets/style/swipe.css';
    .m-home{
        font-size: .6rem;
        .search{
            background-color: #d8d8d8;
            padding: .6rem .5rem;
            .search-text{
                display: inline-block;
                width: 100%;
                height: 1.15rem;
                line-height: 1.15rem;
                padding-left: 1.5rem;
                border-radius: .3rem;
                background: #fff url(../assets/image/index/nav-sprite.png) no-repeat -37% -2%;
                background-size: 5rem 5rem;
            }
        }
        .nav{
            .nav-box{
                padding: .5rem 1rem 0;
                display: -webkit-flex; /* Safari */
                display:flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                div{
                    width: 2.9rem;
                    height: 2.9rem;
                    margin-bottom: .5rem;
                    text-align:center;
                    border-radius: .3rem;
                    img{
                        width: 82%;
                        margin-top: .2rem;
                    }
                    a span{
                        color: #fff;
                    }
                }
            }
            .nav-top{
                div:nth-child(1){
                    background: #FD8490;
                }
                div:nth-child(2){
                    background: #C4C763;
                }
                div:nth-child(3){
                    background: #73CD7F;
                }
                div:nth-child(4){
                    background: #85BAF1;
                }
            }
            .nav-middle{
                div:nth-child(1){
                    background: #64CFCF;
                }
                div:nth-child(2){
                    background: #B576BE;
                }
                div:nth-child(3){
                    background: #63CAEC;
                }
                div:nth-child(4){
                    background: #D9A47C;
                }
            }
            .nav-child{
                margin: 0 .4rem;
                border-left: 1px solid #DFDFDF;
                border-top: 1px solid #DFDFDF;
                li{
                    float: left;
                    width: 25%;
                    text-align:center;
                    line-height: 1.5rem;
                    background-color: #f6f6f6;
                    border-right: 1px solid #DFDFDF;
                    border-bottom: 1px solid #DFDFDF;
                }
            }
            .nav-bottom-box{
                padding: 0 .3rem;
                display: -webkit-flex; /* Safari */
                display: flex;
                flex-flow: row wrap;
                justify-content: flex-start;
                a{
                    display:inline-block;
                    width: 4.9rem;
                    height: 1.5rem;
                    line-height: 1.5rem;
                    border-radius: .8rem;
                    background-color: #ededed;
                    margin-right: .3rem;
                    margin-bottom: .5rem;
                    span{
                        position: relative;
                        display: inline-block;
                        width: 1.8rem;
                        height: .9rem;
                        top: .2rem;
                        background-image: url(../assets/image/index/nav-sprite.png);
                        background-repeat: no-repeat;
                        background-size: 5rem 5rem;
                    }
                    &:nth-child(1){
                        span{
                            margin-right: .4rem;
                            background-position: -1.8rem -4.2rem;
                        }
                    }
                    &:nth-child(2){
                        span{
                            background-position: -3.4rem -2.7rem;
                        }
                    }
                    &:nth-child(3){
                        span{
                            background-position: -1.6rem -2.7rem;
                        }
                    }
                    &:nth-child(3), &:nth-child(6){
                         margin-right: 0;
                    }
                }
            }
        }

        .my-swipe {
            height: 200px;
            color: #fff;
            font-size: 30px;
            text-align: center;
            .slide1 {
                background-color: #0089dc;
                color: #fff;
            }

            .slide2 {
                background-color: #ffd705;
                color: #000;
            }

            .slide3 {
                background-color: #ff2d4b;
                color: #fff;
            }
        }


        .container{
            padding: 0 .5rem;
            background-color: #f6f6f6;
            header{
                height: 1.8rem;
                line-height: 1.8rem;
                font-size: .65rem;
            }
        }

        .special-offer{
            header{
                span a:first-child{
                    padding: 0 .3rem 0 1rem;
                    border-right: 1px solid #d3d3d3;
                    margin-right: .3rem;
                }
                a.active{
                    color: #4b99f4;
                }
            }
            ul li{
                float: left;
                padding: .5rem;
                width: 50%;
                position: relative;
                background-color:#fff;
                border:1px solid rgba(236,236,236,1);
                &:first-child{
                    border-right:none;
                 }
                img{
                    width: 100%;
                }
            }
            p{

            }
            .discount{
                position: absolute;
                top:0;
                left:0;
                background-color: #F94646;
                height: 1.2rem;
                line-height: 1.2rem;
                padding: 0 .5rem;
                color: #fff;
            }

        }

        .hot-nation{
            section{
                background-color: #fff;
                padding: 0 .2rem;
                dl{
                    float: left;
                    width: 50%;
                    padding: .5rem 0;
                    dt{
                        float: left;
                        width: 28%;
                        margin-right: .2rem;
                        img{
                            min-height: 2.1rem;
                            border-radius: 1rem;
                        }
                    }
                    dd{
                        float: left;
                        margin-top: -.2rem;
                    }
                    h4{
                        padding: .25rem 0 .1rem;
                        font-size: .7rem;
                    }
                    &:nth-child(1){
                        dd,dt{
                            width: 84%;
                            img{
                                border-radius: .3rem;
                                max-height: 3rem;
                                width: 100%;
                            }
                        }
                        dt{
                            margin-top: 0;
                        }
                        h4,p{
                            text-align: center;
                        }
                    }
                }
            }

        }

        .season-hot{
            .title{
                height: 1.9rem;
                line-height: 1.9rem;
                font-size: .65rem;
                text-align: center;
                position:relative;
                background-color: #f6f6f6;
                &:before, &:after{
                    content: "";
                    display:block;
                    width: 35%;
                    position: absolute;
                    top: .9rem;
                    border-bottom: 1px solid #DFDFDF;
                }
                &:before{
                    left:0;
                }
                &:after{
                    right:0;
                }
            }
            .nav-tab{
                padding: .4rem 0;
                li{
                    width: 25%;
                    float: left;
                    text-align: center;
                    border-left: 1px solid #c6c6c6;
                    &:first-child{
                        border-left: 0;
                    }
                    &.active{
                        color: #4b99f4;
                    }
                }
            }

            .nav-content{
                ul{
                    border-top: 1px solid #dfdfdf;
                    border-left: 1px solid #dfdfdf;
                    li{
                        float: left;
                        width: 25%;
                        line-height: 1.4rem;
                        text-align: center;
                        border-right: 1px solid #dfdfdf;
                        border-bottom: 1px solid #dfdfdf;
                        background-color: #f6f6f6;
                        &.active span{
                            padding: .1rem .3rem;
                            background-color: #4f9af1;
                            color: #fff;
                            border-radius: .5rem;
                         }
                    }

                }
            }
            .play-line-content{
                dl{
                    margin-bottom: .5rem;
                    dt{
                        position: relative;
                        a{
                            display: block;
                            width: 100%;
                            height: 8.7rem;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .start-city{
                            position: absolute;
                            top: 6.7%;
                            left: .5rem;
                            background-color: rgba(153,154,152,0.7);
                            padding: .15rem .5rem .15rem 1rem;
                            border-radius: 1.2rem;
                            color: #fff;
                        }
                        .label{
                            position: absolute;
                            bottom: 0;
                            right: 0;
                            padding: 2px 16px;
                            background-color: rgba(84,122,159,0.6);
                            line-height: 16px;
                            color: #fff;
                        }
                    }
                    dd{
                        padding: 0 .5rem;
                        a{
                            display: block;
                            padding: .25rem 0;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                        .offers{
                            float:left;
                            span{
                                display: inline-block;
                                padding: .1rem .25rem;
                                border: 1px solid #cbcbcb;
                                color: #b4b4b4;
                                margin-bottom: .25rem;
                            }
                        }
                        .price{
                            float: right;
                            padding: .1rem .5rem;
                            background-color: #FD7420;
                            color: #fff;
                            border-radius: .3rem;
                        }
                    }
                }
            }
        }

    }
</style>