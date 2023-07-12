import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'


const routes = [

  {
    path: '/admin',
    name: 'admin',
    component: HomeView


  },
  {
    path: '/',
    name: 'main',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/MainView'),
    children: [

      {
        path: '/home',
        name: 'main',
        component:HomeView

      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },

    ]


  },

  {
    path: '/admin',
    name: 'admin',
    component:()=> import('@/views/admin/AdminView')
  },


  {
    path: '/home',
    name: 'home',
    component: HomeView,


  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
