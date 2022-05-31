// @ts-ignore
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/index.vue'
import PersonInfo from '../views/user/personInfo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: HomeView
  },{
    path: '/person',
    name: 'personInfo',
    component: PersonInfo
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
