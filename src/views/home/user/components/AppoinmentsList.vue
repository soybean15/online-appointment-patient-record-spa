<template>
  <div class="q-pa-md" style="">
    <q-list class="bg-surface shadow-md rounded-md p-4">
      <q-item-label class="row items-center justify-between" header
        >Appointments <AddAppointmentModal
      /></q-item-label>

      <div v-if="appointmentStore.appointments && appointmentStore.appointments.length  > 0">
        <div
          v-for="appointment in appointmentStore.appointments"
          :key="appointment.id"
        >
          <q-item>
            <q-item-section top avatar>
              <q-avatar color="primary" text-color="white"  >
                <img :src="appointment.doctor.user.profile[0].image">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{appointment.service.name}}</q-item-label>
              <q-item-label caption lines="2"
                >{{fullName(appointment.doctor)}}</q-item-label
              >
              <q-item-label caption lines="2"
                >{{appointment.schedule_date}}</q-item-label
              >
            </q-item-section>

            <q-item-section side top>
              <div v-if="appointment.status === ''"></div>
              <q-item-label class="mb-2" caption>{{ appointment.time_ago }}</q-item-label>
              <q-badge outline  :color="chipColors[appointment.status]" :label="appointment.status" />
            </q-item-section>
          </q-item>
          <q-separator spaced inset="item" />
        </div>
      </div>

      <div v-else>
        <q-item-label class="row items-center justify-between" header
        >No Available Appoinments </q-item-label>

      </div>
    </q-list>
  </div>
</template>
<script>
import AddAppointmentModal from "../modals/AddAppointmentModal.vue";
import { useAppointmentStore } from "@/store/userAppointment";
export default {
  components: { AddAppointmentModal },
  setup() {
    const appointmentStore = useAppointmentStore();


  


    return {

      appointmentStore,
     chipColors : {
      pending: 'orange',
     rejected: 'red',
     rescheduled: 'blue',
     approved: 'yellow',
     completed: 'green'
     
   },
      fullName: (doctor) => {
        if (doctor.user.profile.gender === "Male") {
          return `Dr. ${doctor.user.profile[0].firstname}  ${doctor.user.profile[0].lastname}`;
        } else {
          return `Dra. ${doctor.user.profile[0].firstname}  ${doctor.user.profile[0].lastname}`;
        }
      },
    };
  },
};
</script>

<style>
</style>