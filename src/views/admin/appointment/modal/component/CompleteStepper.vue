<template>
    <div class="q-pa-md">
      <q-stepper
        v-model="step"
        ref="stepper"
      
        animated
       
        alternative-labels
      >
        <q-step
          :name="1"
          title="Patient details"
          icon="settings"
          :done="step > 1"
        >
        patient name [label]
        birth date[label]
        age[label]
        address[label]

        height[input]
        weight[input]         
        blood_type
        blood_pressure

        
        </q-step>
  
        <q-step
          :name="2"
          title="Diagnosis and recommendation"
          caption="Optional"
          icon="create_new_folder"
          :done="step > 2"
        >

        Diagnosis and recommendation
        </q-step>
  
     
        <q-step
          :name="4"
          title="Summary"
          icon="add_comment"
        >
         Summary then complete
        </q-step>
  
        <template v-slot:navigation>
          <q-stepper-navigation>
            <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" />
            <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup () {
      return {
        step: ref(1)
      }
    }
  }
  </script>
  