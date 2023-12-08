<template>

    <div class="row justify-center q-pa-xl">
        <div  class="mt-10 shadow-xl q-pa-xl " style="width:600px">
          
                <h4 class=" row justify-center">{{title}}</h4>
                <h7 class="font-secondary row justify-center "> {{message}}</h7>
                <div class="row justify-center mt-10"><q-btn color="primary" label="Back to Home" @click="statusStore.redirect('home')"/></div>
          
        </div>
    </div>
   

</template>

<script>
import {useStatusStore} from '@/store/status'

import { storeToRefs } from 'pinia'
export default {
    setup(){
        const statusStore = useStatusStore()

        const {title,message} = storeToRefs(statusStore)


        return {
            title,
            message,
            statusStore
        }
    }
}
</script>

<style>

</style>