<template>

   <div class="row justify-center items-center">

        <div class="bg-surface text-lg p-5 w-96 my-10 rounded-md shadow-md">

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
        return {
            onSubmit:()=>{
                authStore.handleResetPassword(form.value)

            },
            form
        }
    }


}
</script>

<style>

</style>