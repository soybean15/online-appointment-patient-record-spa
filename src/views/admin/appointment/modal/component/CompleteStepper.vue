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
        <!-- patient name [label]
        birth date[label]
        age[label]
        address[label]

        height[input]
        weight[input]         
        blood_type
        blood_pressure -->
          <q-card>
              <q-card-section>
            <div class="text-h6">Patient Details</div>
              </q-card-section>

              <q-separator dark inset />

              <q-card-section class="row">
                <div class="col-6">
                  <div class="col">
                    <div class=" text-md font-secondary">Patient name: </div>
                    <div>Jean</div>
                  </div>
                  <div class="col">
                    <div class=" text-md font-secondary">Birth Date:</div>
                    <div >09/58/20</div>
                  </div>
                  <div class="col">
                    <div class=" text-md font-secondary">Age: </div>
                    <div>20</div>
                  </div>
                  <div class="col">
                    <div class=" text-md font-secondary">Address:</div>
                    <div>Callos</div>
                  </div>
                  <div class="col">
                    <div class=" text-md font-secondary">Blood Type:</div>
                    <div>AB</div>
                  </div>
                </div>

                <div class="column-6">
                  <div class="col">
                    <div class=" font-semibold text-lg font-secondary">  
                      <q-input  v-model="text" label="Height" stack-label :dense="dense" />
                    </div>
                  </div>
                  <div class="col">
                    <div class="font-semibold text-lg font-secondary">
                      <q-input label="Weight" v-model="text" stack-label :dense="dense" class=""/>
                    </div>
                
                  </div>
                  <div class="col">
                    <div class="font-semibold text-lg font-secondary">
                      <q-input label="Blood Pressure" v-model="text" stack-label :dense="dense" class=""/>
                  </div>
                  
                  </div>
                
                </div>



              </q-card-section>
          </q-card>

        
        </q-step>
  
        <q-step
          :name="2"
          title="Diagnosis and recommendation"
          caption="Optional"
          icon="create_new_folder"
          :done="step > 2"
        >

        <div class="row">
          <div class="col-6 q-px-sm">
            <q-card>
              <q-card-section>
                <div class="text-md text-bold">Diagnosis</div>
              </q-card-section>
                <div class="q-pa-md">
                  <q-input
                    v-model="text"
                    autogrow            
                    type="textarea"
                  />
                </div>
            </q-card>
          </div>
          <div class="col-6 q-px-sm">
            <q-card>
              <q-card-section>
                <div class="text-md text-bold">Recommendation</div>
              </q-card-section>
                <div class="q-pa-md">
                  <q-input
                    v-model="text"
                    autogrow
                    type="textarea"
                  />
                </div>
            </q-card>
          </div>
        </div>
        </q-step>
  
     
        <q-step
          :name="4"
          title="Summary"
          icon="add_comment"
        >

         
              <div class="row q-pa-sm">
                <div class="col-12">
                  <q-card>
                      <q-card-section>
                    <div class="text-h6">Patient Details</div>
                      </q-card-section>

                      <q-separator dark inset />

                      <q-card-section class="row">
                        <div class="col-6">
                          <div class="">
                            <div class=" text-md font-secondary">Patient name: </div>
                            <div>Jean</div>
                          </div>
                          <div class="">
                            <div class=" text-md font-secondary">Birth Date:</div>
                            <div >09/58/20</div>
                          </div>
                          <div class="">
                            <div class=" text-md font-secondary">Age: </div>
                            <div>20</div>
                          </div>
                          <div class="">
                            <div class=" text-md font-secondary">Address:</div>
                            <div>Callos</div>
                          </div>
                      
                        </div>

                        <div class="col-6">
                          <div class="">
                            <div class=" text-md font-secondary">Height:</div>
                            <div>AB</div>
                          </div>
                          <div class="">
                            <div class=" text-md font-secondary">Weight:</div>
                            <div>AB</div>
                          </div>

                          <div class="">
                            <div class=" text-md font-secondary">Blood Pressure:</div>
                            <div>AB</div>
                          </div>
                          <div class="">
                            <div class=" text-md font-secondary">Blood Type:</div>
                            <div>AB</div>
                          </div>
                          
                        
                        </div>



                      </q-card-section>
                  </q-card>
                 </div>
              </div>
              <div class="row">
                <div class="col-6 q-px-sm">
                  <q-card>
                    <q-card-section>
                      <div class="text-md text-bold">Diagnosis</div>
                    </q-card-section>
                      <div class="q-pa-md">
                         /////Diagnosis
                      </div>
                  </q-card>
                </div>
                <div class="col-6 q-px-sm">
                  <q-card>
                    <q-card-section>
                      <div class="text-md text-bold">Recommendation</div>
                    </q-card-section>
                      <div class="q-pa-md">
                         ///Recommendation
                      </div>
                  </q-card>
                </div>
              
            </div>
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
  