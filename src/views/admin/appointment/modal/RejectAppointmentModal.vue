<template>
  <div class="">
    <q-btn flat label="Reject" color="primary" @click="card = true" />

    <q-dialog v-model="card"  >
      <q-card class="my-card"  style="width: 600px;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Reject Appointment</div>

          
        </q-card-section>

        <q-separator />
        <q-card-section>
            <q-input  type="textarea" outlined v-model="text" label="Reason" />
        </q-card-section>


        <q-card-actions align="right">
          <q-btn v-close-popup  color="red" label="Submit" />
          <q-btn v-close-popup flat color="primary" label="Back" />
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
      card: ref(false),
    };
  },
};
</script>
  