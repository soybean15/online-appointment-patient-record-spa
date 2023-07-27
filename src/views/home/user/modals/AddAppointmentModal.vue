<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn round dense color="primary" icon="add" @click="persistent = true" />

    <q-dialog
      v-model="persistent"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="text-white" style="width: 800px; max-width: 80vw">
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
                    @click="
                      onNext(2,done1)
                    "
                    color="primary"
                    label="Continue"
                    :disable ='!appointmentStore.selectedService'
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

              <DoctorStep/>
                <q-stepper-navigation>
                  <q-btn
                    @click="
                       onNext(3,done2)
                    "
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

              <DateStep/>
                <q-stepper-navigation>
                  <q-btn
                    @click="
                       onNext(4,done3)
                    "
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
                <SummaryStepVue/>

                <q-stepper-navigation>
                  <q-btn color="primary" @click="done3 = true" label="Set Appointment" />
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
import { useAppointmentStore } from "@/store/appointment";
import DoctorStep from "./appointment/DoctorStep.vue";
import DateStep from './appointment/DateStep.vue';
import SummaryStepVue from './appointment/SummaryStep.vue';
export default {
  components: {
    ServiceStep,
    DoctorStep,
    DateStep,
    SummaryStepVue
  },
  setup() {
    const appointmentStore = useAppointmentStore();
    const  step= ref(1)

    console.log(appointmentStore.selectedService)
    onMounted(() => {
      appointmentStore.index();
      
    });
    return {
      persistent: ref(false),
     step,
     onNext:(newStep,done)=>{
      done=true
      step.value=newStep
    },
    appointmentStore
    };
    
  },
};
</script>
  