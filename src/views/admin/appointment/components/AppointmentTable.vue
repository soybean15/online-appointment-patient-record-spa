<template>
    <div class="" v-if="appointmentStore.pending">
      <q-table
        color="primary"
        card-class=" text-brown"
        table-class="text-grey-8"
        table-header-class="text-brown"
        flat
        bordered
        title="Treats"
       :rows="appointmentStore.pending.data"
        :columns="columns"
        row-key="name"
      >
      <template v-slot:top-right>
        <q-pagination
          v-model="current"
          color="primary"
          :max="appointmentStore.pending.last_page "
          :max-pages="5"
          boundary-numbers
        />
      </template>
    
    </q-table>
    </div>
  </template>
  
  <script>
  import {useAppointmentStore} from '@/store/adminAppointment'
  const columns = [
    {
      name: 'name',
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
   
   
  ]
  
  
  export default {
    setup () {
        const appointmentStore = useAppointmentStore()

      return {
        columns,
        appointmentStore,
        
      }
    }
  }
  </script>
  