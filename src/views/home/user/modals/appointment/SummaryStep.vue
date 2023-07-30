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
          <div>{{ fullName() }}</div>
        </div>
        <div class="col">
          <div class="font-semibold text-lg font-secondary">Service:</div>
          <div>{{ appointmentStore.selectedService.name }}</div>
        </div>
        <div class="col">
          <div class="font-semibold text-lg font-secondary">Assigned Doctor:</div>
          <div>{{ doctorName(appointmentStore.selectedDoctor) }}</div>
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
      appointmentStore,
      fullName: () => {
        return `${authStore.user.profile[0].firstname} ${authStore.user.profile[0].lastname}`;
      },
      doctorName: (doctor) => {
        if (doctor.user.profile.gender === "Male") {
          return `Dr. ${doctor.user.profile.firstname}  ${doctor.user.profile.lastname}`;
        } else {
          return `Dra. ${doctor.user.profile.firstname}  ${doctor.user.profile.lastname}`;
        }
      },
    };
  },
};
</script>

<style>
</style>