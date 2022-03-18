import Vue from 'vue'
import VueRouter from 'vue-router'

const Wallet =() => import('../views/wallet/Wallet')
const Finance =() => import('../views/finance/Finance')
const Me =() => import('../views/me/Me')

// 1.安裝插件
Vue.use(VueRouter)

// 2.創建路由對象
const routes = [
  {
    path:"",
    redirect:"/wallet"
  },
  {
    path:'/wallet',
    component:Wallet
  },
  {
    path:'/finance',
    component:Finance
  },
  {
    path:'/me',
    component:Me
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3.導出router
export default router

