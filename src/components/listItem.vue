<template>
    <dl class="list-item clear">
        <dt class="left">
            <router-link to="/info/35">
                <img src="../assets/image/index/banner-1.jpg" alt="">
                <span>团号:265</span>
            </router-link>
        </dt>
        <dd>
            <h3 class="pro-title">
                <router-link to="/info/35">
                    <span class="title-location">美东</span>
                    <span class="title-content">[精选5日游] 纽约+费城+华盛顿+尼亚加拉瀑布+哈佛大学+波士顿|精品行程</span>
                </router-link>
            </h3>
            <div class="pro-discount">
                <span>特价</span>
                <span class="blue">赠$50瀑布照片</span>
                <span class="hot">推荐</span>
                <span class="hot-blue">独家</span>
            </div>
            <div class="pro-price">
                <span class="price"><i>$</i>200<i>起</i></span>
                <span class="comment right">67%满意 | 50评论</span>
            </div>
        </dd>
    </dl>
</template>

<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-item{
        background-color: #F6F6F6;
        padding: .75rem .5rem;
        border-bottom: 1px solid #DEDEDE;
        dt{
            width: 4.5rem;
            height: 3rem;
            position: relative;
            span{
                position: absolute;
                bottom:0;
                left: 0;
                right: 0;
                padding-left: .25rem;
                background-color: rgba(0, 0, 0, .6);
                color: #fff;
            }
        }
        dd{
            margin-left:5rem;
            .pro-title{
                font-size:.6rem;
                span.title-location{
                    color: #4b99f4;
                }
            }
            .pro-discount{
               padding: .25rem 0 0;
               span{
                   display: inline-block;
                   padding: .05rem .3rem;
                   color: #fff;
                   background-color: #F49844;
                   margin-bottom: .25rem;
                   margin-right: .25rem;
                   &.blue{
                        background-color: #F49844;
                   }
                   &.hot{
                        background-color: #F6F6F6;
                        color: #DEC591;
                        border: 1px solid #DEC591;
                        border-radius: .25rem 0;
                   }
                   &.hot-blue{
                        background-color: #F6F6F6;
                        color: #4b99f4;
                        border: 1px solid #4b99f4;
                        border-radius: .25rem 0;
                   }
               }
            }
            .pro-price{
                .price{
                    font-size: 1rem;
                    color: #FD7420;
                    i{
                        font-size: .6rem;
                        color: #FD7420;
                    }
                }
                .comment{
                    line-height: 1.3rem;
                    color: #a5a5a5;
                }
            }
        }
    }
</style>