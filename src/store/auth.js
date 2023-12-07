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
            login:false,
            update:false
        },
        authErrors:[],
        authIsAdmin:false,
        authDialog:{
            login:false,
            register:false
        },
        authNextPath: '/',
        authIsFetched:false,
        authIsLogged:false

    }),
    getters: {
        user: (state) => state.authUser,
        success:(state)=>state.authSuccess,
        errors:(state)=>state.authErrors,
        form: (state) => state.authForm,
        isAdmin :(state)=>state.authIsAdmin,
        dialog:(state)=>state.authDialog,
        isFetched:(state)=>state.isFetched,
        isLogged:(state)=>state.authIsLogged
    },
    actions: {
        async getToken() {
            await axios.get('/sanctum/csrf-cookie')
        },

        async getUser(callback) {
            this.getToken()

            try {
                this.authIsFetched = true
                const data = await axios.get('/api/user')
                if (data) {
                    this.authUser = data.data
                    this.authUser.profile[0].blob_image =  structuredClone( this.authUser.profile[0].image);
                    
                    this.authIsAdmin = this.authUser.roles.some(role => role.name === 'Admin');
                 

                }


            } catch (error) {
                if (error.response) {

                    if (error.response.status === 401) {
                        // router.push('/login')

                    }
                    if(error.response.status===403){
                        console.log('error here')
                        this.authIsLogged=true
                        console.log(this.authIsLogged)
                    }
                }
                if(callback){
                    callback(error)
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




                this.authDialog.login= false

                router.push(this.authNextPath)
                this.authNextPath = '/'

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
                
                //this.handleLogout()
                
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
            this.authNextPath = '/'
            this.authIsLogged=false
            this.router.push('/')
        },

        async updateProfile(image){
            this.authSuccess.update = false
            this.authErrors = []
            const profile =  this.authUser.profile[0]

            try{
                const data = await axios.post('api/user/update',{
                    user_id:this.authUser.id,
                    firstname: profile.firstname,
                    lastname:profile.lastname,
                    middlename: profile.middlename,
                    gender: profile.gender,
                    birthdate: profile.birthdate,
                    image:image,
                    contact_number: profile.contact_number,
                    address_home:profile.address_home,
                    address_office:profile.address_office,
                    status :profile.status
    
                },{
                    headers:{
                        'Content-Type': 'multipart/form-data'
                    }
                })
    
                this.authUser = data.data.user
                this.authUser.profile[0].blob_image =  structuredClone( this.authUser.profile[0].image);
                this.authSuccess.update = true
            }catch(error)
            {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors
                


                }
                
                this.authSuccess.update = false

            }
          

            
        },
        async handleForgotPassword(email){
            await axios.post('forgot-password',{
                email:email
            })
        },
        async handleResetPassword (form){
            this.authErrors = []
            try{
                await axios.post('reset-password',{
                    email:form.email,
                    password: form.password,
                    password_confirmation: form.password_confirmation,
                    token: form.token
                })

                this.router.push('/')
            }catch(e){
                
                if(e.response.status === 422){
                    this.authErrors = e.response.data.errors
                }
            }
   
        }
        

        

    },
})