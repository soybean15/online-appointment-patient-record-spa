<template>
  <div class="row m-3 justify-between items-center">
    <q-input outlined  label="Search" 
    @keydown.enter.prevent="submit"
    v-model.trim="key" dense>
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>

    <div class="bg-surface m-1 p-2 rounded-md">{{ adminStore.currentTime }}</div>

  </div>
</template>

<script>
import { useAdminStore } from "@/store/admin";
import {usePatientStore} from '@/store/patient'
import { ref } from 'vue';
export default {
  setup() {
  

    const patientStore = usePatientStore()

    const key = ref('')
    return {
      adminStore: useAdminStore(),
      submit:async()=>{
        await patientStore.getPatients(null,key.value)
       

      },key
    };
  },
};
</script>

<style>
</style>