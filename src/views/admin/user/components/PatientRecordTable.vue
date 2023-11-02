<template>
  <div class="p-3">
    <div class="text-lg my-3">Patient Record</div>

    <div class="text-lg">Details</div>

    <div class="row q-gutter-xs">
      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm">
        <div class="text-lg font-bold text-primary">Height</div>
        <div>
          {{ lastRecord.height }}
        </div>
      </div>

      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm">
        <div class="text-lg text-primary">Weight</div>
        <div>
          {{ lastRecord.weight }}
        </div>
      </div>
      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm">
        <div class="text-lg text-primary">Blood Pressure</div>
        <div>
          {{ lastRecord.blood_pressure }}
        </div>
      </div>
      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm">
        <div class="text-lg text-red">Blood Type</div>
        <div>
          {{ lastRecord.blood_type }}
        </div>
      </div>
    </div>

    <div class="text-lg mt-5">Appointment Details</div>

    <div class="row q-gutter-xs">

      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm">
        <div class="text-lg text-primary">Date</div>
        <div>
          {{ lastRecord.date_diagnosed }}
        </div>
      </div>
      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm">
        <div class="text-lg text-primary">Service</div>
        <div>
          <span class="text-xs font-secondary">Service Name:</span>
          {{ lastRecord.service.name }}
        </div>

        <div>
          <span class="text-xs font-secondary">Assigned Doctor:</span>
          <span> {{lastRecord.doctor}}</span>
        </div>
      </div>

      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm w-full">
        <div class="text-lg text-blue">Diagnosis</div>
        <div v-if="lastRecord.diagnosis.length >0">
          {{ lastRecord.date_diagnosed }}
        </div>
        <div v-else>
          No Data

        </div>
        
      </div>

      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm w-full">
        <div class="text-lg text-blue">Recommendations</div>
        <div v-if="lastRecord.recommendation.length >0">
          {{ lastRecord.date_diagnosed }}
        </div>
        <div v-else>
          No Data

        </div>
        
      </div>


    </div>

  </div>
  <q-table title="History" :rows="rows" :columns="columns" row-key="name" />

  {{ lastRecord }}
</template>

<script>
import { ref } from "vue";

import formatDate from "@/composables/dateFormat";
const columns = [
  {
    name: "date_diagnosed",
    required: true,
    label: "Date Diagnosed",
    align: "left",
    field: (row) => row.date_diagnosed,
    format: (val) => `${val}`,
    sortable: true,
  },

  {
    name: "service",
    required: true,
    label: "Service",
    align: "left",
    field: (row) => row.service.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "doctor",
    required: true,
    label: "Assigned Doctor",
    align: "left",
    field: (row) => row.doctor,
    format: (val) => `${val}`,
    sortable: true,
  },
];
export default {
  props: ["rows"],
  setup(props) {
    const lastRecord = ref(props.rows[props.rows.length - 1]);

    return {
      columns,
      lastRecord,
      formatDate,
    };
  },
};
</script>

<style>
</style>