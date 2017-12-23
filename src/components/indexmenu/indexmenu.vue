<template>
    <div class='menu clearfix'>

        <div class="menu-item" v-for="(item,index) in indexMenu" :key='index' >
            <div class="routers"   @click.prevent="showIndexMenu(index,item.titlehref)"  v-show="index < showIndex">
                 <div v-html="item.img"></div>
                 <p>{{item.name}}</p>
            </div>
        </div>

    </div>
</template>

<script>

    let  flag = true; 
    export default {
        data() {
            return {
                indexMenu: [],
                showIndex:8
            }
        },
        created() {
            // 首页菜单展示
            this.getIndexMenu()
        },
        methods: {
            getIndexMenu() {
                this.axios.get('/api/getindexmenu')
                    .then(res => {
                        this.indexMenu = res.data.result;
                    })
            },
            showIndexMenu(index,item){
               
                if(index == 7){
                    if(flag){
                        this.showIndex = 12
                        flag = false
                    }else{
                          this.showIndex = 8
                        flag = true
                    }
                  
                   
                }else{
                     // 路由跳转
                     this.$router.push({
                        name:item.replace(/.html/,'')
                    })
                }
            }
        }
    }
</script>

<style lang= 'less'>
    .menu {
        padding-top: 10px;
        padding-bottom: 5px;
    }
    .menu .menu-item {
        width: 25%;
        text-align: center;
        float: left;
        overflow: hidden;
        margin-top: 15px;
    }
    .menu .menu-item .routers {
        display: block;
        width: 100%;
        height: 100%;
    }
    .menu .menu-item .routers img {
        width: 50px;
    }
</style>