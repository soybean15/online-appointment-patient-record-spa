<template>
    <div>

    </div>
</template>

<script>
import {useUserStore} from '@/store/user'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'


export default {

    setup(){
        const userStore = useUserStore()
//        const authStore = useAuthStore()//did dis because IM lazy to convert authstoore from option api to composition api
        const {records} = storeToRefs(userStore)
 
        onMounted(async()=>{
            userStore.getRecords()
        })

        return {
            records,
            
        }
    }
}
</script>

<style>

</style>