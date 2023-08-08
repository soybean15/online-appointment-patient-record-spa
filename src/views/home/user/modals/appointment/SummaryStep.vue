<template>
  <q-card  bordered class="">
    <q-card-section>
      <div class="text-h6">Appointment Details</div>
    </q-card-section>

    <q-separator dark inset />

    <q-card-section>
      <div class="column">
        <div class="col">
          <div class="font-semibold text-lg font-secondary">Applicant:</div>
          <div>{{authStore.user.profile[0].full_name }}</div>
        </div>
        <div class="col">
          <div class="font-semibold text-lg font-secondary">Service:</div>
          <div >{{ appointmentStore.selectedService.name }}</div>
        </div>
        <div class="col">
          <div class="font-semibold text-lg font-secondary">Assigned Doctor:</div>
          <div>{{ appointmentStore.selectedDoctor.user.profile.full_name }}</div>
        </div>
        <div class="col">
          <div class="font-semibold text-lg font-secondary">Selected Date:</div>
          <div>{{ appointmentStore.date }}</div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { useAuthStore } from "@/store/auth";
import { useAppointmentStore } from "@/store/userAppointment";
export default {
  setup() {
    const authStore = useAuthStore();
    const appointmentStore = useAppointmentStore();

    return {
      authStore,
      appointmentStore
  
   
    };
  },
};
</script>

<style>
</style>