import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端300ms  延迟
import FastClick from 'fastclick'


//  addEventListener  ->  useCapture	  true - 事件句柄在捕获阶段执行  false- false- 默认。事件句柄在冒泡阶段执行

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000';
Vue.prototype.axios = axios;
// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    console.log(config, '----有请求发出去了---')
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
    console.log(response, '----有响应发回来了---')
        // 对响应数据做点什么
    return response;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})