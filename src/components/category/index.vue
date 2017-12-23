<template>
    <div class='category'>
        <!-- 搜索框 -->
        <search></search>
        <!-- 商品部分 -->
        <section id="category">
            <div class="row clearfix">
                <ul class="category-title">
                    <li v-for="(item,index) in CategotyMenu" :key="index">
                        <!-- 每个大目录列表 -->
                        <a @click.stop='showCategoryDetails(item.titleId,$event)' href="javascript:void(0)" data-title-id="0" style="background-image:url(http://www.zuyushop.com/wap/images/arrow1.gif);">{{item.title}}</a>
                        <!-- 每个大目录下 的 列表 -->
                        <ul class="category-content clearfix hide" v-show="CategoryDetails.length&&showTitleId==item.titleId">
                            <li v-for="aaa in CategoryDetails" :key="aaa.categoryId">
                                <router-link :to="{name:'productlist',params:{categoryid:aaa.categoryId}}" @click.stop="goProductList" data-category-id="0">
                                    {{aaa.category}}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
    import search from 'components/search/search'
    export default {
        data() {
            return {
                CategotyMenu: [],
                CategoryDetails: [],
                showTitleId: 0
            }
        },
        created() {
            this.getCategotyMenu()
        },
        methods: {
            getCategotyMenu() {
                this.axios.get('/api/getcategorytitle')
                    .then(res => {
                        this.CategotyMenu = res.data.result
                    })
            },
            showCategoryDetails(titleid, event) {
                this.showTitleId = titleid;
                console.log(event.currentTarget)
                this.axios({
                        url: "/api/getcategory",
                        methods: 'get',
                        params: {
                            titleid: titleid
                        }
                    })
                    .then(res => {
                        // console.log(res.data.result)
                        this.CategoryDetails = res.data.result
                    })
            },
            //跳转到productList 页面
            goProductList() {
            }
        },
        components: {
            search
        }
    }
</script>

<style scoped lang= 'less'>
    #category {
        >.row {
            border-radius: 5px;
            background: #ededed;
            border: 1px solid #ccc;
            font-size: 14px;
            color: #666;
            >ul {
                >li {
                    >a {
                        height: 40px;
                        background: url(http://www.zuyushop.com/wap/images/arrow1.gif) right center no-repeat;
                        line-height: 40px;
                        color: #000;
                        font-size: 16px;
                        display: block;
                        padding-left: 16px;
                        border-bottom: 1px solid #ccc;
                        font-weight: bold;
                    }
                    >.category-content {
                        background: #f9f9f9;
                        >li {
                            width: 33.33%;
                            float: left;
                            text-align: center;
                            height: 40px;
                            line-height: 40px;
                            >a {
                                display: block;
                                width: 100%;
                                color: #333;
                            }
                        }
                        >li {
                            border-right: 1px solid #ccc;
                            border-bottom: 1px solid #ccc;
                        }
                    }
                }
            }
        }
    }
</style>