<template>
  <div class="column">
    <div class="col text-xl py-3 px-5">Appointments</div>

    <div class="row">
      <div class="col-12">
        <q-tabs v-model="tab" dense align="left" :breakpoint="0">
          <q-tab name="all" label="All">
            <q-tooltip class="bg-indigo" :offset="[10, 10]">
              All appointments
            </q-tooltip>
          </q-tab>
          <q-tab name="status" label="Filter(status)">
            <q-tooltip class="bg-indigo" :offset="[10, 10]">
              Filter by Status
            </q-tooltip>
          </q-tab>
          <q-tab name="rejected" label="Rejected/Canceled">
            <q-tooltip class="bg-indigo" :offset="[10, 10]">
              Rejected/Cancelled
            </q-tooltip>
          </q-tab>
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="all" v-model="tab"> 
             <AppointmentTableView :data="appointmentStore.appointments" :status="null"/>
          </q-tab-panel>

          <q-tab-panel v-model="tab" name="status">
            <TablesContainer />
          </q-tab-panel>

          <q-tab-panel v-model="tab" name="rejected"> 
            <AppointmentTableView :data="appointmentStore.canceled_rejected" :status="'canceled_rejected'"/>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
</template>

<script>
import TablesContainer from "./components/TablesContainer.vue";
import AppointmentTableView from "./components/AppointmentTable.vue"
import { useAppointmentStore } from "@/store/adminAppointment";
import { onMounted, ref } from "vue";


export default {
  components: {
    TablesContainer,
    AppointmentTableView
  },
  setup() {
    const appointmentStore = useAppointmentStore();

    onMounted(() => {
      appointmentStore.index();
    });

    return {
      tab: ref("all"),
      appointmentStore
    };
  },
};
</script>

<style>
</style>