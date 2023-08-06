<template>
  <div class="q-pa-md" style="">
    <BreadCrumbs :routes="routes" />

    <div
      class="column bg-surface rounded-md p-4"
      v-if="authStore.user"
    >
      <div class="col row justify-between">
        <div class="col font-bold text-lg">Appointment Details</div>
        <q-badge outline :color="chipColors[appointment.status]" :label="appointment.status" />
      </div>

      <div class="column col mt-3">
        <strong class="font-secondary font-lg">Booked Service </strong>
        <div class="font-sm">{{appointment.service.name}}</div>
      </div>



      <div class="column">
        <strong class="font-secondary font-lg">Assigned Doctor</strong>
        <div class="font-sm">{{appointment.doctor.full_name}}</div>
      </div>

      <div class="column">
        <strong class="font-secondary font-lg">Client Contact </strong>
        <div class=" font-sm mb-3">{{ authStore.user.profile[0].contact_number }}</div>
      </div>


      <div class="column" >
        <strong class="font-secondary font-lg">Client Address </strong>
        <div class=" font-sm mb-3" >{{ authStore.user.profile[0].address==null?'N/A': authStore.user.profile[0].address   }}</div>

     
      </div>


      <q-separator />
      <div class=" col row justify-between items-center">
        <div class="column mt-3">
          <strong class="font-secondary font-lg"> Date Scheduled</strong>
          <div class="font-thin font-sm">2023-08-10</div>
        </div>

        <q-btn outline color="primary" dense label="Reschedule" />


      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import { useAppointmentStore } from "@/store/userAppointment";
import { useAuthStore } from "@/store/auth";
export default {
  components: {
    BreadCrumbs,
  },

  setup() {
    const appointmentStore = useAppointmentStore();
    const authStore = useAuthStore();

console.log(appointmentStore.selectedAppointment)
    return {
      routes: [
        { name: "Home", route: "home" },
        { name: "Appointment", route: "appointment" },
        { name: "Details", route: "appointentDetails" },
      ],   chipColors: {
        pending: "orange",
        rejected: "red",
        rescheduled: "blue",
        approved: "yellow",
        completed: "green",
      },

      appointment: appointmentStore.selectedAppointment,
      authStore,
    };
  },
};
</script>

<style>
</style>