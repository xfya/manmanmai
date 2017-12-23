<template>
    <div class="list-title-content ">
        <span>{{title}}</span>
        <img src="http://www.zuyushop.com/wap/images/more.png" width="20" height="20">
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props:{
           title:{
               type:String,
               default:''
           }
        }
    }
</script>

<style lang= 'less'>
    .list-title-content {
        height: 35px;
        background-color: #ff9000;
        background: -webkit-gradient(linear, 0 0, 0 100%, from(#ffaf47), to(#ff9000));
        border-bottom: solid 1px #ffc881;
        line-height: 35px;
        overflow: hidden;
        color: #fff;
        padding-left: 10px;
        font-weight: bold;
        font-size: 18px;
        clear: both;
    }
    .list-title-content>span {
        font-weight: normal;
        font-size: 16px;
         color: #fff;
    }
    .list-title-content>img {
        float: right;
        margin-right: 10px;
        color: #FFF;
        margin-top: 8px;
    }
</style>