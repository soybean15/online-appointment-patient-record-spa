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
      <template v-slot:bottom>
        <q-pagination
          v-model="current"
          color="primary"
          :max="appointmentStore.attended.last_page"
          :max-pages="5"
          boundary-numbers
        />
      </template>

      <template v-slot:top-right>
        <SearchBar
          @onSearch="appointmentStore.searchApproved('approved', $event)"
        />
      </template>

      <template v-slot:top-left>
        <FilterGroup :buttons="buttons" >
          <template v-slot:pop-up>
            <q-btn dense color="brown" label="Date(s)" icon-right="date_range">
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
          <div class="row justify-around">
            <q-btn dense color="green" size="13px" label="Complete">
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <strong>Approve</strong>
              </q-tooltip>
            </q-btn>

            <q-btn dense color="deep-orange-9" size="13px" label="Missed">
              <q-tooltip
                anchor="top middle"
                self="bottom middle"
                :offset="[10, 10]"
              >
                <strong>Missed</strong>
              </q-tooltip>
            </q-btn>
          </div>
          <!-- <div v-else>
         
              <q-chip
                outline
                square
                :color=" chipColors[props.row.done].color"
                text-color="white"
                :icon-right="chipColors[props.row.done].icon"
                :label="props.row.done"
              />
          
         
          
          </div> -->
        </q-td>
      </template>
    </q-table>
  </div>
</template>
  
  <script>
import { useAppointmentStore } from "@/store/adminAppointment";
import { format } from "date-fns";
import { ref } from "vue";

import SearchBar from "@/components/SearchBar.vue";

import FilterGroup from "@/components/FilterGroup.vue";
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
  components: {
    SearchBar,
    FilterGroup,
  },
  setup() {
    const currentDate = ref(format(new Date(), "yyyy/MM/dd"));

    console.log(currentDate.value);

    const dateRange = ref({ from: currentDate.value, to: currentDate.value });
    const appointmentStore = useAppointmentStore();
    return {
      columns,
      appointmentStore,
      currentDate,
      dateRange,
      save: () => {
        console.log("range " + dateRange.value);
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

     buttons :[
      {
        label: "All",
        action: "all",
        icon: "calendar_month",
        onClick: () => {
          console.log("test all");
        },
      },
      {
        label: "Today",
        action: "today",
        icon: "today",
        onClick: () => {
          console.log("test today");
        },
      },
      {
        label: "Missed",
        action: "missed",
        icon: "pending_actions",
        onClick: () => {
          console.log("test missed");
        },
      },
    ]
    };
  },
};
</script>
  