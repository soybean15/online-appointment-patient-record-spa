import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router/index'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authUser: null,

        authForm: {
            email: null,
            password: null,
            name:null,
            password_confirmation:null
        },
        authSuccess:{
            register:false,
            login:true
        },
        authErrors:[],
        authIsAdmin:false

    }),
    getters: {
        user: (state) => state.authUser,
        success:(state)=>state.authSuccess,
        errors:(state)=>state.authErrors,
        form: (state) => state.authForm,
        isAdmin :(state)=>state.authIsAdmin

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
                    this.authUser = data.data
                    this.authIsAdmin = this.authUser.roles.some(role => role.name === 'Admin');
                 

                }


            } catch (error) {
                if (error.response) {

                    if (error.response.status === 401) {
                        // router.push('/login')

                    }
                }

            }

        },
        async handleLogin() {
            this.authErrors = []


            try {
                const data = await axios.post('/login', {
                    email: this.authForm.email,
                    password: this.authForm.password

                })




                router.push('/')

                this.authErrors = []


            } catch (error) {

                if (error.response.status === 422) {
                     this.authErrors = error.response.data.errors
                    // console.log(this.authErrors)


                }

            }

        },

        async handleRegister(){
            this.authErrors = []
            try{
                const data = await axios.post('/register',this.authForm)

                this.authSuccess.register = true
                
                
            }catch(error){
                this.authSuccess.register = false
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors
                


                }


            }
        },
        async handleLogout(){
            const data = await axios.post('/logout')

            this.authSuccess.register = false
            this.authSuccess.login = false
            this.authErrors =[]
            this.authUser = null
            this.authIsAdmin = false
        }

    },
})