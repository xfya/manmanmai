import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import category from '@/components/category'
import productlist from '@/components/productlist'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home',
            component: home
        },
        {
            path: '/home',
            name: 'home',
            component: home

        },
        {
            path: '/category',
            name: 'category',
            component: category

        },
        {
            path: '/productlist',
            name: 'productlist',
            component: productlist

        },
        {
            path: '/moneyctrl',
            name: 'moneyctrl',
            component: category

        },
        {
            path: '/inlanddiscount',
            name: 'inlanddiscount',
            component: category
        },
        {
            path: '/baicaijia',
            name: 'baicaijia',
            component: category
        },
        {
            path: '/coupon',
            name: 'coupon',
            component: category
        },
        {
            path: '/gsproduct',
            name: 'gsproduct',
            component: category
        },
        {
            path: '/sitenav',
            name: 'sitenav',
            component: category
        },
        {
            path: '/brandTitle',
            name: 'brandTitle',
            component: category
        }
    ]
})