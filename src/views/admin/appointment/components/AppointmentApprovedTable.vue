<template>
  <div>
    <q-table
      card-class="text-brown"
      table-class="text-grey-8"
      table-header-class="text-brown"
      flat
      bordered
      :rows="appointmentStore.approved.data"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
    >
      <template v-slot:bottom>
        <q-pagination
          v-model="current"
          color="white"
          active-color="white"
          :active-text-color="$primary"
          :max="appointmentStore.approved.last_page"
          :max-pages="5"
          boundary-numbers
        />
      </template>

      <template v-slot:top-right>
        <SearchBar @onSearch="appointmentStore.search('approved', $event)" />
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
            {{ formatDate(props.row.schedule_date, "MMM D YYYY") }}
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

      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <!-- <div class="row justify-around" v-if="!selectedItem.done || selectedItem != props.row" > -->
          <div class="row justify-around">
            <CompleteAppointmentModal :row="props.row" :action="'online'">
              <template v-slot:open="{ open }">
                <q-btn
                  @click="open"
                  dense
                  color="green"
                  size="13px"
                  label="Complete"
                >
                  <q-tooltip
                    anchor="top middle"
                    self="bottom middle"
                    :offset="[10, 10]"
                  >
                    <strong>Approve</strong>
                  </q-tooltip>
                </q-btn>
              </template>
            </CompleteAppointmentModal>
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>
  
  <script>
import { useAppointmentStore } from "@/store/adminAppointment";
import { format } from "date-fns";
import { ref, watch } from "vue";
import CompleteAppointmentModal from "../modal/CompleteAppointmentModal.vue";
import SearchBar from "@/components/SearchBar.vue";

import FilterGroup from "@/components/FilterGroup.vue";
import formatDate from "@/composables/dateFormat";
const columns = [
  // {
  //   name: "ref_id",
  //   required: true,
  //   label: "Reference No.",
  //   align: "left",
  //   field: (row) => row.reference_id,
  //   format: (val) => `${val}`,
  // },
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
    name: "status",
    required: true,
    label: "Status",
    align: "center",
  },
];

export default {
  components: {
    SearchBar,
    FilterGroup,
    CompleteAppointmentModal,
  },

  props: ["buttons", "chipColors"],
  setup() {
    const current = ref();

    watch(current, () => {
      appointmentStore.getData(
        "approved",
        appointmentStore.approved.links[current.value].url
      );
    });

    const currentDate = ref(format(new Date(), "yyyy/MM/dd"));

    console.log(currentDate.value);

    const dateRange = ref({ from: currentDate.value, to: currentDate.value });
    const appointmentStore = useAppointmentStore();
    return {
      columns,
      formatDate,
      appointmentStore,
      currentDate,
      current,
      dateRange,
      save: () => {
        appointmentStore.getApprovedByRange(dateRange.value);
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
      onSearch: (text) => {
        console.log(text);
      },
    };
  },
};
</script>
  