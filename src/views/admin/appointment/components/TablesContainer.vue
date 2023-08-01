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
          <q-tab name="approved" label="Approved" />
          <q-tab name="completed" label="Completed" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="pending">
          <AppointmentPendingTable/>
          </q-tab-panel>

          <q-tab-panel name="approved">
           
           <AppointmentApprovedTable/>
          </q-tab-panel>

          <q-tab-panel name="completed">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>

    </div>
  </template>
  
  <script>
  import AppointmentPendingTable from './AppointmentPendingTable.vue';
  import AppointmentApprovedTable from './AppointmentApprovedTable.vue';
  import { ref } from 'vue'
  
  export default {
    components:{
      AppointmentPendingTable,
      AppointmentApprovedTable
    },
    setup () {
      return {
        tab: ref('pending'),
        splitterModel: ref(20)
      }
    }
  }
  </script>
  