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

      >

      <template v-slot:top-right>
        <q-pagination
          v-model="current"
          color="primary"
          :max="appointmentStore.attended.last_page"
          :max-pages="5"
          boundary-numbers
        />
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
             <q-chip outline color="green" text-color="white" >
               {{ props.row.status }}
            </q-chip>
        </div> 
         
        </q-td>
      </template>
    
    </q-table>

      
    </div>                             
  </template>
  
  <script>

  import { useAppointmentStore } from '@/store/adminAppointment';
import { ref, watch } from 'vue';
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
    setup () {

      const current = ref()
        const appointmentStore = useAppointmentStore();

        watch(current,()=>{

          appointmentStore.getAttended(appointmentStore.attended.links[current.value].url)
        })



      return {
        columns,
        appointmentStore,
        current
      }
    }
  }
  </script>
  