<template>
  <div class="column">
    <SearchView />

    <div class="row items-start q-gutter-md">
      <q-responsive :ratio="16/9" class="col w-full">
        <UserTable/>
      </q-responsive>

      <q-responsive :ratio="1"  class="col w-40">
        <div class="rounded-borders bg-primary text-white flex flex-center">
          PAtient Records
        </div>
      </q-responsive>
  
  </div>
  </div>
</template>

<script>
import UserTable from "./components/UserTable.vue";
import SearchView from "./components/SearchView.vue";
export default {
  components: {
    UserTable,
    SearchView,
  },
};
</script>


<style>
</style>