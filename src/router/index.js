import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import { useAuthStore } from '@/store/auth'

const routes = [


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
    component:()=> import('@/views/admin/AdminView'),
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore()
      const isAdmin = authStore.isAdmin;

      if (isAdmin) {
        // User is authenticated and authorized as an admin, proceed with entering the component
        next();
      } else {
        // User is not an admin, redirect to an access denied page or show an error message
        next('/');
      }


    },
  },


  {
    path: '/home',
    name: 'home',
    component: HomeView,


  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})




export default router
