<template>
    <div>
        {{record}}
    </div>
  
</template>

<script>
import { onMounted } from 'vue'
import {  useRoute } from 'vue-router'
import {useUserStore} from '@/store/user'
import { storeToRefs } from 'pinia'
export default {

    setup(){
        const route = useRoute()
        const  userStore = useUserStore()
        const id = route.params.id
        const {record} = storeToRefs(userStore)

        onMounted(()=>{
            userStore.getRecordDetails(id)
        })

        return {
            record,
            getType: (type) => {
        const types = {
          online: { label: "Online", color: "primary" },
          walk_in: { label: "Walk in", color: "blue" },
        };

        return types[type];
      },
        }
        
    }

}
</script>

<style>

</style>