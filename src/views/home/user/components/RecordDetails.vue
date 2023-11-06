<template>
    <div class="q-pa-md">
        <BreadCrumbs :prefix="'record'" />

        <div class="col row justify-between q-py-sm">
           <div class="col font-bold text-lg">Medical Record Details</div>           
        </div>
        <div class="column rounded-md p-4 bg-surface "  style="border:1px solid; border-color: gray; " v-if="record && record.appointment && record.appointment.reference_id">        

            <div class="row">
                <div class="col-6 mt-1 ">
                        <strong class="font-secondary font-lg">Reference ID  </strong>
                        <div class="font-sm ">
                        {{ record.appointment.reference_id}}
                        </div>           
                </div> 
                <div class="col-6 mt-1 ">              
                        <strong class="font-secondary font-lg">Date </strong>
                        <div class="font-sm ">
                        {{ record.date_diagnosed}}
                        </div>               
                </div> 
            </div>


             <q-separator />
            

            <div class="row">

                <div class="col-6">

                    <div class="mt-2">
                        <strong class="font-secondary font-lg">Blood Type</strong>
                        <div class="font-sm">
                        {{ record.blood_type}}
                        </div>
                    </div>
                    
                    <div class="mt-2">
                        <strong class="font-secondary font-lg">Blood Pressure</strong>
                        <div class="font-sm">
                        {{ record.blood_pressure}}
                        </div>
                    </div>

                    <div class="mt-4">
                        <strong class="font-secondary font-lg">Diagnosis</strong>
                        <div class="font-sm">
                        {{ record.diagnosis }} 
                        </div>
                    </div>
                </div>

                <div class="col-6">

                    <div class="mt-2">
                        <strong class="font-secondary font-lg">Height</strong>
                        <div class="font-sm">
                        {{ record.height }} ft.
                        </div>
                    </div>

                    <div class="mt-2">
                        <strong class="font-secondary font-lg">Weight</strong>
                        <div class="font-sm">
                        {{ record.weight }} kg
                        </div>
                    </div>

                    <div class="mt-4">
                        <strong class="font-secondary font-lg">Recommendation</strong>
                        <div class="font-sm">
                        {{ record.recommendation}} 
                        </div>
                    </div>

                </div>

            </div>
            

         

            <q-separator />
            <div class="column mt-3">
                <strong class="font-secondary font-lg">Service</strong>
                <div class="font-sm">
                {{ record.service.name}} 
                </div>
            </div>
            
            <div class="column mt-3 row justify-end">
                <strong class="font-secondary font-lg ">Diagnosed by: </strong>
                <div class="font-sm">
                {{ record.doctor}} 
                </div>
            </div> 







     

        

        </div>

    
     

    </div>

  
</template>

<script>
import { onMounted } from 'vue'
import {  useRoute } from 'vue-router'
import {useUserStore} from '@/store/user'
import { storeToRefs } from 'pinia'

import BreadCrumbs from '@/components/BreadCrumbs.vue'
export default {
    components:{BreadCrumbs},
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