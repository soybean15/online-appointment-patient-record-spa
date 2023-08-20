<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      @click="onClick"
      dense
      color="green"
      size="13px"
      label="Complete"
    >
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
        <strong>Approve</strong>
      </q-tooltip>
    </q-btn>
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
            <div>Date:{{ formattedDate }} </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <CompleteStepper />
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn @click="patientRecordStore.dialog.state = false" flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
  
  <script>
import { ref } from "vue";
import { usePatientRecordStore } from "@/store/patientRecord"; 
import CompleteStepper from "./component/CompleteStepper.vue";
export default {
  components: {
    CompleteStepper,
  },
  props:['props'],
  setup(props) {
    const patientRecordStore = usePatientRecordStore()
    const row = props.props.row
   

 
const parsedDate = new Date(row.updated_at);

const year = parsedDate.getFullYear();
const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
const day = String(parsedDate.getDate()).padStart(2, '0');

const formattedDate = ref(`${year}-${month}-${day}`)


    return {
      patientRecordStore,
       onClick:()=>{
        patientRecordStore.dialog.state = true
        row.date_diagnosed = formattedDate
        patientRecordStore.setData(row)
        
       },
    
       formattedDate
    };
  },
};
</script>
  