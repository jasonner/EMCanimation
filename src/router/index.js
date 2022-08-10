import Vue from 'vue'
import Router from 'vue-router'

import index from "@/view/index.vue";
import ListPage from "@/view/listPage.vue";
import listDetail1 from "@/view/listDetail1.vue";
import listDetail2 from "@/view/listDetail2.vue";
import listDetail3 from "@/view/listDetail3.vue";
Vue.use(Router)
export const constantRouterMap =[
    {
        path:'/',
        name:'首页',
        redirect:'/index',
        menuShow:false
    },
    {
        path:'/index',
        name:'首页',
        component: index,
        menuShow:false
    },
    {
        path:'/list',
        name:'ListPage',
        component: ListPage,
        menuShow:false
    },
    {
        path:'/listDetail1',
        name:'listDetail1',
        component: listDetail1,
        menuShow:false
    },
    {
        path:'/listDetail2',
        name:'listDetail2',
        component: listDetail2,
        menuShow:false
    },
    {
        path:'/listDetail3',
        name:'listDetail3',
        component: listDetail3,
        menuShow:false
    },
    {
        path: "*",
        redirect: "/index"
    }
]

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
 
export default new Router({
    routes: constantRouterMap
})