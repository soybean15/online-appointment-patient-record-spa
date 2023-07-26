<template>
    <div style="height: 400px;" class="overflow-auto row wrap justify-start items-start content-start"
  >
  
    <div
      class="relative"
      v-for="doctor in appointmentStore.selectedService.doctors"
      :key="doctor.id"
    >
    <div class="absolute  " style="border-radius: 10px; height: 190px;width: 225px"></div>
     <div>


        <q-card
           
               class="cursor-pointer  text-gray-7 q-ma-sm shadow-3 "
              style="border-radius: 10px; width: 210px"
            >
              <q-img
                style="height: 170px; max-width: 300px"
                :src="doctor.user.profile.image"
              >
                <div class="absolute-bottom text-center">
                  {{ `${doctor.user.profile.firstname}  ${doctor.user.profile.lastname}`}}
                </div>
              </q-img>
            </q-card>
     </div>
    </div>
  </div>
 
</template>

<script>
import { useAppointmentStore } from '@/store/appointment';
export default {
    setup(){
        const appointmentStore = useAppointmentStore()
        console.log(appointmentStore.selectedService.doctors)

        return {appointmentStore}

    }

}
</script>

<style>

</style>