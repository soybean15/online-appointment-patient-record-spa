<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Add Services" color="primary" @click="persistent = true" />

    <q-dialog
      v-model="persistent"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-teal text-white" style="width: 500px">
        <q-card-section>
          <div class="text-h6">Services</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-scroll-area   style="height: 300px; max-width: 100%">
          <div v-for="service in userStore.selectedUser.doctor.services_not_available" :key="service.id">
            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox @click="onSelect(service)" v-model="service.selected" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ service.name }}</q-item-label>
                <q-item-label caption>
                  Notify me about updates to apps or games that I downloaded
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </q-scroll-area>
        <q-btn :loading="loading" color="secondary" @click="onClick()" label="Button" />
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useAdminStore } from "@/store/admin";

export default {
  setup() {
    const userStore = useAdminStore().userStore;
    const selectedServices = ref([])
    const loading = ref(false)
    const   persistent= ref(false)

  

    return {
      persistent,
      userStore,
      onSelect(service){
        console.log(service)
        selectedServices.value.push(service)
        console.log(selectedServices.value)
      },
      onClick:async()=>{
        loading.value = true
        await userStore.addServices(selectedServices.value)


        loading.value = false
persistent.value=false

      },
      loading
    };
  },
};
</script>
