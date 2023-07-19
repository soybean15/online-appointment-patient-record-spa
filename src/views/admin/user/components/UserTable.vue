<template>
  <div class="q-pa-md">
    <q-table
      title="Patients"
      hide-pagination
      :rows="rows"
      :columns="columns"
      row-key="name"
     
      
    >
    <template v-slot:top-right>
        <q-pagination
      v-model="current"
      color="primary"
      :max="max"
      :max-pages="5"
      boundary-numbers
    />
      </template>
      <template v-slot:body-cell-image="props">
        <q-td :props="props">
          <img
            :src="props.row.profile.image"
            alt="Profile Image"
            style="width: 50px; height: 50px"
          />
        </q-td>
      </template>
    </q-table>
    <div class="q-pa-lg flex flex-center">
  
  </div>
  </div>
</template>
  
  <script>
import { onMounted, ref, watch } from "vue";
import { useAdminStore } from "@/store/admin";
const columns = [
  {
    name: "image",
    required: true,
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
    const rows = ref([]);

    const userStore = useAdminStore().userStore;
    const current = ref()
  

    const max= ref()


    onMounted(async () => {

      await userStore.getPatients();
      rows.value = userStore.patients.data;
      current.value = userStore.patients.current_page
      max.value = userStore.patients.last_page

  
    });

    watch(current,async()=>{
     await userStore.getPatients(userStore.patients.links[current.value].url);

      rows.value = userStore.patients.data;
      console.log("current"+ current.value)
    //  console.log(userStore.patients.links[current.value].url)
      

    })



  

    return {
      columns,
      rows,
      userStore,
      current,
      max
      
    };
  },
};
</script>
  