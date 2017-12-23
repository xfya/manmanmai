<template>
    <div class="recommen-product-list cu-list ">
        <ul class='goods'>
            <li class=" ui-border-b clearfix" v-for="(item,index) in goods" :key='index'>
                <a  href="#">
                    <div class="pic" v-html="item.productImgSm" >{{item.productImgSm}}</div>
                    <div class=" info">
                        <div class="title">{{item.productName}}<span>{{item.productPinkage}}元</span></div>
                        <div class="other"><span class="mall">{{item.productFrom}} | {{item.productTime}}</span><span class="comment"><i class="icon-comment"></i>{{item.productComCount}}</span></div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: {
            goods: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style lang= ''>
    .recommen-product-list {
        background-color: #ffffff;
        text-align: left;
        font-size: 14px;
        max-width: 960px;
        margin: 0px auto;
    }
    .recommen-product-list>ul>li {
        padding: 14px 8px;
        position: relative;
        border-bottom: 1px solid #e7e7e7;
    }
    .pic {
        float: left;
        width: 110px;
    }
    .cu-list .pic {
        float: left;
        width: 110px;
    }
    .cu-list .pic img {
        width: 100px;
        height: 100px;
    }
    .product-list>ul>li>a>.info>.title>span {
        color: #ff6c00;
        display: inline;
    }
    .recommen-product-list ul>li>a>.info>.title {
        color: #333333;
        word-break: break-all;
        font-size: 15px;
        line-height: 19px;
        min-height: 57px;
        text-align: left;
        font-weight: normal;
    }
    .recommen-product-list ul>li>a {
        display: block;
    }
    .recommen-product-list ul>li>a>.info {
        font-size: 14px;
        line-height: 24px;
        padding-left: 90px;
    }
</style>