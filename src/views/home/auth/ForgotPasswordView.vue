<template>
  <div class="row justify-center items-center">
        <div class="bg-surface text-lg p-5 w-96 my-10 rounded-md shadow-md">   
            <div>
                Forgot Password
            </div>
            

            <q-form @submit="onSubmit(email)">

                <q-input v-model="email" outlined dense label="Email"/>


                <div class="row justify-end my-4">
                    <q-btn :loading='loading' type="submit" label="Submit" color="primary"/>
                </div>
             

            </q-form>

        </div>
  </div>
</template>

<script>
import {useAuthStore} from '@/store/auth'
import { ref } from 'vue'
import {useStatusStore} from '@/store/status'

export default {
    setup(){

        const authStore = useAuthStore()
        const statusStore = useStatusStore()
        const email = ref('')
        const loading = ref(false)

        return {
            onSubmit:async(email)=>{
                loading.value = true
               await authStore.handleForgotPassword(email)
              //await new Promise((resolve) => setTimeout(resolve, 3000));
               loading.value =false
                statusStore.redirect('status',(title,message)=>{
                    title.value = 'Reset Password'
                    message.value = 'We\'ve sent you an email for password reset; please check your inbox.'
                })


            },
            loading,
            email
        }

    }

}
</script>

<style>

</style>