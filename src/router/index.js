import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/usuarios',
    name: 'Usuários',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/about',
    name: 'Sobre',
    component: () => import('../views/AboutView.vue')
},
  {
    path: '/produtos',
    name: 'Produtos',
    component: () => import('../views/Produtos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
