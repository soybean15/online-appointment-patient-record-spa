<template>
  <div class="p-3">
    <div class="column py-2">
      <div class="text-2xl font-semibold">Welcome back, {{ authStore.user.profile[0].firstname }}</div>
      <div class="font-secondary text-sm">Here's what happening today</div>
    </div>

    <div class="row">
      <Stat class="mr-1"
        :title="{name:'Users',icon:'group'}"
        value="20,000"
      ></Stat>
      <Stat class="mr-1"
        :title="{name:'Total Patients',icon:'personal_injury'}"
        value="46"
      ></Stat>
      <Stat class="mr-1"
        :title="{name:'Today\'s Appointment',icon:'personal_injury'}"
        value="46"
      ></Stat>
      <!-- <Stat></Stat>
      <Stat></Stat>
      <Stat></Stat> -->
    </div>
  </div>
</template>

<script>
import Stat from "@/components/Stat.vue";
import { useAuthStore } from "@/store/auth";
export default {
  components: {
    Stat,
  },

  setup() {
    const authStore = useAuthStore();

    return { authStore };
  },
};
</script>

<style>
</style>