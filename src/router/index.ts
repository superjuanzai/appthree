import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import login from '../views/login/LoginViwe.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/index',
    name: 'index',
    component:() => import('../views/index/index.vue'),
    children:[
      {
        path: '/home',
        name: 'home',
        component:() => import('../views/navlist/home.vue')
      },
      {
        path: '/userlist',
        name: 'userlist',
        component:() => import('../views/navlist/userlist.vue')
      },
      {
        path: '/newlist',
        name: 'newlist',
        component:() => import('../views/navlist/newlist.vue')
      } 
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
