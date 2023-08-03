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
      <template v-slot:top-right>
        <q-pagination
          v-model="current"
          color="primary"
          :max="appointmentStore.attended.last_page"
          :max-pages="5"
          boundary-numbers
        />
      </template>

      <template v-slot:top-left>
        <div class="row">
          <q-btn icon-right="event" label="Filter" rounded color="primary">
            <q-popup-proxy
            
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
        </div>
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
    </q-table>
  </div>

</template>
  
  <script>
import { useAppointmentStore } from "@/store/adminAppointment";
import {  format } from "date-fns";
import { ref } from 'vue';
const columns = [
  {
    name: "image",
    required: true,
    label: "",
    align: "left",
    field: (row) => row.user.profile[0].image,
    format: (val) => `${val}`,
  },
  {
    name: "fullname",
    required: true,
    label: "Full Name",
    align: "left",
    field: (row) => row.user.profile[0].full_name,
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
    name: "service",
    required: true,
    label: "Service",
    align: "left",
    field: (row) => row.service.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "schedule",
    required: true,
    label: "Schedule Date",
    align: "left",
    field: (row) => row.schedule_date,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "contact",
    required: true,
    label: "Contact Number",
    align: "left",
    field: (row) => row.user.profile[0].contact_number,
    format: (val) => `${val}`,
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
];

export default {
  setup() {
    const currentDate = ref(format(new Date(), "yyyy/MM/dd"));

    console.log(currentDate.value)

    const dateRange= ref({ from: currentDate.value, to: currentDate.value })
    const appointmentStore = useAppointmentStore();
    return {
      columns,
      appointmentStore,
      currentDate,
      dateRange,
      save:()=>{
        console.log('range '+dateRange.value)
        appointmentStore.getApprovedByRange(dateRange.value)
      }
     
    };
  },
};
</script>
  