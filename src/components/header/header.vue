<template>
    <div class='header  clearfix'>
        <a class="f_left logo">
            <img src="../../common/images/header_logo.png" alt="">
        </a>
        <a class="f_right app">
            <img src="../../common/images/header_app.png" alt="">
        </a>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang='less' scoped>
    .header {
        height: .5rem;
        background: #ff841d;
        border-bottom: 1px solid #e6e6e6;
        position: relative;
        >a{
            padding:.12rem ;
        }
        .logo {
            img {
                height: 0.25rem;
            }
        }
        .app {
            img {
                height: 0.34rem;
            }
        }
        img {
            float: left;
     
        }
    }
</style>