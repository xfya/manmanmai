<template>
    <div class='fotters'>
       <footer id="ctl00_foot">
        <div class="foot_top">
            <a href="login.aspx.htm">登录</a>
            <a href="login.aspx.htm">注册</a>
            <a href="#" style="width: 40%; border: 0;">
                <img src="http://www.zuyushop.com/wap/images/top.jpg" width="15" height="15">返回顶部</a>
        </div>
        <div class="footer">
            <p>
                <a href="javascript:if(confirm(%27http://m.manmanbuy.com/download/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://m.manmanbuy.com/download/%27" onclick="trackEvent('footer下载');" style="color: Red;">手机APP下载</a> <a href="index.htm" tppabs="http://m.manmanbuy.com/">
                    慢慢买手机版</a> -- 掌上比价平台</p>
            <p>
                m.manmanbuy.com
                <img src="https://z11.cnzz.com/stat.htm-id=1256699064&amp;r=&amp;iw=1&amp;showp=0x0&amp;lg=undefined&amp;cnzz_eid=none&amp;p=http---m.manmanbuy.com-&amp;rnd=453668140.gif" width="0" height="0">
            </p>
        </div>
    </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        }
    }
</script>

<style lang= '' scoped>
.foot_top {
    background: #efefef;
    border-top: 1px solid #c4c4c4;
    border-bottom: 1px solid #c4c4c4;
    height: 34px;
    line-height: 34px;
    margin-top: 25px;
    clear: both;
}

.foot_top a {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
    font-size: 14px;
    border-right: 1px solid #c4c4c4;
    text-align: center;
    width: 30%;
}
.footer {
    background: #efefef;
    text-align: center;
    font-size: 12px;
    padding: 15px 0;
    color: #666;
}
</style>