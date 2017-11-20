
<template>
    <swiper :options="swipOpt" ref="mySwiper">
        <swiper-slide v-for="slide in swiperSlides" :key="slide.alt">
            <img class="swiper-lazy" :data-src="slide.imgSrc" :alt="slide.alt">
            <div class="swiper-lazy-preloader"></div>
            <slot name="other"></slot>
        </swiper-slide>

        <div v-if="navBtn" class="swiper-pagination" slot="pagination"></div>
        <div v-if="sliderBtn" class="swiper-button-prev" slot="button-prev"></div>
        <div v-if="sliderBtn" class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
    //轮播组件,可以传入swiperOption参数自定义
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default{
        data(){
            return{
                swiperOptionDefault: {
                    notNextTick: true,
                    autoplay: 1500,
                    autoplayDisableOnInteraction: false,
                    loop: true,
                    direction : 'horizontal',
                    setWrapperSize : true,
                    lazyLoading: true,
                    pagination : '.swiper-pagination',
                    prevButton:'.swiper-button-prev',
                    nextButton:'.swiper-button-next',
                    paginationClickable :true,
                    mousewheelControl : true,
                    observeParents:true
                }
            }
        },
        props: {
            swiperSlides: {
                type: Array,
                default: function(){
                    return [{imgSrc: "", alt: "1"}, {imgSrc: "", alt: "2"}]
                }
            },
            swiperOption: {
                type: Object,
                default: function(){
                    return this.swiperOptionDefault
                }
            },
            sliderBtn: {
                type: Boolean,
                default: false
            },
            navBtn: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            swipOpt(){
                return Object.assign(this.swiperOptionDefault, this.swiperOption)
            },
            swiper(){
                return this.$refs.mySwiper.swiper
            }
        },
        methods: {

        },
        components:{swiper, swiperSlide}
    }
</script>

<style>
    @import "../assets/style/swiper.css";
    .swiper-container{
        width: 100%;
        height: 8rem;
    }
</style>