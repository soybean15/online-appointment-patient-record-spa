<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Add Services" color="primary" @click="persistent = true" />

    <q-dialog
      v-model="persistent"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class=" text-white" style="width: 500px">
        <q-card-section>
          <div class="text-h6">Services</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-scroll-area   style="height: 300px; max-width: 100%">
          <div v-for="service in selectedUser.doctor.services_not_available" :key="service.id">
            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox @click="onSelect(service)" v-model="service.selected" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ service.name }}</q-item-label>
                <q-item-label caption>
                  Notify me about updates to apps or games that I downloaded
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </q-scroll-area>
        <q-btn class="my-4" :loading="loading" color="secondary" @click="onClick()" label="Add Selected" />
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";

import { useDoctorStore } from '@/store/doctor';
import { storeToRefs } from 'pinia';

export default {
  setup() {

    const doctorStore = useDoctorStore()
    const {selectedUser }= storeToRefs(doctorStore)
    const selectedServices = ref([])
    const loading = ref(false)
    const   persistent= ref(false)

  

    return {
      persistent,
      
      selectedUser,
      onSelect(service){
        selectedServices.value.push(service)
      },
      onClick:async()=>{
        loading.value = true
        await doctorStore.addServices(selectedServices.value)

        selectedServices.value = []
        loading.value = false
      persistent.value=false

      },
      loading
    };
  },
};
</script>
