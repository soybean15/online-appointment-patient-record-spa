<template>
    <div class="q-pa-md" style="">
      <q-list class="bg-surface shadow-md rounded-md p-4 "  >
        
    
        <q-item-label class="row items-center justify-between" header>Appointments <AddAppointmentModal/></q-item-label>

        <div v-for="appointment in appointmentStore.appointments" :key="appointment.id">
        <q-item>
          <q-item-section top avatar>
            <q-avatar color="primary" text-color="white" icon="bluetooth" />
          </q-item-section>
  
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>
  
          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
            <q-icon name="star" color="yellow" />
          </q-item-section>
        </q-item>
        <q-separator spaced inset="item" />
      </div>
  
      
  
        </q-list>
    </div>
  </template>
<script>
import AddAppointmentModal from '../modals/AddAppointmentModal.vue'
import { useAppointmentStore } from '@/store/appointment';
export default {

    components:{AddAppointmentModal},
    setup(){
      const appointmentStore  = useAppointmentStore()

      return{
        appointmentStore
      }

    }

}
</script>

<style>

</style>