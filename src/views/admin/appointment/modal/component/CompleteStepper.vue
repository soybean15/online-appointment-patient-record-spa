<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" ref="stepper" animated alternative-labels>
      <q-step
        :name="1"
        title="Patient details"
        icon="settings"
        :done="step > 1"
      >
        <q-card>
          <q-card-section>
            <div class="text-md">Patient Details</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section class="row">
            <div class="col-6 q-pr-xl q-pl-sm">
              <div class="col mx-2 border-b border-gray-500">
                <div class="row font-secondary py-1">Patient name:</div>
                <div class="row text-sm">
                  {{ patientRecordStore.selectedRow.user.profile[0].full_name }}
                </div>
              </div>
              <div class="col mx-2 my-4 border-b border-gray-500">
                <div class="text-md font-secondary">Birth Date:</div>
                <div>
                  {{ patientRecordStore.selectedRow.user.profile[0].birthdate }}
                </div>
              </div>

              <div class="col">
                <div class="text-md font-secondary">
                  <q-input
                    filled
                    v-model="patientRecordStore.patientRecord.blood_type"
                    label="Blood Type"
                    stack-label
                    dense
                  />
                </div>
              </div>

              <div class="col q-py-sm">
                <div class="font-semibold text-lg font-secondary">
                  <q-input
                    filled
                    v-model="patientRecordStore.patientRecord.weight"
                    label="Weight"
                    stack-label
                    dense
                  />
                </div>
              </div>
            </div>

            <div class="col-6">
              <div class="col mx-2 border-b border-gray-500">
                <div class="text-md font-secondary py-1">Age:</div>
                <div>20</div>
              </div>
              <div class="col mx-2 my-4 border-b border-gray-500">
                <div class="text-md font-secondary">Address:</div>
                <div>Callos</div>
              </div>

              <div class="col">
                <div class="font-semibold text-lg font-secondary">
                  <q-input
                    filled
                    label="Blood Pressure"
                    v-model="patientRecordStore.patientRecord.blood_pressure"
                    stack-label
                    dense
                    class=""
                  />
                </div>
              </div>
              <div class="col q-py-sm">
                <div class="font-semibold text-lg font-secondary">
                  <q-input
                    filled
                    label="Height"
                    v-model="patientRecordStore.patientRecord.height"
                    stack-label
                    dense
                    class=""
                  />
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-step>

      <q-step
        :name="2"
        title="Diagnosis and Recommendation"
        caption="(Optional)"
        icon="create_new_folder"
        :done="step > 2"
      >
        <div class="col-12">
          <div class="q-px-sm">
            <div class="q-pa-md">
              <!-- <div class="text-md text-bold">Diagnosis</div> -->

              <RecommendationAndDiagnosisStep />
            </div>
          </div>
        </div>
      </q-step>

      <q-step :name="4" title="Summary" icon="add_comment">
        <div class="col-12">
          <q-card>
            <q-card-section>
              <div class="text-md text-bold">Patient Details</div>
            </q-card-section>

            <q-separator dark inset />

            <q-card-section class="row">
              <div class="col-6">
                <div class="">
                  <div class="text-md font-secondary">Patient name:</div>
                  <div>
                    {{
                      patientRecordStore.selectedRow.user.profile[0].full_name
                    }}
                  </div>
                </div>
                <div class="">
                  <div class="text-md font-secondary">Birth Date:</div>
                  <div>
                    {{
                      patientRecordStore.selectedRow.user.profile[0].birthdate
                    }}
                  </div>
                </div>
                <div class="">
                  <div class="text-md font-secondary">Age:</div>
                  <div>
                    {{ patientRecordStore.selectedRow.user.profile[0].age }}
                  </div>
                </div>
                <div class="">
                  <div class="text-md font-secondary">Address:</div>
                  <div>
                    {{ patientRecordStore.selectedRow.user.profile[0].address }}
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div class="">
                  <div class="text-md font-secondary">Height:</div>
                  <div>
                    {{
                      `${
                        patientRecordStore.patientRecord.height == null
                          ? "N/A"
                          : patientRecordStore.patientRecord.height
                      }`
                    }}
                  </div>
                </div>
                <div class="">
                  <div class="text-md font-secondary">Weight:</div>
                  <div>
                    {{
                      `${
                        patientRecordStore.patientRecord.weight == null
                          ? "N/A"
                          : patientRecordStore.patientRecord.weight
                      }`
                    }}
                  </div>
                </div>

                <div class="">
                  <div class="text-md font-secondary">Blood Pressure:</div>
                  <div>
                    {{
                      `${
                        patientRecordStore.patientRecord.blood_pressure == null
                          ? "N/A"
                          : patientRecordStore.patientRecord.blood_pressure
                      }`
                    }}
                  </div>
                </div>
                <div class="">
                  <div class="text-md font-secondary">Blood Type:</div>
                  <div>
                    {{
                      `${
                        patientRecordStore.patientRecord.blood_type == null
                          ? "N/A"
                          : patientRecordStore.patientRecord.blood_type
                      }`
                    }}
                  </div>
                </div>
              </div>
            </q-card-section>

            <div class="row q-px-sm">
              <div class="col-12">
                <div class="q-py-sm">
                  <q-card>
                    <q-card-section>
                      <div class="row text-md text-bold">Diagnosis</div>

                      <q-list
                        v-for="(item, index) in patientRecordStore.patientRecord
                          .diagnosis"
                        :key="index"
                      >
                        <div class="row items-center">
                          <span class="text-3xl mr-2">{{ `\u2022` }}</span>
                          {{ `${item}` }}
                        </div>
                      </q-list>

                      <div class="text-md text-bold">Recommendation(s)</div>
                      <q-list
                        v-for="(item, index) in patientRecordStore.patientRecord
                          .recommendation"
                        :key="index"
                      >
                        <div class="row items-center">
                          <span class="text-3xl mr-2">{{ `\u2022` }}</span>
                          {{ `${item}` }}
                        </div>
                      </q-list>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
          </q-card>
        </div>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
          @click="step === 4 ? (onFinish(), $refs.stepper.next()) : $refs.stepper.next()"

            color="primary"
            :label="step === 4 ? 'Finish' : 'Continue'"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>
  
  <script>
import { ref } from "vue";
import RecommendationAndDiagnosisStep from "./RecommendationAndDiagnosisStep.vue";
import { usePatientRecordStore } from "@/store/patientRecord";

export default {
  components: {
    RecommendationAndDiagnosisStep,
  },
  setup() {
    const patientRecordStore = usePatientRecordStore();

    return {
      step: ref(1),
      patientRecordStore,
      onFinish:()=>{
        patientRecordStore.addRecord()
      }
    };
  },
};
</script>
  