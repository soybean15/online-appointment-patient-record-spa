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
          :max="appointmentStore.pending.last_page"
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

      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <!-- <div class="row justify-around" v-if="!selectedItem.done || selectedItem != props.row" > -->
          <div v-if="!props.row.done">
            <q-btn
              dense
              color="green"
              :loading="loading[0] && selectedItem == props.row"
              size="13px"
              @click="onApprove(props)"
              icon-right="done_all"
              label="Approve"
            />

            <q-btn
              dense
              color="red"
              :loading="loading[1] && selectedItem == props.row"
              size="13px"
              @click="onDecline(props)"
              icon-right="cancel"
              label="Decline"
            />
          </div>
          <div v-else>
            {{ props.row.done }} 
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>
  
  <script>
import { useAppointmentStore } from "@/store/adminAppointment";
import { ref } from "vue";
const columns = [
  {
    name: "image",
    required: true,
    label: "",
    align: "center",
    field: (row) => row.user.profile[0].image,
    format: (val) => `${val}`,
    sortable: false,
    "q-table-col-props": {
      "class-name": "q-py-xs",
      "style-name": "width: 60px",
    },
  },
  {
    name: "name",
    required: true,
    label: "Patient Name",
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
    label: "Contact",
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
    const appointmentStore = useAppointmentStore();
    const loading = ref([false,false]);
    const selectedItem = ref();

    return {
      columns,
      appointmentStore,
      loading,
      selectedItem,
      onApprove: async (props) => {
        selectedItem.value = props.row;
        loading.value[0] = true;

        await new Promise((resolve) => setTimeout(resolve, 1000));
        //await  appointmentStore.approve(props.row)

        loading.value[0] = false;

        props.row.done = "Approved";
      },
      onDecline: async (props) => {
        selectedItem.value= props.row;
        loading.value[1] = true;

        await new Promise((resolve) => setTimeout(resolve, 1000));
        //await  appointmentStore.reject(props.row)

        loading.value[1] = false;
        props.row.done = "Declined";
      },
    };
  },
};
</script>
  