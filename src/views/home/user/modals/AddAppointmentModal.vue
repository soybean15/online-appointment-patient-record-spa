<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn round dense color="primary" icon="add" @click="persistent = true" />

    <q-dialog
      v-model="persistent"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class=" text-white" style="width:800px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Create Appoiment</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-pa-md">
            <q-btn
              label="Reset"
              push
              color="white"
              text-color="primary"
              @click="step = 1"
              class="q-mb-md"
            />

            <q-stepper
              v-model="step"
              header-nav
              ref="stepper"
              color="primary"
              animated
            >
              <q-step
                :name="1"
                title="Select Service"
                icon="settings"
                :done="step > 1"
                :header-nav="step > 1"
              >
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which
                networks and geographical locations you want your ads to show
                on, and more.

                <q-stepper-navigation>
                  <q-btn
                    @click="
                      () => {
                        done1 = true;
                        step = 2;
                      }
                    "
                    color="primary"
                    label="Continue"
                  />
                </q-stepper-navigation>
              </q-step>

              <q-step
                :name="2"
                title="Select Doctor"
                caption="Optional"
                icon="create_new_folder"
                :done="step > 2"
                :header-nav="step > 2"
              >
                An ad group contains one or more ads which target a shared set
                of keywords.

                <q-stepper-navigation>
                  <q-btn
                    @click="
                      () => {
                        done2 = true;
                        step = 3;
                      }
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
                title="Select Date of appoinment"
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
import { ref } from "vue";

export default {
  setup() {
    return {
      persistent: ref(true),
      step: ref(1)
    };
  },
};
</script>
  