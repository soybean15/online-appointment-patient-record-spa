<template>

   <div class="row justify-center items-center">

        <div class="bg-surface text-lg p-5 w-96 my-10 rounded-md shadow-md">
             <div  class="">
                Reset Password 
             </div>

             <q-form  @submit="onSubmit">
                <span class="text-red-500 text-sm" v-if="authStore.errors.password">{{authStore.errors.password[0]}}</span>
                <q-input v-model="form.password" dense type="password"  label="Password"/>
                <span class="text-red-500 text-sm" v-if="authStore.errors.password">{{authStore.errors.password[0]}}</span>
                <q-input v-model="form.password_confirmation" dense type="password" label="Confirm Password"/>

                <div class="row justify-end my-5">
                    <q-btn color="primary" type="submit" label="Submit"/>

                </div>
             </q-form>
        </div>

        


   </div>
  
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import {useAuthStore} from '@/store/auth'
export default {
    setup(){
        const route = useRoute()
        const authStore = useAuthStore()

        const form = ref({
            email:route.query.email,
            token:route.params.token,
            password:'',
            password_confirmation:''
        })

        console.log(form.value)
        return {
            onSubmit:()=>{
                authStore.handleResetPassword(form.value)

            },
            form,
            authStore
        }
    }


}
</script>

<style>

</style>