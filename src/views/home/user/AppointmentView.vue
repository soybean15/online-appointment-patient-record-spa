<template>
  <div class="row">
    <div class="col-9">
      <AppoinmentsList />
    </div>

    <div class="col-3">
      <AppoinmentsList />
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import AppoinmentsList from "./components/AppoinmentsList.vue";
import {useAppointmentStore} from '@/store/appointment'

export default {
  components: { AppoinmentsList },
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