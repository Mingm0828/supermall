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
const router = new VueRouter({
routes,
mode:'history'

})


//2、导出路由
export default router