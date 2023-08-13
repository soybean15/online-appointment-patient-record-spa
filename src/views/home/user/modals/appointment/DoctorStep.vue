<template>
  <div
    style="height: 400px"
    class="overflow-auto row wrap justify-start items-start content-start"
  >
    <div v-if="appointmentStore.selectedService">
      <div
        class="relative m-1 bg-red cursor-pointer column items-center"
        @click="appointmentStore.selectDoctor(doctor)"
        v-for="doctor in appointmentStore.selectedService.doctors"
        :key="doctor.id"
      >
        <!-- <div
        :class="{'bg-red-300 ': doctor == appointmentStore.selectedDoctor}"
        class="absolute  rounded-full"
        style="height: 11rem; width: 11rem"
      ></div> -->
        <div class="p-2 col flex w-full">
          <q-avatar round style="height: 6rem; width: 6rem">
            <img :src="doctor.user.profile.image" />
          </q-avatar>

          <div class="col column m-3 justify-center">
            <div>{{ doctor.full_name }}</div>
            <div>{{ doctor.specialty }}</div>
            <div
            class=" "
              v-for="schedule in doctor.available_schedules"
              :key="schedule.name"
            >
              <div v-if="schedule.selected">
                {{ schedule.name }}
              </div>
            </div>
            <div> {{ `${doctor.from}-${doctor.to}`}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAppointmentStore } from "@/store/userAppointment";

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