<template>
    <div class="row"><AddDoctorDialog /></div>
  <div class="row justify-center">
    <div class="col-lg-5 col-md-6 col-sm-12 ">
      
      <DoctorsTable />
    </div>

    <div class="col-lg-7 col-md-6 col-sm-12 q-px-md">
        <DoctorInfo/>
    </div>
  </div>
</template>

<script>
import DoctorsTable from "./components/DoctorsTable.vue";
import AddDoctorDialog from "./dialog/AddDoctorDialog.vue";
import DoctorInfo from "./components/DoctorInfo.vue";
import {useDoctorStore} from '@/store/doctor'
import { onMounted } from "vue";

export default {
  components: {
    DoctorsTable,
    AddDoctorDialog,
    DoctorInfo
  },
  setup() {

    const doctorStore = useDoctorStore()



    onMounted(() => {
     // userStore.getDoctors();
     doctorStore.getDoctors()
    });
  },
};
</script>

<style>
</style>