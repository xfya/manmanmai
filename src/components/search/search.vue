<template>
    <form class='search form-search'>
        <input type="search" placeholder="搜你所搜">
        <input type="button" value="搜索">
    </form>
</template>

<script>
    export default {
        data() {
            return {
                indexMenu:[]
            }
        },
        created(){
            // 首页菜单展示
            // this.getIndexMenu()
        },
        methods:{
            getIndexMenu(){
                this.axios.get('/api/getindexmenu')
                .then(res=>{
                    this.indexMenu = res.data.result;
                })
            }
        }
    }
</script>

<style lang= 'less'>
.form-search {
    padding: 10px;
    background-color: #fff;
    position: relative;
    padding-right: 80px;
}
.form-search input[type="search"] {
    width: 100%;
    -webkit-appearance: none;
    border: none;
    background: #f1f1f1;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    font-size: 13px;
    padding-right: 10px;
    padding-left: 20px;
    
}
.form-search  input[type="button"] {
    position: absolute;
    -webkit-appearance: none;
    width: 63px;
    background: #ff841d;
    color: #FFFFFF;
    border: none;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    top: 9px;
    right: 9px;
    font-size: 16px;
}
</style>