

<template>
  <div class="q-pa-md" style="">
    <BreadCrumbs :prefix="'appointment'" />


    <div
      class="column bg-surface rounded-md p-4"
      v-if="authStore.user && appointmentStore.selectedAppointment"
    >
      <div class="col row justify-between">
        <div class="col font-bold text-lg">Appointment Details</div>
        <q-badge
          outline
          :color="chipColors[appointmentStore.selectedAppointment.status].color"
          :label="appointmentStore.selectedAppointment.status"
        />
      </div>


      <div class="column mt-3">
        <strong class="font-secondary font-lg">Reference id</strong>
        <div class="font-sm">
          {{ appointmentStore.selectedAppointment.reference_id }}
        </div>
      </div>


      <div class="column col ">
        <strong class="font-secondary font-lg">Booked Service </strong>
        <div class="font-sm">
          {{ appointmentStore.selectedAppointment.service.name }}
        </div>
      </div>

      <div class="column">
        <strong class="font-secondary font-lg">Assigned Doctor</strong>
        <div class="font-sm">
          {{ appointmentStore.selectedAppointment.doctor.full_name }}
        </div>
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
      <div class="col  mt-3 row justify-between items-center">
        <div class= " col-7 column">
          <strong class="font-secondary font-lg"> Date Scheduled</strong>
          <div class="font-thin font-sm">{{appointmentStore.selectedAppointment.schedule_date}}</div>
        </div>

        <div class="col-5 row justify-end" v-if="appointmentStore.selectedAppointment.status === 'pending'">
          <ChangeScheduleModalVue/>
          <q-btn class="mx-2" color="red" :loading="loading['cancel']"  @click="userAction('cancel')" dense label="Cancel" />
        </div>
        <div  v-else-if="appointmentStore.selectedAppointment.status === 'rescheduled'">
          <q-btn class="mx-2" :loading="loading['accept']"  @click="userAction('accept')" color="green" dense label="Accept" />
          <q-btn  color="red" :loading="loading['decline']"  @click="userAction('decline')" dense label="Decline" />
        </div>
        <div v-else-if="appointmentStore.selectedAppointment.status === 'approved' || appointmentStore.selectedAppointment.status === 'rejected' || appointmentStore.selectedAppointment.status === 'canceled'">
          <q-chip
          square
          outline
          :color="chipColors[appointmentStore.selectedAppointment.status].color"
          :label="appointmentStore.selectedAppointment.status"
          size="15px"
        />
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import { useAppointmentStore } from "@/store/userAppointment";
import { useAuthStore } from "@/store/auth";

import router from "@/router";
import { ref } from 'vue';
import ChangeScheduleModalVue from '../modals/ChangeScheduleModal.vue';
import getChipColors from '@/data/chipColor';
export default {
  components: {
    BreadCrumbs,
    ChangeScheduleModalVue
  },

  setup() {
    const appointmentStore = useAppointmentStore();
    const authStore = useAuthStore();

    const {chipColors } = getChipColors()

   
    const loading = ref({
      accept:false,
      decline:false,
      cancel:false
    })

    try {
      if (appointmentStore.selectedAppointment === null) {
        router.go(-1);
      }
    } catch (er) {
      router.go(-1);
    }

    return {
      chipColors,
      authStore,
      appointmentStore,
      userAction: async(action)=>{
        loading.value[action] = true
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await appointmentStore.userAction(action)
        loading.value[action] = false
      },
      loading
    
    };
  },
};

</script>
<style>
</style>