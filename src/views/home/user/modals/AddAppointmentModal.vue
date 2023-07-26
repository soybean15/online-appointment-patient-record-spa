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
                    label="Let's Start"
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
                <q-stepper-navigation>
                  <q-btn
                    @click="
                       onNext(3,done2)
                    "
                    color="primary"
                    label="Continue"
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
                title="Create an ad"
                icon="add_comment"
                :header-nav="step > 3"
              >
                Try out different ad text to see what brings in the most
                customers, and learn how to enhance your ads using features like
                ad extensions. If you run into any problems with your ads, find
                out how to tell if they're running and how to resolve approval
                issues.

                <q-stepper-navigation>
                  <q-btn color="primary" @click="done3 = true" label="Finish" />
                  <q-btn
                    flat
                    @click="step = 2"
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
export default {
  components: {
    ServiceStep,
  },
  setup() {
    const appointmentStore = useAppointmentStore();
    const  step= ref(1)

    onMounted(() => {
      appointmentStore.index();
      
    });
    return {
      persistent: ref(false),
     step,
     onNext:(newStep,done)=>{
      done=true
      step.value=newStep
    }
    };
    
  },
};
</script>
  