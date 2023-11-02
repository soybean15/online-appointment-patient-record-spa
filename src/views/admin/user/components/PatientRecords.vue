<template>
  <div class="row bg-surface rounded-md " v-if="selectedUser">
    <div class="p-5 bg-onSurface shadow-md rounded-md"  style="max-width:300px">
      <div class="text-lg">Patient Info</div>

      <div class="column my-5 items-center">
        <q-avatar size="6em" rounded>
          <img :src="selectedUser.profile.image" />
        </q-avatar>

        <div class="column items-center">
          <div>{{ selectedUser.profile.full_name }}</div>
          <q-chip>
            <q-avatar icon="call" color="blue" text-color="white" />
            {{ selectedUser.profile.contact_number }}
          </q-chip>
          <q-chip>
            <q-avatar icon="mail" color="blue" text-color="white" />
            {{ selectedUser.email }}
          </q-chip>

          <div class="mt-10 column items-start w-full">
            <div class="row items-center">
              <span class="font-secondary mr-1"> Gender</span>
              {{ selectedUser.profile.gender }}
            </div>
            <div class="row items-center">
              <span class="font-secondary mr-1"> Birthdate</span>
              {{ formatDate( selectedUser.profile.birthdate ,'MMM DD YYYY')}}
            </div>
            <div class="row items-center">
              <span class="font-secondary mr-1"> Address(Home)</span>
              <span class="break-words ">{{ selectedUser.profile.address_home }}</span>
            </div>
            <div class="row items-center">
              <span class="font-secondary mr-1"> Address(Office)</span>
              <span class="break-words ">{{ selectedUser.profile.address_office }}</span>
            </div>


            <div class="row items-center">
              <span class="font-secondary mr-1"> Date Created</span>
              {{  formatDate( selectedUser.created_at ,'MMM DD YYYY') }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <PatientRecordTable :rows="selectedUser.patient_record"/>

      
    </div>
  </div>
</template>

<script>
import { usePatientStore } from "@/store/patient";
import { storeToRefs } from "pinia";

import formatDate from '@/composables/dateFormat';
import PatientRecordTable from './PatientRecordTable.vue';
export default {
  components:{PatientRecordTable},
  setup() {
    const patientStore = usePatientStore();

    const { selectedUser } = storeToRefs(patientStore);

    return {
      selectedUser,
      formatDate
    };
  },
};
</script>

<style>
</style>