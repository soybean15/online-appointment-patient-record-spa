<template>
  <div class="overflow-auto h-56 row wrap justify-start items-start content-start"
  >
    <div
      class=""
      v-for="service in appointmentStore.services"
      :key="service.id"
    >
     <div>

        <q-card
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
import { onMounted } from "vue";
export default {
  setup() {
    const appointmentStore = useAppointmentStore();

    onMounted(() => {
      appointmentStore.services;
    });
    return{
        appointmentStore
    }
  },
};
</script>

<style>
</style>