<template>
  <div class="p-3">
    <div class="text-lg">Patient Record</div>

  </div>
   <q-table
      title="History"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />

    {{lastRecord}}

</template>

<script>
import { ref } from 'vue'
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
    setup(props){

      const lastRecord = ref(props.rows[props.rows.length - 1])

        return {
            columns,
            lastRecord
        }
    }

}
</script>

<style>

</style>