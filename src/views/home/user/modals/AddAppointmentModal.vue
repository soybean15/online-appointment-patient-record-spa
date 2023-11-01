<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn round dense color="primary" icon="add" @click="persistent = true" />

    <q-dialog
      v-model="persistent"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="" style="width: 800px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">Create an Appoiment</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-pa-md">
            <q-stepper
              v-model="step"
              header-nav
              ref="stepper"
              color="primary"
              alternative-labels
              animated
            >
              <q-step
                :name="1"
                title="Select Services"
                icon="settings"
                :done="step > 1"
                :header-nav="step > 1"
              >
                <ServiceStep />

                <q-stepper-navigation>
                  <q-btn
                    @click="onNext(2, done1)"
                    color="primary"
                    label="Continue"
                    :disable="!appointmentStore.selectedService"
                  />
                </q-stepper-navigation>
              </q-step>

              <q-step
                :name="2"
                title="Select Doctors"
                icon="create_new_folder"
                :done="step > 2"
                :header-nav="step > 2"
              >
                <DoctorStep />
                <q-stepper-navigation>
                  <q-btn
                    @click="onNext(3, done2)"
                    color="primary"
                    label="Continue"
                    :disable="!appointmentStore.selectedDoctor"
                  />
                  <q-btn
                    flat
                    @click="step = 1"
                    color="primary"
                    label="Back"
                    class="q-ml-sm"
                  />
                </q-stepper-navigation>
              </q-step>

              <q-step
                :name="3"
                title="Select Date"
                icon="create_new_folder"
                :done="step > 3"
                :header-nav="step > 3"
              >
                <DateStep />
                <q-stepper-navigation>
                  <q-btn
                    @click="onNext(4, done3)"
                    color="primary"
                    label="Continue"
                    :disable="!appointmentStore.selectedDoctor"
                  />
                  <q-btn
                    flat
                    @click="step = 2"
                    color="primary"
                    label="Back"
                    class="q-ml-sm"
                  />
                </q-stepper-navigation>
              </q-step>

              <q-step
                :name="4"
                title="Summary"
                icon="add_comment"
                :header-nav="step > 4"
              >
                <SummaryStepVue />

                <q-stepper-navigation>

                  <ConfirmDialog >
                    <template v-slot:button="{ open }">
                     
                  <q-btn
                    color="primary"
                    @click="open"
                    label="Set Appointment"
                  />
                    </template>

                    <template v-slot:title>
                      <div
                        class="flex justify-center px-3 q-py-lg text-h6 text-bold"
                      >
                        Create appointment
                      </div>
                    </template>
                    <template v-slot:prompt>
                      <div class="pb-5 px-3 flex text-h7" align="center">
                        You are about to confirm the appointment. Please note that if you need to reschedule, you must contact the admin to make the necessary arrangements. Are you ready to proceed?"
                      </div>
                    </template>

                    <template v-slot:actions="{ close }">
                      <div class="row justify-evenly q-mb-md">
                        <div>
                          <q-btn :loading="appointmentStore.loading" @click="onClick(close)" color="secondary" label="Confirm" />
                        </div>
                        <div>
                          <q-btn @click="close" color="red" label="Cancel" />
                        </div>
                      </div>
                    </template>
                  </ConfirmDialog>

                  <q-btn
                    flat
                    @click="step = 3"
                    color="primary"
                    label="Back"
                    class="q-ml-sm"
                  />
                </q-stepper-navigation>
              </q-step>
            </q-stepper>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
  
  <script>
import { onMounted, ref } from "vue";
import ServiceStep from "./appointment/ServiceStep.vue";
import { useAppointmentStore } from "@/store/userAppointment";
import DoctorStep from "./appointment/DoctorStep.vue";
import DateStep from "./appointment/DateStep.vue";
import SummaryStepVue from "./appointment/SummaryStep.vue";
import ConfirmDialog from "@/components/ConfirmDialog.vue";
export default {
  components: {
    ServiceStep,
    DoctorStep,
    DateStep,
    SummaryStepVue,
    ConfirmDialog
  },
  setup() {
    const appointmentStore = useAppointmentStore();
    const step = ref(1);
    const persistent= ref(false)

   
    
    return {
      persistent,
      step,
      onNext: (newStep, done) => {
        done = true;
        step.value = newStep;
      },
      appointmentStore,
      onClick:async(close)=>{

        await appointmentStore.setAppointment() 
        close()
        persistent.value = false
        step.value= 1
        appointmentStore.clearData()
      }
    };
  },
};
</script>
  