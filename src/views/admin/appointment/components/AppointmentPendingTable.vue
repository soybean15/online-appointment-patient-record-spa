<template>
  <div class="" v-if="appointmentStore.pending">
    <q-table
      color="primary"
      card-class=" text-brown"
      table-class="text-grey-8"
      table-header-class="text-brown"
      flat
      bordered
      :rows="appointmentStore.pending.data"
      :columns="columns"
      :rows-per-page-options="[0]"
    >
      <template v-slot:bottom>
        <q-pagination
          v-model="current"
          color="primary"
          :active-text-color="$primary"
          :max="appointmentStore.pending.last_page"
          :max-pages="5"
          boundary-numbers
        />
      </template>

      <template v-slot:top-left>
        <FilterGroup :buttons="buttons">
          <template v-slot:pop-up>
            <q-btn
              dense
              color="brown"
              outline
              label="Date(s)"
              icon-right="date_range"
            >
              <q-popup-proxy
                ref="qDateProxy"
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
          </template>
        </FilterGroup>
      </template>

      <template v-slot:top-right>
        <SearchBar @onSearch="appointmentStore.search('pending', $event)" />
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

      <template v-slot:body-cell-schedule="props">
        <q-td :props="props">
          <q-chip color="green" text-color="white" icon="event">
         {{formatDate(props.row.schedule_date,"MMM D YYYY")}}
          </q-chip>
        </q-td>
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

      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <!-- <div class="row justify-around" v-if="!selectedItem.done || selectedItem != props.row" > -->
          <div class="row justify-around" v-if="!props.row.done">
            <q-btn
              dense
              color="green"
              :loading="loading[0] && selectedItem == props.row"
              size="13px"
              @click="onApprove(props)"
              icon-right="done_all"
            >
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <strong>Approve</strong>
              </q-tooltip>
            </q-btn>

            <DeclineAppointmentModal @onDecline="onDecline(props)" />
          </div>
          <div v-else>
            <q-chip
              outline
              square
              :color="chipColors[props.row.done].color"
              text-color="white"
              :icon-right="chipColors[props.row.done].icon"
              :label="props.row.done"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>
  
  <script>
import { useAppointmentStore } from "@/store/adminAppointment";
import DeclineAppointmentModal from "../modal/DeclineAppointmentModal.vue";
import SearchBar from "@/components/SearchBar.vue";
import FilterGroup from "@/components/FilterGroup.vue";
import { ref, watch } from "vue";
import formatDate from "@/composables/dateFormat";
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
    name: "actions",
    required: true,
    label: "Actions",
    align: "center",
  },
];

export default {
  components: {
    DeclineAppointmentModal,
    SearchBar,
    FilterGroup,
  },
  props: ["buttons", "chipColors"],
  setup() {
    const appointmentStore = useAppointmentStore();
    const loading = ref([false, false]);
    const selectedItem = ref();
    const current = ref();

    watch(current, async () => {
      appointmentStore.getData(
        "pending",
        appointmentStore.pending.links[current.value].url
      );
    });

    return {
      columns,
      formatDate,
      appointmentStore,
      loading,
      selectedItem,
      current,

      getChip: (status) => {
        return chipColors[status];
      },

      onApprove: async (props) => {
        selectedItem.value = props.row;
        loading.value[0] = true;

        await new Promise((resolve) => setTimeout(resolve, 1000));
        appointmentStore.setRow(props.row);

        await appointmentStore.approve();

        loading.value[0] = false;
      },
      onDecline: async (props) => {
        appointmentStore.setRow(props.row);
      },

      makeCall(props) {
        const phoneNumber = props.row.user.profile[0].contact_number;
        const telLink = `tel:${phoneNumber}`;
        window.location.href = telLink;
      },
      sendEmail(props) {
        const recipientEmail = props.row.user.profile[0].email;
        const mailtoLink = `mailto:${recipientEmail}`;
        window.location.href = mailtoLink;
      },
    };
  },
};
</script>
  