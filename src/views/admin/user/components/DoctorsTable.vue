<template>
  <div class="q-pa-md" style="max-width: 700px">
    <q-toolbar class=" text-white shadow-2 bg-primary" >
      <q-toolbar-title>Doctors</q-toolbar-title>
    </q-toolbar>

    <q-list bordered>
      <q-item
        @click="doctorStore.setUser(doctor)"
        v-for="doctor in doctors"
        :key="doctor.id"
        class="q-my-sm"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            <img :src="doctor.profile[0].image" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{
            `${doctor.profile[0].firstname} ${doctor.profile[0].lastname}`
          }}</q-item-label>
          <span class="font-secondary">{{doctor.doctor.specialty}}</span>
          <q-item-label caption lines="1">{{ doctor.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="add_circle" color="green">
            <q-tooltip anchor="center right" self="center start">
              Add Specialty
            </q-tooltip>

            <q-popup-edit  v-slot="scope">
              <q-input
              v-model="specialty"
               
                dense
                autofocus
                @keyup.enter="save(doctor, scope.set)"
              />
            </q-popup-edit>
          </q-icon>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
  
  <script>

import { ref } from "vue";
import {useDoctorStore} from '@/store/doctor'
import { storeToRefs } from 'pinia';

export default {
  setup() {

    const specialty = ref('')

    const doctorStore = useDoctorStore()

    const {doctors} = storeToRefs(doctorStore)

    return {
      
      specialty,  
      doctorStore,
      doctors,
      save:(doctor,close)=>{

        doctorStore.addDoctor(doctor, specialty.value)
        specialty.value=''
      
        close()
        
      }
    };
  },
};
</script>
  