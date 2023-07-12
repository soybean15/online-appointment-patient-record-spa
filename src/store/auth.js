import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router/index'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authUser: null,

        authForm: {
            email: null,
            password: null
        }

    }),
    getters: {
        user: (state) => state.authUser,

        loginForm: (state) => state.authForm

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



            try {
                const data = await axios.post('/login', {
                    email: this.authForm.email,
                    password: this.authForm.password

                })




                router.push('/home')



            } catch (error) {

                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors
                    console.log(this.authErrors)


                }

            }

        },

    },
})