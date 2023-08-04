<template>
    <div class="">
        <q-btn flat label="Reschedule" color="primary" @click='card=true' />
  
      <q-dialog v-model="card"  >
        <q-card class="my-card"  >
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Select New Schedule</div>
  
            
          </q-card-section>
  
          <q-separator />
          <q-card-section>
            <q-date v-model="currentDate" />
          </q-card-section>
  
  
          <q-card-actions align="right">
            <q-btn v-close-popup  color="green" label="Submit" />
            <q-btn v-close-popup flat color="primary" label="Back" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </template>
    
    <script>
  import { ref } from "vue";
  import {  format } from "date-fns";
  export default {
    
    setup() {
        const currentDate = ref(format(new Date(), "yyyy/MM/dd"));
      return {
        currentDate,
        card: ref(false),
      };
    },
  };
  </script>
    