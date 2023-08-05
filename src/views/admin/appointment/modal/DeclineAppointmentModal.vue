<template>
  <span class="">
    <!-- :loading="loading[1] && selectedItem == props.row" -->
    <q-btn
      dense
      color="red"
      size="13px"
      @click="onDecline"
      icon-right="cancel"
    
    >
    <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
          <strong>Decline</strong> 
       
        </q-tooltip>
  
  </q-btn>

    <q-dialog v-model="dialog" persistent>
      <q-card class="my-card" style="width: 400px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Decline Appointment</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="items-center">
          <div>Select Action:</div>
          <q-option-group :options="options" type="radio" v-model="group" />

          <div v-if="group == 1">
            <q-input v-model="remarks" outlined type="textarea" label="Reason" />
          </div>
          <div v-else>
            <q-input
              outlined
              v-model="schedule"
              mask="date"
              label="Select new Schedule"
              :rules="['date']"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="schedule">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn @click="onSubmit" :loading="loading" outline style="color: goldenrod" label="Submit" />
          <q-btn flat style="color: goldenrod" label="Cancel" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </span>
</template>
  
  <script>
import { ref, watch } from "vue";
import { useAppointmentStore } from "@/store/adminAppointment";
import { format } from "date-fns";
export default {
  components: {},
  props: ["schedule"],
  emits: ["onDecline"],
  setup(props, { emit }) {
    const dialog = ref(false);
    const group = ref(1);

    const appointmentStore = useAppointmentStore();
    const schedule = ref();
    const remarks = ref('')

    const loading = ref(false)

    console.log(props.schedule);

    watch(schedule, () => {
      console.log('schedule updated');
    });


    return {
        loading,
      schedule,
      dialog,
      group,
      remarks,
      options: [
        { label: "Reject", value: 1, color: "red" },
        { label: "Reschedule", value: 2, color: "green" },
      ],
      onDecline: () => {
        dialog.value = true;
        emit("onDecline");

        schedule.value = appointmentStore.selectedRow.schedule_date;
      },
      onSubmit :async ()=>{
        loading.value= true

        await new Promise((resolve) => setTimeout(resolve, 1000));
        if(group.value===1){
           await appointmentStore.reject(remarks.value)

        }else{
         await     appointmentStore.reschedule(schedule.value)
        }

        loading.value= false
        dialog.value = false;
       
      }
    };
  },
};
</script>
  