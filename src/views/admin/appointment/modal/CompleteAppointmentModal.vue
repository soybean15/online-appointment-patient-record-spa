<template>
  <div class="">



    <slot name="open" :open="open"> </slot>
    <q-dialog
      v-model="patientRecordStore.dialog.state"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="" style="width: 800px; max-width: 90vw">
        <q-card-section>
          <div class="text-h6 row justify-between">
            <div>Complete Appointment</div>
            <div>Date:{{ formattedDate }}</div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <CompleteStepper :action="action " :hasAppointment="hasAppointment"/>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn
            @click="patientRecordStore.dialog.state = false"
            flat
            color="primary"
            label="Close"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
  
  <script>
import { onMounted, ref } from "vue";
import { usePatientRecordStore } from "@/store/patientRecord";
import {useServiceStore} from '@/store/service'
import CompleteStepper from "./component/CompleteStepper.vue";
export default {
  components: {
    CompleteStepper,
  },
  props: ["row","action","hasAppointment"],
  setup(props) {
    const patientRecordStore = usePatientRecordStore();
    const serviceStore = useServiceStore()
    const row = props.row;

    const parsedDate = new Date(row.updated_at);

    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
    const day = String(parsedDate.getDate()).padStart(2, "0");

    const formattedDate = ref(`${year}-${month}-${day}`);


    onMounted(()=>{
      serviceStore.getActiveServices()
    })
    return {
      patientRecordStore,
      open: () => {
        patientRecordStore.dialog.state = true;
        row.date_diagnosed = formattedDate;
        patientRecordStore.setData(row,props.hasAppointment);
      },
      serviceStore,

      formattedDate,
    };
  },
};
</script>
  