<template>
  <div class="column">
    <div>
      <div>Diagnosis</div>
      <q-list class="px-5 pt-2 pb-0"  >
        <q-item v-for="(item, index) in patientRecordStore.patientRecord.diagnosis" :key="index">
         
            <div class="row items-center"> <span class="text-3xl mr-2">{{`\u2022`}}</span>
            {{ `${item}` }}</div>
            
         
        </q-item>
        <q-input
          outlined
          bottom-slots
          v-model="d_text"
          label="Diagnosis"
          @keyup.enter="onSend('diagnosis')"
          dense
        >
          <template v-slot:before>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </template>

          <template v-slot:append>
            <q-icon
              v-if="d_text !== ''"
              name="close"
              @click="d_text = ''"
              class="cursor-pointer"
            />
          </template>

          <template v-slot:after>
            <q-btn @click="onSend('diagnosis')" round dense flat icon="add" />
          </template>
        </q-input>
      </q-list>
    </div>



    <div>
      <div>Recommendation</div>
      <q-list class="px-5 pt-2 pb-0" >
        <q-item v-for="(item, index) in patientRecordStore.patientRecord.recommendation" :key="index">
         
            <div class="row items-center"> <span class="text-3xl mr-2">{{`\u2022`}}</span>
            {{ `${item}` }}</div>
            
         
        </q-item>
        <q-input
          outlined
          bottom-slots
          v-model="r_text"
          label="Recommendation"
          @keyup.enter="onSend('recommendation')"
          dense
        >
          <template v-slot:before>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </template>

          <template v-slot:append>
            <q-icon
              v-if="r_text !== ''"
              name="close"
              @click="r_text = ''"
              class="cursor-pointer"
            />
          </template>

          <template v-slot:after>
            <q-btn @click="onSend('recommendation')" round dense flat icon="add" />
          </template>
        </q-input>
      </q-list>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {usePatientRecordStore} from '@/store/patientRecord'
export default {
  setup() {
    const diagnosis = ref([]);
    const recommendation = ref([])
    const d_text = ref("");
    const r_text = ref("");

    const patientRecordStore = usePatientRecordStore()


    return {
   
        patientRecordStore,
     
      d_text,
      r_text,
      onSend: (action) => {
        if (action === "diagnosis") {
            patientRecordStore.patientRecord.diagnosis.push(d_text.value);
          d_text.value = "";
        } else {
            patientRecordStore.patientRecord.recommendation.push(r_text.value)
            r_text.value =''
        }
      },
    };
  },
};
</script>

<style>
</style>