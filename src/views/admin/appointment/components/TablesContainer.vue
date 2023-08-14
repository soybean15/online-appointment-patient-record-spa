<template>
  <div class="w-full">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        :active-color="$primary"
        align="start"
        shrink
        narrow-indicator
      >
        <q-tab name="pending" label="Pending" />
        <q-tab name="approved" label="In Coming" />
        <q-tab name="completed" label="Attended/Fulfilled" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="pending">
          <AppointmentPendingTable :chipColors="chipColors" :buttons="buttons" />
        </q-tab-panel>

        <q-tab-panel v-model="tab"  name="approved">
          <AppointmentApprovedTable :chipColors="chipColors" :buttons="buttons" />
        </q-tab-panel>

        <q-tab-panel v-model="tab"  name="completed">
          <AppointmentCompleted :chipColors="chipColors" :buttons="buttons" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>
  
  <script>
import AppointmentCompleted from "./AppointmentCompleted.vue";
import AppointmentPendingTable from "./AppointmentPendingTable.vue";
import AppointmentApprovedTable from "./AppointmentApprovedTable.vue";
import { ref, watch } from "vue";
import { useAppointmentStore } from "@/store/adminAppointment";

export default {
  components: {
    AppointmentPendingTable,
    AppointmentApprovedTable,
    AppointmentCompleted,
  },
  setup() {
    const tab = ref("pending");
    const appointmentStore = useAppointmentStore();
    appointmentStore.setStatus(tab.value)

    watch(tab, () => {
      console.log("tab changed");
      appointmentStore.index();
      appointmentStore.setStatus(tab.value)
    });
    return {
      tab,
      splitterModel: ref(20),
      buttons: [
        {
          label: "All",
          action: "all",
          icon: "calendar_month",
          onClick: () => {
            console.log("test all");
            appointmentStore.filter('all')
          },
        },
        {
          label: "Today",
          action: "today",
          icon: "today",
          onClick: () => {
            appointmentStore.filter('today')
          },
        },

      ],
       chipColors : {
     
     rejected: { color: 'red', icon: 'cancel' },
     rescheduled: { color: 'blue', icon: 'pending_actions' },
     approved: { color: 'yellow', icon: 'done_outline' },
     
   }

    };
  },
};
</script>
  