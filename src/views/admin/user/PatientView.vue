<template>
  <div class="column">
    <SearchView />

    <div class="row ">
      <div class="col-5">
        <UserTable />
      </div>

      <div class="col-7 py-3">
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