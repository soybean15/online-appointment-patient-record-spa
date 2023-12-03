<template>
  <div class="" style="">


    <q-list class="bg-surface shadow-md rounded-md p-1" bordered>
      <q-item-label class="row items-center justify-between" header
        >Appointments <AddAppointmentModal
      /></q-item-label>

      <div
        v-if="
          appointmentStore.appointments &&
          appointmentStore.appointments.length > 0
        "
      >
        <div
          v-for="appointment in appointmentStore.appointments"
          :key="appointment.id"
        >
          <q-item>
            <q-item-section top avatar>
              <q-avatar color="primary" text-color="white">
                <img :src="appointment.doctor.user.profile[0].image" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label
                >{{ appointment.service.name }}
                <q-badge
                  outline
                  :color="chipColors[appointment.status].color"
                  :label="appointment.status"
                />
              </q-item-label>
              <q-item-label caption lines="2">{{
                appointment.doctor.full_name
              }}</q-item-label>
              <q-item-label caption lines="2">{{
                appointment.schedule_date
              }}</q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label class="mb-2" caption>{{
                appointment.time_ago
              }}</q-item-label>
              <router-link :to="{name:'appointmentDetails'}">  <q-btn
                
                dense
                color="secondary"
                label="View details"
                @click="appointmentStore.setSelectedAppointment(appointment)"
              /></router-link>
            
            </q-item-section>
          </q-item>
          <q-separator spaced inset="item" />
        </div>
      </div>

      <div v-else>
        <q-item-label class="row items-center justify-between" header
          >No Available Appoinments
        </q-item-label>
      </div>
    </q-list>
  </div>

</template>
<script>
import AddAppointmentModal from "../modals/AddAppointmentModal.vue";
import { useAppointmentStore } from "@/store/userAppointment";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import getChipColors from '@/data/chipColor'

export default {
  components: { AddAppointmentModal,BreadCrumbs },
  setup() {
    const appointmentStore = useAppointmentStore();

    const { chipColors } = getChipColors()
    

 

    return {
      appointmentStore,
      chipColors,

   
    };
  },
};
</script>

<style>
</style>