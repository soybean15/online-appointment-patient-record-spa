<template>
    <div class="row"><AddDoctorDialog /></div>
  <div class="row">
    <div class="col-5 column">
      
      <DoctorsTable />
    </div>

    <div class="col-7">
        <DoctorInfo/>
    </div>
  </div>
</template>

<script>
import DoctorsTable from "./components/DoctorsTable.vue";
import AddDoctorDialog from "./dialog/AddDoctorDialog.vue";
import DoctorInfo from "./components/DoctorInfo.vue";
import { useAdminStore } from "@/store/admin";
import { onMounted } from "vue";
export default {
  components: {
    DoctorsTable,
    AddDoctorDialog,
    DoctorInfo
  },
  setup() {
    const userStore = useAdminStore().userStore;

    onMounted(() => {
      userStore.getDoctors();
    });
  },
};
</script>

<style>
</style>