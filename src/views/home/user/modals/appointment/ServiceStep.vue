<template>
  <div style="height: 400px;" class="overflow-auto row wrap justify-start items-start content-start"
  >
    <div
      class="relative"
      v-for="service in appointmentStore.services"
      :key="service.id"
    >
    <div :class="{'bg-red-300': service == selectedService}" class="absolute  " style="border-radius: 10px; height: 190px;width: 225px"></div>
     <div>


        <q-card
            @click="selectService(service)"
               class="cursor-pointer  text-gray-7 q-ma-sm shadow-3 "
              style="border-radius: 10px; width: 210px"
            >
              <q-img
                style="height: 170px; max-width: 300px"
                :src="service.image"
              >
                <div class="absolute-bottom text-center">
                  {{ service.name }}
                </div>
              </q-img>
            </q-card>
     </div>
    </div>
  </div>
</template>

<script>
import { useAppointmentStore } from "@/store/appointment";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const appointmentStore = useAppointmentStore();

    const selectedService = ref(null)
    onMounted(() => {
      appointmentStore.services;
    });
    return{
        appointmentStore,
        selectedService,
        selectService:(service)=>{
            selectedService.value = service
            appointmentStore.selectService(service)
        }
    }
  },
};
</script>

<style>
</style>