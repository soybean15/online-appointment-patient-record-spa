<template>
  <div class="row bg-surface rounded-md " v-if="selectedUser">
    <div class="p-5 bg-onSurface shadow-md rounded-md"  style="max-width:250px">
      <div class="text-lg">Patient Info</div>

      <div class="column my-5 items-center">
        <q-avatar size="6em" rounded>
          <img :src="selectedUser.profile.image" />
        </q-avatar>

        <div class="column items-center">
          <div>{{ selectedUser.profile.full_name }}</div>
          <q-chip>
            <q-avatar size="1.5em" icon="call" color="blue" text-color="white" />
            <span class="text-xs"> {{ selectedUser.profile.contact_number }}</span>
          </q-chip>
          <q-chip>
            <q-avatar  size="1.5em" icon="mail" color="blue" text-color="white" />
            <span class="text-xs">{{ selectedUser.email }}</span>
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

  <div class="q-pa-md row bg-surface rounded-md " v-else>
    <div class="q-gutter-md w-full">
      <q-skeleton type="circle" size="100px" />
      <q-skeleton />
      <q-skeleton height="150px" />
      <q-skeleton size="50px" />
      <q-skeleton width="200px" height="100px" />
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
      formatDate,
      
    };
  },
};
</script>

<style>
</style>