<template>
    <div class='productlist'>
        <nav class="product-list-title">  <a href="index.html" class="list-title1">首页</a> &gt;  <a href="category.html" class="list-title2">全部分类</a> &gt;  <a href="#" class="list-title3" id="category">电视</a> &gt;  <a href="" class="select">筛选</a></nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        created() {
            console.log(this.$route.params)
            if(!(this.$route.params.categoryid-0 + 1 )){
                this.$router.push({
                    path:'/category'
                })
            }

        },
        methods: {
        }
    }
</script>

<style scoped lang= 'less'>
.product-list-title {
    height: 38px;
    background-color: #ebebeb;
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#ebebeb));
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ccc;
    line-height: 36px;
    padding-left: 8px;
    font-size: 14px;
}
.select {
    float: right;
    margin-right: 8px;
    display: block;
    height: 28px;
    background-color: #d0d0d0;
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#d7d7d7), to(#f5f5f5));
    background: -moz-linear-gradient(top, #d7d7d7, #f5f5f5);
    background: -o-linear-gradient(top, #d7d7d7, #f5f5f5);
    border-bottom: 1px solid #bababa;
    box-shadow: 0 1px 2px #888;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    line-height: 28px;
    overflow: hidden;
    border: none;
    padding: 0 16px;
    margin-top: 4px;
}
</style>