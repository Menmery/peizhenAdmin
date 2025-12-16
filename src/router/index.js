import Layout from '../views/Main.vue'
import Login from '../views/login/index.vue'
import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Layout,
  },
  {
    path: '/login',
    component: Login,
  },
]

const router = createRouter({
  // 路由数据
  routes,
  // 匹配模式
  history: createWebHashHistory(),
})

export default router
