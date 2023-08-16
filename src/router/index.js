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
        meta: { title: 'Maxilife - Home' } ,
        component: HomeView,
        

      },
      {
        path: '/profile',
        name: 'profile',
        meta: { title: 'Maxilife - Profile' } ,
        component: () => import('@/views/home/user/ProfileView')

      },
      {
        path: '/appointment',
        name: 'appointment',
        meta: { title: 'Maxilife - Appointments' } ,
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
        meta: { title: 'Maxilife - About' } ,
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: 'service',
        name: 'home_service',
        meta: { title: 'Maxilife - Services' } ,
        component: () => import('@/views/home/ServiceView')

      },

      {
        path: '/appointment/details',
        name: 'appointmentDetails',
        meta: { title: 'Maxilife - Appointment Details' } ,
        component:  () => import('@/views/home/user/components/AppointmentDetails'), 
         
       

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
        meta: { title: 'Admin - Dashboard' } ,
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

      {
        path: '/settings',
        name: 'settings',
        component:  () => import('@/views/admin/SettingsView'),
         
       

      },
    ]
  },





]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});




export default router
