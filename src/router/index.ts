import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/index.vue'
import PersonInfo from "../views/user/PersonInfo.vue"
//引入图片
const image = require("../assets/images/loginBack.jpeg")

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    meta:{
      title: '幻彩希-首页'
    },
    component: HomeView
  },{
    path: '/person',
    name: 'PersonInfo',
    meta:{
      title: '幻彩希-个人信息'
    },
    component: PersonInfo
  },{
    path: '/login',
    name: 'LoginPage',
    component: ()=>import('../views/user/LoginPage.vue'),
    meta:{
      title: '幻彩希-登录'
    },
    //进入login后添加背景色
    beforeEnter(){
      const s:any = document.querySelector('body');
      // s.setAttribute('style','background-image:linear-gradient(to right, #fbc2eb, #a6c1ee)')
      s.setAttribute('style','background-image:url('+image+')')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
//全局前置守卫
// router.beforeEach((to,from,next) => {
//   // if (to.meta.title) {
//   //   // @ts-ignore
//   //   window.document.title = to.meta.title
//   // }
//   // next()
//   return true
// })

export default router
