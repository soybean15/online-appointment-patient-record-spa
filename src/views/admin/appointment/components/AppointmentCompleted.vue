<template>
    <div class="">
      <q-table
        color="primary"
        card-class=" text-brown"
        table-class="text-grey-8"
        table-header-class="text-brown"
        flat
        bordered
        title="Treats"
        :rows="appointmentStore.attended.data"                 
        :columns="columns"
        row-key="name"
        :rows-per-page-options="[0]"

      >
      <template v-slot:top-left>
        <FilterGroup :buttons="buttons" >
          <template v-slot:pop-up>
            <q-btn dense color="brown" outline label="Date(s)" icon-right="date_range">
              <q-popup-proxy
                ref="qDateProxy"
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="dateRange" range>
                  <div class="row items-center justify-end q-gutter-sm">
                    <q-btn label="Cancel" color="primary" flat v-close-popup />
                    <q-btn
                      label="OK"
                      color="primary"
                      flat
                      @click="save"
                      v-close-popup
                    />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-btn>
          </template>
        </FilterGroup>
      </template>
      

      <template v-slot:top-right>
        <q-pagination
          v-model="current"
          color="primary"

          :active-text-color="$primary"
          :max="appointmentStore.attended.last_page"
          :max-pages="5"
          boundary-numbers
        />
      </template>

      <template v-slot:body-cell-schedule="props">
        <q-td :props="props">

          <q-chip color="green" text-color="white" icon="event">

         {{formatDate(props.row.schedule_date,"MMM D YYYY")}}
          </q-chip>
        </q-td>
      </template>

      <template v-slot:body-cell-image="props">
        <q-td :props="props">
          <img
            :src="props.row.user.profile[0].image"
            alt="Profile Image"
            style="width: 40px; height: 40px"
          />
        </q-td>
      </template>


      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <!-- <div class="row justify-around" v-if="!selectedItem.done || selectedItem != props.row" > -->
          <div>   
             
              <q-chip outline color="green" text-color="white" > {{ props.row.status }}
            </q-chip>
        </div> 
         
        </q-td>
      </template>
    
    </q-table>

      
    </div>                             
  </template>
  
  <script>


import { useAppointmentStore } from '@/store/adminAppointment';
import { usePatientRecordStore } from '@/store/patientRecord';
import FilterGroup from "@/components/FilterGroup.vue";
import { ref, watch } from 'vue';

import formatDate from '@/composables/dateFormat';
  const columns = [
    {
      name: 'image',
      required: true,
      label: '',
      align: 'left',
      field: (row) => row.user.profile[0].image,
      format: val => `${val}`,
      "q-table-col-props": {
      "class-name": "q-py-xs",
      "style-name": "width: 60px",
    },
    },
    {
      name: 'fullname',
      required: true,
      label: 'Patient Name',
      align: 'left',
      field: row => row.user.profile[0].full_name,
      format: val => `${val}`,
      sortable: true
    },
    {
      name: 'service',
      required: true,
      label: 'Service',
      align: 'left',
      field: row => row.service.name,
      format: val => `${val}`,
      sortable: true
    },
    {
      name: 'schedule',
      required: true,
      label: 'Schedule Date',
      align: 'left',
      field: row => row.schedule_date,
      format: val => `${val}`,
      sortable: true
    },
    {
      name: 'contact',
      required: true,
      label: 'Contact',
      align: 'left',
      field: row => row.user.profile[0].contact_number,
      format: val => `${val}`,
    },
    {
      name: 'doctor',
      required: true,
      label: 'Assigned Doctor',  
      align: 'left',
      field: row => row.doctor.full_name,
      format: val => `${val}`,
    },
    {
      name: 'status',
      required: true,
      label: 'Status',
      align: 'center',
      field: row => row.status,
      format: val => `${val}`,
     
    },
  ]
  
  
  
  export default {
    components:{
      FilterGroup
    },
    props:['buttons','chipColors'],
    setup () {

      const current = ref()
        const appointmentStore = useAppointmentStore();
        const patientRecord = usePatientRecordStore();

        watch(current,()=>{

          appointmentStore.getData('completed',appointmentStore.attended.links[current.value].url)
        })



      return {
        columns,
        appointmentStore,
        formatDate,
        current,
        patientRecord,
      }
    }
  }
  </script>
  