<template>
    <section class='m-home'>
        <m-head icon1="phone" icon2="user"></m-head>
        <div class="padding-top">
            <m-swiper :swiper-slides = "bannerData" :slider-btn = "btnState"></m-swiper>
        </div>
        <div class="search">
            <span class="search-text" @click="searchSwitch">搜索目的地</span>
        </div>
        <nav class="nav">
            <div class="nav-box nav-top">
                <div><a @click.prevent="navChildStateSwitch"><img src="../assets/image/index/nav-dangdi.png" alt="当地参团"><span>当地参团</span></a></div>
                <div><router-link to="/list/activity"><img src="../assets/image/index/nav-baotuan.png" alt="当地参团"><span>定制旅游</span></router-link></div>
                <div><router-link to="/list/ticket"><img src="../assets/image/index/nav-menpiao.png" alt="当地参团"><span>门票</span></router-link></div>
                <div><router-link to="/"><img src="../assets/image/index/nav-jiudian.png" alt="当地参团"><span>酒店</span></router-link></div>
            </div>
            <ul class="nav-child clear" v-show="navChildState">
                <li><router-link to="/">美东</router-link></li>
                <li><router-link to="/">美西</router-link></li>
                <li><router-link to="/">夏威夷</router-link></li>
                <li><router-link to="/">加拿大</router-link></li>
                <li><router-link to="/">欧洲</router-link></li>
                <li><router-link to="/">拉丁美洲</router-link></li>
                <li><router-link to="/">澳新</router-link></li>
                <li><router-link to="/">更多</router-link></li>
            </ul>
            <div class="nav-box nav-middle">
                <div><router-link to="/"><img src="../assets/image/index/nav-chufa.png" alt="当地参团"><span>中国出发</span></router-link></div>
                <div><router-link to="/"><img src="../assets/image/index/nav-youlun.png" alt="当地参团"><span>邮轮</span></router-link></div>
                <div><router-link to="/list/activity"><img src="../assets/image/index/nav-dangdi-cantuan.png" alt="当地参团"><span>当地玩乐</span></router-link></div>
                <div><router-link to="/"><img src="../assets/image/index/nav-jiesongji.png" alt="当地参团"><span>接送机</span></router-link></div>
            </div>
            <div class="nav-bottom-box">
                <router-link to="/"><span></span>包&nbsp;&nbsp;车</router-link>
                <router-link to="/"><span></span>电话卡/wifi</router-link>
                <router-link to="/"><span></span>旅游攻略</router-link>
            </div>
        </nav>

        <!--<swipe class="my-swipe">
            <swipe-item class="slide1"><img v-lazy="bannerData[0].imgSrc" alt=""></swipe-item>
            <swipe-item class="slide2"><img v-lazy="bannerData[1].imgSrc" alt=""></swipe-item>
        </swipe>-->

        <div class="special-offer container clear">
            <header class="clear">
                <span class="left">
                    <a :class="{'active': timeBuyState}" @click="tabSwitch">限时抢购</a>
                    <a :class="{'active': !timeBuyState}" @click="tabSwitch">特价专区</a>
                </span>
                <router-link class="right" to="/">更多</router-link>
            </header>
            <ul v-show="timeBuyState">
                <li>
                    <router-link to="/">
                        <img v-lazy="bannerData[0].imgSrc" alt="test">
                        <p>[畅玩7日游] 温哥华+维农市+班芙国家公园+冰河国...</p>
                        <p>$360 <span>起</span><i>$461</i></p>
                        <span class="discount">7.8折</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <img v-lazy="bannerData[0].imgSrc" alt="test">
                        <p>[畅玩7日游] 温哥华+维农市+班芙国家公园+冰河国...</p>
                        <p>$360 <span>起</span><i>$461</i></p>
                        <span class="discount">7.8折</span>
                    </router-link>
                </li>
            </ul>
            <ul v-show="!timeBuyState">
                <li>
                    <router-link to="/">
                        <img v-lazy="bannerData[1].imgSrc" alt="test">
                        <p>[畅玩7日游] 温哥华+维农市+班芙国家公园+冰河国...</p>
                        <p>$360 <span>起</span><i>$461</i></p>
                        <span class="discount">8.8折</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <img v-lazy="bannerData[1].imgSrc" alt="test">
                        <p>[畅玩7日游] 温哥华+维农市+班芙国家公园+冰河国...</p>
                        <p>$360 <span>起</span><i>$461</i></p>
                        <span class="discount">8.8折</span>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="hot-nation container clear">
            <header class="clear">
                <span class="left">热门目的地</span>
                <router-link class="right"  to="/">更多</router-link>
            </header>
            <section class="clear">
                <dl>
                    <dt><router-link to="/"><img v-lazy="bannerData[1].imgSrc" alt=""></router-link></dt>
                    <dd><router-link to="/">
                        <h4>黄石国家公园</h4>
                        <p>天世界第一个国家公园</p>
                    </router-link></dd>
                </dl>
                <dl>
                    <dt><router-link to="/"><img v-lazy="bannerData[1].imgSrc" alt=""></router-link></dt>
                    <dd><router-link to="/">
                        <h4>家公园</h4>
                        <p>天第一个 国家公园</p>
                    </router-link></dd>
                </dl>
                <dl>
                    <dt><router-link to="/"><img v-lazy="bannerData[1].imgSrc" alt=""></router-link></dt>
                    <dd><router-link to="/">
                        <h4>家公园</h4>
                        <p>天第一个 国家公园</p>
                    </router-link></dd>
                </dl>
                <dl>
                    <dt><router-link to="/"><img v-lazy="bannerData[1].imgSrc" alt=""></router-link></dt>
                    <dd><router-link to="/">
                        <h4>家公园</h4>
                        <p>天第一个 国家公园</p>
                    </router-link></dd>
                </dl>
                <dl>
                    <dt><router-link to="/"><img v-lazy="bannerData[1].imgSrc" alt=""></router-link></dt>
                    <dd><router-link to="/">
                        <h4>家公园</h4>
                        <p>天第一个 国家公园</p>
                    </router-link></dd>
                </dl>
            </section>
        </div>

        <div class="season-hot">
            <header class="title">当季热门推荐</header>
            <nav>
                <ul class="nav-tab clear">
                    <li :class="{'active': currentIndex == 0}" @click="hotSeasonSwitch(0)">当地参团</li>
                    <li :class="{'active': currentIndex == 1}" @click="hotSeasonSwitch(1)">中国出发</li>
                    <li :class="{'active': currentIndex == 2}" @click="hotSeasonSwitch(2)">当地玩乐</li>
                    <li :class="{'active': currentIndex == 3}" @click="hotSeasonSwitch(3)">私人订制</li>
                </ul>
                <div class="nav-content">
                    <ul class="clear" v-show="currentIndex == 0">
                        <li :class="{'active': navChildIndex == 0}" @click="navChildSwitch(0)"><span>全部0</span></li>
                        <li :class="{'active': navChildIndex == 1}" @click="navChildSwitch(1)"><span>洛杉矶</span></li>
                        <li :class="{'active': navChildIndex == 2}" @click="navChildSwitch(2)"><span>拉斯维加斯</span></li>
                        <li :class="{'active': navChildIndex == 3}" @click="navChildSwitch(3)"><span>旧金山</span></li>
                        <li :class="{'active': navChildIndex == 4}" @click="navChildSwitch(4)"><span>纽约</span></li>
                        <li :class="{'active': navChildIndex == 5}" @click="navChildSwitch(5)"><span>泰国</span></li>
                        <li :class="{'active': navChildIndex == 6}" @click="navChildSwitch(6)"><span>阿富汗</span></li>
                        <li :class="{'active': navChildIndex == 7}" @click="navChildSwitch(7)"><span>冰岛</span></li>
                    </ul>
                    <ul class="clear" v-show="currentIndex == 1">
                        <li :class="{'active': navChildIndex == 0}" @click="navChildSwitch(0)"><span>全部1</span></li>
                        <li :class="{'active': navChildIndex == 1}" @click="navChildSwitch(1)"><span>洛杉矶</span></li>
                        <li :class="{'active': navChildIndex == 2}" @click="navChildSwitch(2)"><span>拉斯维加斯</span></li>
                        <li :class="{'active': navChildIndex == 3}" @click="navChildSwitch(3)"><span>旧金山</span></li>
                        <li :class="{'active': navChildIndex == 4}" @click="navChildSwitch(4)"><span>纽约</span></li>
                        <li :class="{'active': navChildIndex == 5}" @click="navChildSwitch(5)"><span>泰国</span></li>
                        <li :class="{'active': navChildIndex == 6}" @click="navChildSwitch(6)"><span>阿富汗</span></li>
                        <li :class="{'active': navChildIndex == 7}" @click="navChildSwitch(7)"><span>冰岛</span></li>
                    </ul>
                    <ul class="clear" v-show="currentIndex == 2">
                        <li :class="{'active': navChildIndex == 0}" @click="navChildSwitch(0)"><span>全部2</span></li>
                        <li :class="{'active': navChildIndex == 1}" @click="navChildSwitch(1)"><span>洛杉矶</span></li>
                        <li :class="{'active': navChildIndex == 2}" @click="navChildSwitch(2)"><span>拉斯维加斯</span></li>
                        <li :class="{'active': navChildIndex == 3}" @click="navChildSwitch(3)"><span>旧金山</span></li>
                        <li :class="{'active': navChildIndex == 4}" @click="navChildSwitch(4)"><span>纽约</span></li>
                        <li :class="{'active': navChildIndex == 5}" @click="navChildSwitch(5)"><span>泰国</span></li>
                        <li :class="{'active': navChildIndex == 6}" @click="navChildSwitch(6)"><span>阿富汗</span></li>
                        <li :class="{'active': navChildIndex == 7}" @click="navChildSwitch(7)"><span>冰岛</span></li>
                    </ul>
                    <ul class="clear" v-show="currentIndex == 3">
                        <li :class="{'active': navChildIndex == 0}" @click="navChildSwitch(0)"><span>全部3</span></li>
                        <li :class="{'active': navChildIndex == 1}" @click="navChildSwitch(1)"><span>洛杉矶</span></li>
                        <li :class="{'active': navChildIndex == 2}" @click="navChildSwitch(2)"><span>拉斯维加斯</span></li>
                        <li :class="{'active': navChildIndex == 3}" @click="navChildSwitch(3)"><span>旧金山</span></li>
                        <li :class="{'active': navChildIndex == 4}" @click="navChildSwitch(4)"><span>纽约</span></li>
                        <li :class="{'active': navChildIndex == 5}" @click="navChildSwitch(5)"><span>泰国</span></li>
                        <li :class="{'active': navChildIndex == 6}" @click="navChildSwitch(6)"><span>阿富汗</span></li>
                        <li :class="{'active': navChildIndex == 7}" @click="navChildSwitch(7)"><span>冰岛</span></li>
                    </ul>
                </div>
            </nav>
            <section class="play-line-content">
                <dl class="clear" v-show="currentIndex == 0 && (navChildIndex == 0 || navChildIndex == 1)">
                    <dt>
                        <router-link to="/">
                            <img v-lazy="bannerData[1].imgSrc" alt="">
                            <span class="start-city">纽约</span>
                            <span class="label">67%满意 | 50条评论</span>
                        </router-link>
                    </dt>
                    <dd class="clear">
                        <router-link to="/">美国福利院+加拿大落日6日5晚游</router-link>
                        <div class="offers clear">
                            <span>金条</span>
                            <span>买一送一</span>
                            <span>不要钱</span>
                        </div>
                        <div class="price">$100起</div>
                    </dd>
                </dl>
                <dl v-show="currentIndex == 0 && (navChildIndex == 0 || navChildIndex == 2)">
                    <dt>
                        <router-link to="/">
                            <img v-lazy="bannerData[1].imgSrc" alt="">
                            <span class="start-city">纽约</span>
                            <span class="label">67%满意 | 50条评论</span>
                        </router-link>
                    </dt>
                    <dd class="clear">
                        <router-link to="/">美国福利院+加拿大落日6日5晚游1</router-link>
                        <div class="offers clear">
                            <span>金条</span>
                            <span>买一送一</span>
                            <span>不要钱</span>
                        </div>
                        <div class="price">$100起</div>
                    </dd>
                </dl>
                <dl v-show="currentIndex == 1 && (navChildIndex == 0 || navChildIndex == 1)">
                    <dt>
                        <router-link to="/">
                            <img v-lazy="bannerData[1].imgSrc" alt="">
                            <span class="start-city">纽约</span>
                            <span class="label">67%满意 | 50条评论</span>
                        </router-link>
                    </dt>
                    <dd class="clear">
                        <router-link to="/">美国福利院+加拿大落日6日5晚游2</router-link>
                        <div class="offers clear">
                            <span>金条</span>
                            <span>买一送一</span>
                            <span>不要钱</span>
                        </div>
                        <div class="price">$100起</div>
                    </dd>
                </dl>
                <dl v-show="currentIndex == 2 && (navChildIndex == 0 || navChildIndex == 2)">
                    <dt>
                        <router-link to="/">
                            <img v-lazy="bannerData[1].imgSrc" alt="">
                            <span class="start-city">纽约</span>
                            <span class="label">67%满意 | 50条评论</span>
                        </router-link>
                    </dt>
                    <dd class="clear">
                        <router-link to="/">美国福利院+加拿大落日6日5晚游33</router-link>
                        <div class="offers clear">
                            <span>金条</span>
                            <span>买一送一</span>
                            <span>不要钱</span>
                        </div>
                        <div class="price">$100起</div>
                    </dd>
                </dl>
                <dl v-show="currentIndex == 3 && (navChildIndex == 0 || navChildIndex == 1)">
                    <dt>
                        <router-link to="/">
                            <img v-lazy="bannerData[1].imgSrc" alt="">
                            <span class="start-city">纽约</span>
                            <span class="label">67%满意 | 50条评论</span>
                        </router-link>
                    </dt>
                    <dd class="clear">
                        <router-link to="/">美国福利院+加拿大落日6日5晚游44</router-link>
                        <div class="offers clear">
                            <span>金条</span>
                            <span>买一送一</span>
                            <span>不要钱</span>
                        </div>
                        <div class="price">$100起</div>
                    </dd>
                </dl>
            </section>
        </div>

        <m-foot></m-foot>

        <!--<div class='home-content' ref='loading'>
            <m-home-item v-for='item in currentData' :homeItem='item' :key='item.id'></m-home-item>
        </div>
        <m-loading v-show='loadingState' type='spiningDubbles' color='#11B91E' width='1.5'></m-loading>-->

    </section>
</template>6

<script>
    import {mapState, mapActions} from 'vuex'
    import store from '../store'
    import mHead from '../components/head'
    import mSwiper from '../components/swiper'
    import mLoading from '../components/mLoading/mLoading'
    import mFoot from '../components/mFooter'

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
                timeBuyState: true,
                currentIndex: 0,
                navChildIndex: 0
            }
        },
        created(){

        },
        mounted(){

        },
        watch: {

        },
        computed:{
            ...mapState({
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

<style lang='scss' scoped>
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
            p{}
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
                    dt{
                        position: relative;
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