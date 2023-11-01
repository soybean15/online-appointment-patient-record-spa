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
        path: '/status',
        name: 'status',
        meta: { title: 'Status' } ,
        component: () => import('@/views/StatusView')

      },
      {
        path: '/reset-password/:token',
        name: 'resetPassword',
        meta: { title: 'Reset Password' } ,
        component: () => import('@/views/home/auth/ResetPasswordView')

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

      {
        path: '/forgot-password',
        name: 'forgotPassword',
        meta: { title: 'Maxilife - Appointment Details' } ,
        component:  () => import('@/views/home/auth/ForgotPasswordView.vue'), 
         
       

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
        meta: { title: 'Admin - Services' } ,
        component: () => import('@/views/admin/service/ServiceView'),


      },
      {
        path: 'patients',
        name: 'patients',
        meta: { title: 'Admin - Patients' } ,
        component: () => import('@/views/admin/user/PatientView'),

      },
      {
        path: 'doctors',
        name: 'doctors',
        meta: { title: 'Admin - Doctors' } ,
        component: () => import('@/views/admin/user/DoctorsView'),

      },
      {
        path: 'appointment',
        name: 'adminAppointment',
        meta: { title: 'Admin - Appointments' } ,
        component: () => import('@/views/admin/appointment/AppointmentView'),

      },

      {
        path: '/settings',
        name: 'settings',
        component:  () => import('@/views/admin/SettingsView'),
         
       

      },
      {
        path: '/calendar',
        name: 'calendar',
        meta: { title: 'Admin - calendar' } ,
        component:  () => import('@/views/admin/calendar/CalendarView'),
         
       

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
