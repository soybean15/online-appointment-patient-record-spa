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
        component: HomeView

      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/home/user/ProfileView')

      },
      {
        path: '/appointment',
        name: 'appointment',
        component: () => import('@/views/home/user/AppointmentView'),
        beforeEnter: async (to, from, next) => {
          const authStore = useAuthStore()

          if (!authStore.user) {
            await authStore.getUser()
          }

          console.log(authStore.user)
          if (!authStore.user) {
            next('/');
            authStore.dialog.login = true
            authStore.authNextPath = '/appointment'
          } else {
            next();
          }

        },
        children: [
          
        ]

      },
      {
        path: '/about',
        name: 'about',

        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: 'service',
        name: 'home_service',
        component: () => import('@/views/home/ServiceView')

      },

      {
        path: '/appointment/details',
        name: 'appointmentDetails',
        component:  () => import('@/views/home/user/components/AppointmentDetails'), // Parent router-view
         
       

      },
   
    
     
    
    

    ]


  },

  {
    path: '/admin',
    name: 'admin',
    redirect:{name:'dashboard'},
    component: () => import('@/views/admin/AdminView'),
    beforeEnter: async (to, from, next) => {
      const authStore = useAuthStore()

      if (!authStore.user) {
        await authStore.getUser()
      }
      const isAdmin = authStore.isAdmin;

      if (isAdmin) {

        next();
      } else {

        next('/');
      }


    },


    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/admin/dashboard/Dashboard'),


      },
      {
        path: 'services',
        name: 'services',
        component: () => import('@/views/admin/service/ServiceView'),


      },
      {
        path: 'patients',
        name: 'patients',
        component: () => import('@/views/admin/user/PatientView'),

      },
      {
        path: 'doctors',
        name: 'doctors',
        component: () => import('@/views/admin/user/DoctorsView'),

      },
      {
        path: 'appointment',
        name: 'adminAppointment',
        component: () => import('@/views/admin/appointment/AppointmentView'),

      },
    ]
  },





]

const router = createRouter({
  history: createWebHistory(),
  routes
})




export default router
