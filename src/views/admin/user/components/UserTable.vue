<template>
  <div class="q-pa-md" v-if="patients">
    <q-table
      title="Patients"
      hide-pagination=""
      :rows="patients.data"
      :columns="columns"
      row-key="lastname"
    >
      <template v-slot:body="props">
        <q-tr :props="props" @click="record = props.row.patient_records">
          <q-td key="fullname" :props="props">
            {{ props.row.profile.full_name }}
          </q-td>

          <q-td key="fullname" :props="props">
            {{ props.row.profile.full_name }}
          </q-td>
        </q-tr>
      </template>

      <template v-slot:top-right>
        <q-pagination
          v-model="current"
          color="primary"
          :max="patients.last_page"
          :max-pages="5"
          boundary-numbers
        />
      </template>
    </q-table>
    <div class="q-pa-lg flex flex-center"></div>
  </div>
</template>
  
  <script>
import { onMounted, ref, watch } from "vue";
import { usePatientStore } from "@/store/patient";

import { storeToRefs } from "pinia";
const columns = [
  {
    name: "fullname",
    required: true,
    label: "FullName",
    align: "left",
    field: (row) => row.profile.full_name,
    format: (val) => `${val}`,
    sortable: true,
  },

  {
    name: "birthdate",
    required: true,
    label: "BirthDate",
    align: "left",
    field: (row) => row.profile.birthdate,
    format: (val) => `${val}`,
  },
  {
    name: "contact_number",
    required: true,
    label: "Contact_number",
    align: "left",
    field: (row) => row.profile.contact_number,
    format: (val) => `${val}`,
  },
  {
    name: "address",
    required: true,
    label: "Address",
    align: "left",
    field: (row) => row.profile.address_home,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "status",
    required: true,
    label: "Address",
    align: "left",
    field: (row) => row.profile.status,
    format: (val) => `${val}`,
    sortable: true,
  },
];

export default {
  setup() {
    const current = ref(1);
    const patientStore = usePatientStore();
    const { patients, record } = storeToRefs(patientStore);

    onMounted(async () => {
      await patientStore.getPatients(null, "");
    });

    watch(current, async () => {
      console.log(current.value);

      await patientStore.getPatients(
        patients.value.links[current.value].url,
        ""
      );
    });

    return {
      columns,
      patients,
      current,
      record,
    };
  },
};
</script>
  