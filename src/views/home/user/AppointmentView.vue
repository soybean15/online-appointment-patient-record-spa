<template>
  <div class="row">
    <div class="col-9">
      <AppoinmentsList />
    </div>

    <div class="col-3">
      <AppointmentSidePanel />
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import AppoinmentsList from "./components/AppoinmentsList.vue";
import {useAppointmentStore} from '@/store/appointment'
import AppointmentSidePanel from "./components/AppointmentSidePanel.vue";
export default {
  components: { 
    AppoinmentsList,
    AppointmentSidePanel
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