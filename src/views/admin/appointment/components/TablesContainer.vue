<template>
    <div class="q-pa-md ">
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
          <q-tab name="incoming" label="In Coming" />
          <q-tab name="attended" label="Attended/Fulfilled" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="pending">
          <AppointmentPendingTable/>
          </q-tab-panel>

          <q-tab-panel name="incoming">
           
           <AppointmentApprovedTable/>
          </q-tab-panel>

          <q-tab-panel name="attended">
                  <AppointmentCompleted />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>

    </div>
  </template>
  
  <script>

  import AppointmentCompleted from './AppointmentCompleted.vue';
  import AppointmentPendingTable from './AppointmentPendingTable.vue';
  import AppointmentApprovedTable from './AppointmentApprovedTable.vue';
  import { ref } from 'vue'
  
  export default {
    components:{
      AppointmentPendingTable,
      AppointmentApprovedTable,
      AppointmentCompleted
    },
    setup () {
      return {
        tab: ref('pending'),
        splitterModel: ref(20)
      }
    }
  }
  </script>
  