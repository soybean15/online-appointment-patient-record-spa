<template>
  <div v-if="appointmentStore.appointments">
    <q-table
      color="primary"
      card-class=" text-brown"
      table-class="text-grey-8"
      table-header-class="text-brown"
      flat
      bordered
      title="Treats"
      :rows="appointmentStore.appointments.data"
      :columns="columns"
      row-key="name"
    >

    <template v-slot:top-right>
        <SearchBar @onSearch="appointmentStore.search(null, $event)" />
      </template>
      <template v-slot:body-cell-contact="props">
        <q-td :props="props">
          <div class="row justify-around">
            <q-icon
              size="2em"
              class="cursor-pointer"
              name="call"
              @click="makeCall(props)"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <strong>{{ props.row.user.profile[0].contact_number }}</strong>
              </q-tooltip>
            </q-icon>

            <q-icon
              size="2em"
              class="cursor-pointer"
              name="mail"
              @click="sendEmail(props)"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <strong>{{ props.row.user.email }}</strong>
              </q-tooltip>
            </q-icon>
          </div>
        </q-td>
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

      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <q-chip
            outline
            :color="chipColors[props.row.status].color"
            text-color="white"
            :label="props.row.status"
          />
        </q-td>
      </template>



      <template v-slot:bottom>
        <q-pagination
          v-model="current"
          color="primary"
          :max="appointmentStore.appointments.last_page"
          :max-pages="5"
          boundary-numbers
          @click="onClick"
        />
      </template>




    </q-table>
  </div>
</template>
  
  <script>
import getChipColors from "@/data/chipColor";
import { useAppointmentStore } from "@/store/adminAppointment";
import { ref,watch } from 'vue';
import SearchBar from "@/components/SearchBar.vue";

const columns = [
  {
    name: "ref_id",
    required: true,
    label: "Ref No.",
    align: "center",
    field: (row) => row.reference_id,
    format: (val) => `${val}`,
    sortable: true,
  },
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
    sortable: true,
  },
  {
    name: "schedule",
    required: true,
    label: "Schedule date",
    align: "center",
    field: (row) => row.schedule_date,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "contact",
    required: true,
    label: "Contact",
    align: "center",
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
    name: "status",
    required: true,
    label: "Status",
    align: "center",
  },
];

export default {
  components:{
    SearchBar
  },
  setup() {
    const { chipColors } = getChipColors();
    const appointmentStore = useAppointmentStore();

    const current = ref(1)

    watch(current,()=>{
      appointmentStore.getData(null,appointmentStore.appointments.links[current.value].url )
    })
    

    return {
      columns,
      chipColors,
      appointmentStore,
      current,
     
    };
  },
};
</script>
  