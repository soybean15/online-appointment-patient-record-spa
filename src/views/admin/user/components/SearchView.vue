<template>
  <div class="row m-3 justify-between items-center">
    <q-input outlined v-model="text" label="Search" 
    @keydown.enter.prevent="submit"
    v-model.trim="key" dense>
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>

    <div class="bg-surface m-1 p-2 rounded-md">{{ adminStore.currentTime }}</div>
  </div>
</template>

<script>
import { useAdminStore } from "@/store/admin";
import { ref } from 'vue';
export default {
  setup() {
    const adminStore = useAdminStore()
    const userStore = adminStore.userStore
    const key = ref('')
    return {
      adminStore: useAdminStore(),
      submit:async()=>{
        await userStore.getPatients(null,key.value)
        key.value = ''

      },key
    };
  },
};
</script>

<style>
</style>