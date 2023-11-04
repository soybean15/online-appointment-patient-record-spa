<template>
  <div class="py-1">
    <div>For Walk In</div>
    <div class="row w-full my-2">
      <div class="col-6 pr-1">
        <q-select
          class="col-6"
          outlined
          v-model="serviceModel"
          dense
          :options="mapServices(serviceStore.activeServices)"
          label="Services"
          @update:model-value="onSelectService"
          v-if="serviceStore.activeServices"
        />
      </div>

      <div class="col-6 px-1">
        <q-select
          outlined
          v-model="doctorModel"
          dense
          :options="doctors"
          label="Doctors"
          @update:model-value="onSelectDoctor"
          v-if="serviceStore.activeServices"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useServiceStore } from "@/store/service";
import {usePatientRecordStore} from '@/store/patientRecord'
import { ref } from "vue";

const mapServices = (item) => {
  const items = [];

  item.map((element) => {
    items.push({
      label: element.name,
      value: element.id,
      doctors: element.doctors,
    });
  });

  return items;
};

const mapDoctors = (doctors) => {
  const items = [];

  doctors.map((element) => {
    items.push({
      label: element.full_name,
      value: element.id,
    });
  });

  return items;
};
export default {
  setup() {
    const serviceStore = useServiceStore();
    const patientRecord = usePatientRecordStore()
     const doctorModel = ref(null);
    const serviceModel = ref(null);
    const doctors = ref(null);

    return {
      serviceStore,
      mapServices,
      serviceModel,
      doctorModel,
      doctors,
      onSelectService: (service) => {
       
        doctors.value = mapDoctors(service.doctors);
        patientRecord.setService(service.value)
    
      },
      onSelectDoctor:(doctor)=>{
        patientRecord.setDoctor(doctor.value)
      }
    };
  },
};
</script>

<style>
</style>