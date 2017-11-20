<template>
    <div class="connect-phone">
        <p><a href="tel:888-887-2816">(美) 888-887-2816</a></p>
        <p><a href="tel:888-887-2816">(中) 888-887-2816</a></p>
        <p @click="phoneClose">取消</p>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import store from '../store'
    export default{
        data(){
            return{

            }
        },
        computed: {
            ...mapState(['phoneState', 'publicBgState'])
        },
        methods: {
            phoneClose(){
                store.commit("zIndexStateC")
                store.commit('phoneStateC', false)
                store.commit('publicBgStateC')
            }
        }
    }
</script>

<style scoped lang="scss">
    .connect-phone{
        position: fixed;
        bottom: 0;
        left:0;
        width: 100%;
        text-align: center;
        padding: 0 1rem;
        z-index: 360;
        p{
            background-color: #fff;
            line-height: 2rem;
            border-radius: .5rem;
            margin-bottom: .5rem;
            a{
                display: block;
            }
        }
    }
</style>