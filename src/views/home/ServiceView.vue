<template>
 <div class=" q-pa-lg text-h5">Services</div>
 <ul>
    <div class="row q-px-xl q-mx-xl">
        <div class="col ">
            <div class="row">
               <li v-for="service in serviceStore.services" :key="service.id" class=" col-md-4 col-sm-6 col-lg-2 row justify-center q-py-md q-px-sm">
                  <q-card class="my-card text-gray-7 q-ma-sm q-py-sm q-mb-md  shadow-3 row items-end justify-center" 
                    style="border-radius: 10px; width: 230px; height: 140px;  " >
                     <q-card-section>
                       <div >   {{ service.name }}  </div>  
                     </q-card-section>
                  </q-card>
               </li>
            </div>
        </div>
    </div>
 </ul>
</template>

<script>
import {useServiceStore} from '@/store/service'
import { onMounted } from 'vue'
export default {

    setup(){
        const serviceStore = useServiceStore()

        onMounted(()=>{
            serviceStore.getServices()
        })

        return{
            serviceStore
        }
    }

}
</script>

<style>

</style>