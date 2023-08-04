<template>
  <span class="">
    <!-- :loading="loading[1] && selectedItem == props.row" -->
    <q-btn
      dense
      color="red"
      size="13px"
      @click="dialog = true"
      icon-right="cancel"
      label="Decline"
    />

    <q-dialog v-model="dialog" persistent>
       
        
      <q-card class="my-card ">
        <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Decline Appointment</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="row items-center">
          <q-avatar icon="event_busy" color="primary" text-color="white" />
          <span class="q-ml-sm"
            >You are about to decline this appoinment. Please select your next action</span
          >
        </q-card-section>

        <q-card-actions align="right">
            <RejectAppointmentModal/>
            <RescheduleAppointmentModal/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </span>
</template>
  
  <script>
  import RejectAppointmentModal from "./RejectAppointmentModal.vue";
  import RescheduleAppointmentModal from "./RescheduleAppointmentModal.vue";
import { ref } from "vue";

export default {
    components:{
        RejectAppointmentModal,
        RescheduleAppointmentModal
    },
  setup() {
    return {
      dialog: ref(false),
    };
  },
};
</script>
  