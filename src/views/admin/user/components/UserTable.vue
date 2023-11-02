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
        <q-tr class="cursor-pointer" :class="{'bg-onSurface':props.row ==selectedUser }" :props="props" @click="selectedUser = props.row">
          <q-td key="fullname" :props="props">
            <q-chip>
              <q-avatar>
                <img :src="props.row.profile.image" />
              </q-avatar>
              {{ props.row.profile.full_name }}
            </q-chip>
          </q-td>

          <q-td key="birthdate" :props="props">
            <q-chip dense color="orange" text-color="white" icon="cake">
              {{ formatDate(props.row.profile.birthdate, "MMM D YYYY") }}
            </q-chip>
          </q-td>

          <q-td key="contact_number" :props="props">
            <q-chip>
              <q-avatar icon="call" color="blue" text-color="white" />
              {{ props.row.profile.contact_number }}
            </q-chip>
          </q-td>

          <q-td key="address" :props="props">

              {{props.row.profile.address_home}}
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
import formatDate from "@/composables/dateFormat";
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
];

export default {
  setup() {
    const current = ref(1);
    const patientStore = usePatientStore();
    const { patients, selectedUser } = storeToRefs(patientStore);

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
      selectedUser,
      formatDate,
    };
  },
};
</script>
  