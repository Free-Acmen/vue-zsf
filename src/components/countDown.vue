<template>
    <span class="countDown" v-if="countState">
        <i>{{days}}</i>天<i>{{hours}}</i>时<i>{{minutes}}</i>分<i>{{seconds}}</i>秒
    </span>
</template>
<script>
    export default{
        data(){
            return{
                countState: true,
                timer: '',
                days: '',
                hours: '',
                minutes: '',
                seconds: ''
            }
        },
        props:{
            endTime: {
                type: String,
                default: ''
            },
            callback: {
                type: Function,
                default: function(){

                }
            }
        },
        mounted(){
            this.countDown()
        },
        methods: {
            countDown(){
                let nowTime = new Date()
                let endTime = new Date(this.endTime)
                let time = endTime - nowTime
                if(time <=0){
                    this.timer = null
                    this.countState = false
                    this.callback()
                    return
                }
                this.days = Math.floor(time/(24*60*60*1000))
                if(this.days < 10){
                    this.days = (this.days + 100).toString().slice(1)
                }
                this.hours = (Math.floor((time/(60*60*1000))%24) + 100).toString().slice(1)
                this.minutes = (Math.floor((time/(60*1000))%60) + 100).toString().slice(1)
                this.seconds = (Math.floor((time/1000)%60) + 100).toString().slice(1)

                this.timer = setTimeout(this.countDown, 1000)
            }
        }
    }
</script>
<style scoped lang="scss">
    .countDown{
        i{
            color: red;
        }
    }
</style>