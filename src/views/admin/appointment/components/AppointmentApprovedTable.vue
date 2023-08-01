<template>
    <div class="">
      <q-table
        color="primary"
        card-class="text-brown"
        table-class="text-grey-8"
        table-header-class="text-brown"
        flat
        bordered
        title="Treats"
        :rows="appointmentStore.approved.data"
        :columns="columns"
        row-key="name"
      >
    

      <template v-slot:body-cell-image="props">
        <q-td :props="props">
          <img
            :src="props.row.user.profile[0].image"
            alt="Profile Image"
            style="width: 40px; height: 40px"
          />
        </q-td>
      </template>
    
    </q-table>
    </div>
  </template>
  
  <script>
  import { useAppointmentStore } from '@/store/adminAppointment';
  const columns = [
    {
      name: 'image',
      required: true,
      label: '',
      align: 'left',
      field: row => row.user.profile[0].image,
      format: val => `${val}`,
     
    },
    {
      name: 'fullname',
      required: true,
      label: 'Full Name',
      align: 'left',
      field: row => row.user.profile[0].full_name,
      format: val => `${val}`,
      sortable: true,
    },
    {
      name: 'service',
      required: true,
      label: 'Service',
      align: 'left',
      field: row => row.service.name,
      format: val => `${val}`,
      sortable: true,
    },
    {
      name: 'service',
      required: true,
      label: 'Service',
      align: 'left',
      field: row => row.service.name,
      format: val => `${val}`,
      sortable: true,
    },
    {
      name: 'schedule',
      required: true,
      label: 'Schedule Date',
      align: 'left',
      field: row => row.schedule_date,	
      format: val => `${val}`,
      sortable: true,
    },
    {
      name: 'contact',
      required: true,
      label: 'Contact Number',
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
    name: "actions",
    required: true,
    label: "Actions",
    align: "center",
  },
   
  ]
  
  
  export default {
   
    setup () { 
        const appointmentStore = useAppointmentStore()
      return {
        columns,
        appointmentStore
      }
    }
  }
  </script>
  