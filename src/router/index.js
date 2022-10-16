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
const router = createRouter({
    history: routerHistory,
 routes
})
 
export default router

