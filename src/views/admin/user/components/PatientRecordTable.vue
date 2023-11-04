<template>
  <div class="p-3" v-if="record">
    <div class="row text-lg my-3  items-center w-full justify-between">
      
     <span> Patient Record</span>


    <CompleteAppointmentModal  :row="selectedUser" :action="'walk_in'">

<template v-slot:open="{open}">
 
  <q-btn @click="open" dense label="Add Record" color="primary" icon-right="add"/>
</template>


</CompleteAppointmentModal>
    
    </div>

    <div class="text-lg">Details</div>

    <div class="row q-gutter-xs">
      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm">
        <div class="text-lg font-bold text-primary">Height</div>
        <div>
          {{ record.height }}
        </div>
      </div>

      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm">
        <div class="text-lg text-primary">Weight</div>
        <div>
          {{ record.weight }}
        </div>
      </div>
      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm">
        <div class="text-lg text-primary">Blood Pressure</div>
        <div>
          {{ record.blood_pressure }}
        </div>
      </div>
      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm">
        <div class="text-lg text-red">Blood Type</div>
        <div>
          {{ record.blood_type }}
        </div>
      </div>
    </div>

    <div class="text-lg mt-5">Appointment Details</div>

    <div class="row q-gutter-xs">
      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm">
        <div class="text-lg text-primary">Reference id</div>
        <div>
          {{ record.appointment.reference_id }}
        </div>
      </div>

      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm">
        <div class="text-lg text-primary">Service</div>
        <div>
          <span class="text-xs font-secondary">Service Name:</span>
          {{ record.service.name }}
        </div>

        <div>
          <span class="text-xs font-secondary">Assigned Doctor:</span>
          <span> {{ record.doctor }}</span>
        </div>
      </div>

      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm">
        <div class="text-lg text-primary">Date</div>
        <div>
          {{ formatDate(record.date_diagnosed, "MMM DD, YYYY") }}
        </div>
      </div>

      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm">
        <div class="text-lg text-orange">Type</div>
        <div>
          {{ getType(record.type).label }}
        </div>
      </div>

      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm w-full">
        <div class="text-lg text-blue">Diagnosis</div>
        <div v-if="record.diagnosis.length > 0">
          <div
            class="row items-center"
            v-for="item in record.diagnosis"
            key="item"
          >
            <q-icon name="task_alt" color="primary" class="mx-1" />
            <span>{{ item }} </span>
          </div>
        </div>
        <div v-else>No Data</div>
      </div>

      <div class="bg-onSurface py-1 px-3 rounded-md shadow-sm w-full">
        <div class="text-lg text-blue">Recommendations</div>
        <div v-if="record.recommendation.length > 0">
          <div
            class="row items-center"
            v-for="item in record.recommendation"
            key="item"
          >
            <q-icon name="task_alt" color="primary" class="mx-1" />
            <span>{{ item }} </span>
          </div>
        </div>
        <div v-else>No Data</div>
      </div>

    </div>



    <div class=" py-1  ">
     
    <q-table
      class="bg-secondary"
      title="History"
      :rows="rows"
      :columns="columns"
      row-key="reference_id"
      :filter="filter"
    >
      <template v-slot:top-right>
        <q-input
          outlined
          label="Filter"
          dense
          debounce="300"
          color="primary"
          v-model.trim="filter"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:body="props">
        <q-tr
          :props="props"
          @click="selectRow(props.row)"
          :class="{ 'text-primary': props.row == record }"
        >
          <q-td key="reference_id" :props="props">
            {{ props.row.appointment.reference_id }}
          </q-td>
          <q-td key="date_diagnosed" :props="props">
            {{ formatDate(props.row.date_diagnosed, "MMM DD YYYY") }}
          </q-td>
          <q-td key="service" :props="props">
            {{ props.row.service.name }}
          </q-td>
          <q-td key="doctor" :props="props">
            {{ props.row.doctor }}
          </q-td>
          <q-td key="type" :props="props">
            <q-chip
              square
              :color="getType(props.row.type).color"
              text-color="white"
            >
              {{ getType(props.row.type).label }}
            </q-chip>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>


  </div>

  <div class="row items-center justify-center h-full" v-else >
    No Record Available 

    <CompleteAppointmentModal :hasAppointment="false"  :row="selectedUser" :action="'walk_in'" >

      <template v-slot:open="{open}">
        <span @click="open" class="underline cursor-pointer text-blue-300 pl-1">Add new </span>

      </template>

     
    </CompleteAppointmentModal >



  </div>


 
</template>

<script>
import { ref } from "vue";

import formatDate from "@/composables/dateFormat";
import { usePatientStore } from '@/store/patient';
import { storeToRefs } from 'pinia';

import CompleteAppointmentModal from '../../appointment/modal/CompleteAppointmentModal.vue';

const columns = [
  {
    name: "reference_id",
    required: true,
    label: "Reference ID",
    align: "center",
    field: (row) => row.appointment.reference_id,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "date_diagnosed",
    required: true,
    label: "Date Diagnosed",
    align: "left",
    field: (row) => row.date_diagnosed,
    format: (val) => `${formatDate(val, "MMM DD, YYYY")}`,
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
  {
    name: "type",
    required: true,
    label: "Type",
    align: "center",
    field: (row) => row.type,
    format: (val) => `${val}`,
  },
];
export default {
  props: ["rows"],
  components:{CompleteAppointmentModal},
  setup(props) {
   // const record = ref(props.rows[props.rows.length - 1]);
   const patientStore = usePatientStore()
   const {record,selectedUser } =storeToRefs(patientStore)
   const   filter= ref('')
    return {
      columns,
      record,
      formatDate,
      selectedUser,
      filter,
      selectRow: (row) => {
        record.value = row;
      },
      getType: (type) => {
        const types = {
          online: { label: "Online", color: "primary" },
          walk_in: { label: "Walk in", color: "blue" },
        };

        return types[type];
      },
    };
  },
};
</script>

<style>
</style>