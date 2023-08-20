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
      v-model="persistent"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="" style="width: 800px; max-width: 90vw">
        <q-card-section>
          <div class="text-h6">Complete Appointment</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <CompleteStepper />
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
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
    const persistent= ref(false)
    return {
      persistent,
       onClick:()=>{
        persistent.value = true
        patientRecordStore.setData(props.props.row)
        
       }
    };
  },
};
</script>
  