<template>
  <div
    style="height: 400px"
    class="overflow-auto row wrap justify-start items-start content-start"
  >

  <div v-if="appointmentStore.selectedService">
    <div
      class="relative m-1  cursor-pointer column items-center"
      @click="appointmentStore.selectDoctor(doctor)"
      v-for="doctor in appointmentStore.selectedService.doctors"
      :key="doctor.id"
    >
      <div
        :class="{'bg-red-300 ': doctor == appointmentStore.selectedDoctor}"
        class="absolute  rounded-full"
        style="height: 11rem; width: 11rem"
      ></div>
      <div class="p-2 ">
        <q-avatar round style="height: 10rem; width: 10rem">
          <img :src="doctor.user.profile.image" />
        </q-avatar>

        <div class="col m-3 row justify-center">
          {{ doctor.full_name }}
        </div>
      </div>
    </div>

  </div>
 
  </div>
</template>

<script>
import { useAppointmentStore } from "@/store/appointment";

export default {
  setup() {
    const appointmentStore = useAppointmentStore();
    console.log(appointmentStore.selectedService.doctors);

    return {
      appointmentStore,
     
    };
  },
};
</script>

<style>
</style>