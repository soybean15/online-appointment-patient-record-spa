<template>
    <div>
      <q-table
        color="primary"
        card-class=" text-brown"
        table-class="text-grey-8"
        table-header-class="text-brown"
        flat
        bordered
        title="Treats"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
    </div>
  </template>
  
  <script>
  const columns = [
    {
      name: 'ref_id',
      required: true,
      label: 'Ref No.',
      align: 'center',
      field: row => row.reference_id,
      format: val => `${val}`,
      sortable: true
    },
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
      label: 'Schedule date',
      align: 'center',
      field: row => row.schedule_date,
      format: val => `${val}`,
      sortable: true
    },
    {
    name: "contact",
    required: true,
    label: "Contact",
    align: "center",

  },
  {
    name: "doctor",
    required: true,
    label: "Assigned Doctor",
    align: "left",
    field: (row) => row.doctor.full_name,
    format: (val) => `${val}`,
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
      return {
        columns,
      
      }
    }
  }
  </script>
  