<template>
  <div class="column">
    <BreadCrumbs :prefix="'appointment'" />

  </div>
  <div class="row">
    <div class="col-8">
      <AppoinmentsList />
    </div>

    <div class="col-4">
      <AppointmentSidePanel />
    </div>

  </div>  


</template>

<script>
import { onMounted } from "vue";
import AppoinmentsList from "./components/AppoinmentsList.vue";
import {useAppointmentStore} from '@/store/userAppointment'
import AppointmentSidePanel from "./components/AppointmentSidePanel.vue";
import BreadCrumbs from '@/components/BreadCrumbs'
export default {
  components: { 
    AppoinmentsList,
    AppointmentSidePanel,
    BreadCrumbs
  },
  setup() {

    const appointmentStore = useAppointmentStore()
    onMounted(() => {
      appointmentStore.index();
    });

   
  },
};
</script>

<style>
</style>