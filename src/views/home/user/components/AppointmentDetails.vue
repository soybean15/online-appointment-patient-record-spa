

<script>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import { useAppointmentStore } from "@/store/userAppointment";
import { useAuthStore } from "@/store/auth";

import router from "@/router";
export default {
  components: {
    BreadCrumbs,
  },

  setup() {
    const appointmentStore = useAppointmentStore();
    const authStore = useAuthStore();

    try {
      if (appointmentStore.selectedAppointment === null) {
        router.go(-1);
      }
    } catch (er) {
      router.go(-1);
    }

    return {
      chipColors: {
        pending: "orange",
        rejected: "red",
        rescheduled: "blue",
        approved: "yellow",
        completed: "green",
      },

      appointment: appointmentStore.selectedAppointment,
      authStore,
      appointmentStore
    };
  },
};
</script>
<template>
  <div class="q-pa-md" style="">
    <BreadCrumbs :prefix="'appointment'" />

    <div class="column bg-surface rounded-md p-4" v-if="authStore.user && appointmentStore.selectedAppointment">
      <div class="col row justify-between">
        <div class="col font-bold text-lg">Appointment Details</div>
        <q-badge
          outline
          :color="chipColors[appointmentStore.selectedAppointment.status]"
          :label="appointmentStore.selectedAppointment.status"
        />
      </div>

      <div class="column col mt-3">
        <strong class="font-secondary font-lg">Booked Service </strong>
        <div class="font-sm">{{ appointmentStore.selectedAppointment.service.name }}</div>
      </div>

      <div class="column">
        <strong class="font-secondary font-lg">Assigned Doctor</strong>
        <div class="font-sm">{{ appointmentStore.selectedAppointment.doctor.full_name }}</div>
      </div>

      <div class="column">
        <strong class="font-secondary font-lg">Client Contact </strong>
        <div class="font-sm mb-3">
          {{ authStore.user.profile[0].contact_number }}
        </div>
      </div>

      <div class="column">
        <strong class="font-secondary font-lg">Client Address </strong>
        <div class="font-sm mb-3">
          {{
            authStore.user.profile[0].address == null
              ? "N/A"
              : authStore.user.profile[0].address
          }}
        </div>
      </div>

      <q-separator />
      <div class="col row justify-between items-center">
        <div class="column mt-3">
          <strong class="font-secondary font-lg"> Date Scheduled</strong>
          <div class="font-thin font-sm">2023-08-10</div>
        </div>

        <q-btn outline color="primary" dense label="Reschedule" />
      </div>
    </div>
  </div>
</template>


<style>
</style>