import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from "../components/Home"
// import About from "../components/About"
// import User from "../components/User"

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

//1. 通過Vue.use(插件)，安裝插件
Vue.use(VueRouter)

//2. 創建vuerouter對象
const routes =[
  {
    path:"/",
    // redirect 重定向
    redirect:'/home'

  },
  {
    path:"/user/:userId",
    component:User,
    meta:{
      title: 'User'
    },
  },
  {
    path:"/home",
    component:Home,
    meta:{
      title: 'Home'
    },
    children:[
      // {
      //   path:'',
      //   redirect:'news'
      // },
      {
        path:'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path:"/about",
    component:About,
    meta:{
      title: 'About'
    },
  },
  {
    path:"/profile",
    component:Profile,
    meta:{
      title: 'Profile'
    },
  }
]
const router = new VueRouter({
  //配置路由和組建之間的應用關係
  routes,
  mode:'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, before, next) => {
  document.title = to.matched[0].meta.title
  next()
}
)

//3. 將router對象傳入到vue實例
export default router
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
