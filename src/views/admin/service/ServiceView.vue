<template>
  <div>
    <div class="row">

      <q-input dense rounded standout  v-model="text" label="Search" class="m-2" >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
        
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>

      </q-input>
    </div>
  </div>
</template>

<script>
import {useAdminStore} from '@/store/admin'
import { onMounted } from 'vue'
export default {

    setup(){
        const adminStore = useAdminStore()
       
        onMounted(()=>{
            console.log('Service mounted')
            adminStore.getServices()
        })

        return {adminStore}

    }

}
</script>

<style>

</style>