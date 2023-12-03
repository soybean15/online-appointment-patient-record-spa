<template>
  <div
    class="overflow-auto row wrap justify-start items-start content-start"
  >
    <div v-if="doctorStore.doctors && doctorStore.doctors">
      <div
    
        class=" m-1 bg-surface shadow-lg cursor-pointer column rounded-lg items-center"
        v-for="doctor in doctorStore.doctors" :key="doctor.id"
     
      >
  
        <div class="p-2 col flex w-full">
          <q-avatar round style="height: 6rem; width: 6rem">
            <img :src="doctor.profile[0].image" />
          </q-avatar>

          <div class="col column m-3 justify-center">
            <div class="font-bold">{{ doctor.profile[0].full_name }}</div>
            <div class="font-secondary">{{ doctor.doctor.specialty }}</div>

            <div  class=" row wrap justify-start items-start content-start">

              <div
           
              v-for="schedule in doctor.doctor.available_schedules"
              :key="schedule.name"
            >
            
              <div class="text-xs pr-1" v-if="schedule.selected">
                {{ `${schedule.name}` }}
              </div>
            
             
            </div>

            </div>
         
            <div> {{ `${doctor.doctor.from}-${doctor.doctor.to}`}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { useDoctorStore } from "@/store/doctor";
import { onMounted } from "vue";
export default {
  setup() {
    const doctorStore = useDoctorStore();

   
    onMounted(async () => {
  try {
    await doctorStore.getDoctors();
  } catch (error) {
    console.error("Error fetching doctors:", error);
    // Handle the error, show a message, or log the error details
  }
});

    return {
      doctorStore,
    };
  
  },
};
</script>
