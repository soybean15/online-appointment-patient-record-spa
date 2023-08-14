<template>
  <div class="column">
    <div class="col text-xl py-3 px-5">Appointments</div>
   
    <div class="row">
      <div class="col-12">
        <q-tabs
          v-model="tab"
          dense
          align="left"

          :breakpoint="0"
        >
          <q-tab name="all" icon="list_alt" >
            <q-tooltip  class="bg-indigo" :offset="[10, 10]">
          All appointments
        </q-tooltip>
          </q-tab>
          <q-tab name="status" icon="filter_alt" >
            <q-tooltip  class="bg-indigo" :offset="[10, 10]">
         Filter by Status
        </q-tooltip>
          </q-tab>
          <q-tab name="rejected" icon="event_busy" >
            <q-tooltip  class="bg-indigo" :offset="[10, 10]">
          Rejected/Cancelled 
          </q-tooltip>
          </q-tab>
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="pending" v-model="tab">
         qwe
        </q-tab-panel>

        <q-tab-panel v-model="tab"  name="status">
            <TablesContainer />
        </q-tab-panel>

        <q-tab-panel v-model="tab"  name="rejected">
        qwe
        </q-tab-panel>
      </q-tab-panels>
      </div>
    </div>
  </div>
</template>

<script>
import TablesContainer from "./components/TablesContainer.vue";
import { useAppointmentStore } from "@/store/adminAppointment";
import { onMounted, ref } from "vue";
export default {
  components: {
    TablesContainer,
  },
  setup() {
    const appointmentStore = useAppointmentStore();

    onMounted(() => {
      appointmentStore.index();
    });

    return {
      tab: ref("all"),
    
    };
  },
};
</script>

<style>
</style>