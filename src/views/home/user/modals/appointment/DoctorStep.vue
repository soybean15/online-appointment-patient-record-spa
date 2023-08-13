<template>
  <div
    style="height: 400px"
    class="overflow-auto row wrap justify-start items-start content-start"
  >
    <div v-if="appointmentStore.selectedService">
      <div
    
        class=" m-1 bg-surface shadow-lg cursor-pointer column rounded-lg items-center"
        @click="appointmentStore.selectDoctor(doctor)"
      
        :class="{'bg-onSurface ': doctor == appointmentStore.selectedDoctor}"
       
        v-for="doctor in appointmentStore.selectedService.doctors"
        :key="doctor.id"
      >
  
        <div class="p-2 col flex w-full">
          <q-avatar round style="height: 6rem; width: 6rem">
            <img :src="doctor.user.profile.image" />
          </q-avatar>

          <div class="col column m-3 justify-center">
            <div class="font-bold">{{ doctor.full_name }}</div>
            <div class="font-secondary">{{ doctor.specialty }}</div>

            <div  class=" row wrap justify-start items-start content-start">

              <div
           
              v-for="schedule in doctor.available_schedules"
              :key="schedule.name"
            >
            
              <div class="text-xs pr-1" v-if="schedule.selected">
                {{ `${schedule.name}` }}
              </div>
            
             
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