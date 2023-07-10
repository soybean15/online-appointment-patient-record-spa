import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router/index'

export const useAuthStore = defineStore('auth', {
    state: () => ({ 
        authUser:null


     }),
    getters: {
        user :(state)=>state.authUser
       
    },
    actions: {
        async getToken() {
            await axios.get('/sanctum/csrf-cookie')
        },

        async getUser() {
            this.getToken()

            try {
                const data = await axios.get('/api/user')
                if (data) {
                    this.stateUser.user = data.data
                    this.getProfile()
                }
                console.log(this.stateUser.user)



            } catch (error) {
                if(error.response){
                 
                      if (error.response.status === 401 ) {
                       // router.push('/login')
                   
                }
                }

              

            }


        },
      
    },
})