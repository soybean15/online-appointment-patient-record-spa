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
        name: 'home',
        component:HomeView

      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/home/user/ProfileView')

      },
      {
        path: '/about',
        name: 'about',
   
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: 'service',
        name: 'home_service',
        component:()=>import('@/views/home/ServiceView')

      },

    ]


  },

  {
    path: '/admin',
    name: 'admin',
    component:()=> import('@/views/admin/AdminView'),
    beforeEnter: async (to, from, next) => {
      const authStore = useAuthStore()

      if(!authStore.user){
        await authStore.getUser()
      }
      const isAdmin = authStore.isAdmin;

      if (isAdmin) {
       
        next();
      } else {
        
        next('/');
      }


    },


    children:[
      {
        path: 'services',
        name: 'services',
        component: ()=> import ('@/views/admin/service/ServiceView'),
    
    
      },
      {
        path: 'patients',
        name: 'patients',
        component: ()=> import ('@/views/admin/user/PatientView'),
    
      },
    ]
  },




]

const router = createRouter({
  history: createWebHistory(),
  routes
})




export default router
