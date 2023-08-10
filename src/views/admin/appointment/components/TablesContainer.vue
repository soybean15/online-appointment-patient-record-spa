<template>
  <div class="q-pa-md">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="pending" label="Pending" />
        <q-tab name="approved" label="In Coming" />
        <q-tab name="completed" label="Attended/Fulfilled" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="pending">
          <AppointmentPendingTable :buttons="buttons" />
        </q-tab-panel>

        <q-tab-panel v-model="tab" name="approved">
          <AppointmentApprovedTable :buttons="buttons" />
        </q-tab-panel>

        <q-tab-panel v-model="tab" name="completed">
          <AppointmentCompleted :buttons="buttons" />
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
    };
  },
};
</script>
  