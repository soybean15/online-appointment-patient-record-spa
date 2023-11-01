<template>
   <q-table
      title="Records"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />

</template>

<script>
const columns =[

{
    name: 'date_diagnosed',
    required: true,
    label: 'Date Diagnosed',
    align: 'left',
    field: row => row.date_diagnosed,
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
    name: 'doctor',
    required: true,
    label: 'Assigned Doctor',
    align: 'left',
    field: row => row.doctor,
    format: val => `${val}`,
    sortable: true
  },
]
export default {
    props:['rows'],
    setup(){
        return {
            columns
        }
    }

}
</script>

<style>

</style>