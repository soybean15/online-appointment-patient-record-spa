<template>
  <div class="q-pa-md" v-if="userStore.patients">
    <q-table
      title="Patients"
      hide-pagination=""
      :rows="userStore.patients.data"
      :columns="columns"
      row-key="lastname"
    >
      <template v-slot:top-right>
        <q-pagination
          v-model="current"
          color="primary"
          :max=" userStore.patients.last_page"
          :max-pages="5"
          boundary-numbers
        />
      </template>
      <template v-slot:body-cell-image="props">
        <q-td :props="props">
          <img
            :src="props.row.profile.image"
            alt="Profile Image"
            style="width: 40px; height: 40px"
          />
        </q-td>
      </template>
    </q-table>
    <div class="q-pa-lg flex flex-center"></div>
  </div>
</template>
  
  <script>
import { onMounted, ref, watch } from "vue";
import { useAdminStore } from "@/store/admin";
const columns = [
  {
    name: "image",
    required: true,
    label: 'image',
    align: "center",
    field: (row) => row.profile.image,
    format: (val) => `${val}`,
    sortable: false,
    "q-table-col-props": {
      "class-name": "q-py-xs",
      "style-name": "width: 60px",
    },
  },
  {
    name: "lastname",
    required: true,
    label: "LastName",
    align: "left",
    field: (row) => row.profile.lastname,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "firstname",
    required: true,
    label: "FirstName",
    align: "left",
    field: (row) => row.profile.firstname,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "middlename",
    required: true,
    label: "MiddleName",
    align: "left",
    field: (row) => row.profile.middlename,
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
    

    const userStore = useAdminStore().userStore;
    const current = ref()
   

    onMounted(async () => {
      await userStore.getPatients(null,'');
     
    });

    watch(current, async () => {
      await userStore.getPatients(userStore.patients.links[current.value].url,'');
      
    
    });

    return {
      columns,
      userStore,
      current
    };
  },
};
</script>
  