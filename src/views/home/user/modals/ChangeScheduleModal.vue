<template>
  <div>
    <q-btn label="Change Schedule" color="primary" @click="icon = true" />

    <q-dialog v-model="icon">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Change Schedule</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-date v-model="date" color="yellow" text-color="black" />

          <q-btn  :loading="loading" color="primary" @click="onSubmit" label="Submit"/>
      
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
  
  <script>
import { ref, watch } from "vue";
import {useAppointmentStore} from '@/store/userAppointment'
import {  format } from "date-fns";
export default {
  setup() {
    const appointmentStore =useAppointmentStore()
    const date = ref(appointmentStore.selectedAppointment.schedule_date.replace(/-/g, '/'))
    const loading = ref(false)
    const   icon= ref(false)

    watch(date,()=>{
       
    })
  
  
   
    return {
    icon,
      date,
      appointmentStore,
      onSubmit:async()=>{
        try{
            loading.value=true
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await appointmentStore.changeSchedule(date.value)
        loading.value= false
        icon.value=false
        }catch(err){
            loading.value= false
        }
      
      },
      loading
    };
  },
};
</script>
  