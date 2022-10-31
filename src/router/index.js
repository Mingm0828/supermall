<<<<<<< HEAD
import Vue from 'vue'
import VueRouter  from 'vue-router'


const Home = () => import('../view/home/Home')
const Cart = () => import('../view/cart/Cart')
const Category = () => import('../view/category/Category')
const profile = () => import('../view/profile/Profile')
//1、安装路径
Vue.use(VueRouter)


//2、创建router
const routes = [
    {
        path: '',
        redirect: '/home'//重定向
=======
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const profile = () => import('../views/profile/Profile')
const routerHistory = createWebHistory()
 
 
const routes=[
    {
        path: '',
        redirect: '/home'
>>>>>>> 1049041f2f0d320294b170adb2890e84194cacea
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/category',
        component: Category
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/profile',
        component: profile
      }
]
<<<<<<< HEAD
const router = new VueRouter({
routes,
mode:'history'

})


//2、导出路由
export default router
=======
const router = createRouter({
    history: routerHistory,
 routes
})
 
export default router

>>>>>>> 1049041f2f0d320294b170adb2890e84194cacea
