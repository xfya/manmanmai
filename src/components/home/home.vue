<template>
    <div class='home'>
        <!-- 搜索框 -->
        <search></search>
        <!-- 菜单栏 -->
        <indexmenu></indexmenu>
        <!-- nav -->
        <navs :title="title1"></navs>
        <!-- 商品列表 -->
        <goods :goods='goods'></goods>
               <!-- nav -->
        <navs :title="title2"></navs>
    </div>
</template>

<script>
import search  from 'components/search/search'
import indexmenu  from 'components/indexmenu/indexmenu'
import navs  from 'components/nav/nav'
import goods  from 'base/goods'
    export default {
        data() {
            return {
                title1:'超值折扣推荐',
                title2:'品牌排行',
                goods:[]
            }
        },
        created(){
            this.getGoodsList()
        },
        methods:{
            getGoodsList(){
                this.axios.get('/api/getmoneyctrl')
                 .then(res=>{
                     console.log(res.data.result)
                    this.goods = res.data.result
                 })
            }
        },
        components:{
            search,
            goods,
            navs,
            indexmenu
        },
    }
</script>

<style lang="less">

</style>