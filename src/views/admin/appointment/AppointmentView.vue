<template>
  <div class="column">
    <div class="col text-xl py-3 px-5">Appointments</div>
    <div class="row">
      <div class="col-12">
        <TablesContainer />
      </div>
    </div>
  </div>
</template>

<script>
import TablesContainer from "./components/TablesContainer.vue";
import { useAppointmentStore } from "@/store/adminAppointment";
import { onMounted } from "vue";
export default {
  components: {
    TablesContainer,
  },
  setup() {
    const appointmentStore = useAppointmentStore();

    onMounted(() => {
      appointmentStore.index();
    });
  },
};
</script>

<style>
</style>