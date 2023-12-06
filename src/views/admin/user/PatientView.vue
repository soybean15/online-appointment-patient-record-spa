<template>
  <div class="column">
    <SearchView />

    <div class="row justify-center">
      <div class="col-lg-5 col-sm-12">
        <UserTable />
      </div>

      <div class="col-lg-7 col-sm-12 p-3">
        <patient-records />
      </div>
    </div>
  </div>
</template>

<script>
import UserTable from "./components/UserTable.vue";
import SearchView from "./components/SearchView.vue";
import PatientRecords from "@/views/admin/user/components/PatientRecords.vue";
export default {
  components: {
    UserTable,
    SearchView,
    PatientRecords,
  },
};
</script>


<style>
</style>