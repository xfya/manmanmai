<template>
  <div id="app">
    <myheader></myheader>

   
    <router-view/>

      <myfotter></myfotter>
  </div>
</template>

<script>
// 引入头部组件
import  myheader from 'components/header/header'
import  myfotter from 'base/fotter'
export default {
  name: 'app',

  components:{
    myheader,
    myfotter
  }
}
</script>

<style   lang='less'>
@import './common/css/base.less' ;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}
</style>
