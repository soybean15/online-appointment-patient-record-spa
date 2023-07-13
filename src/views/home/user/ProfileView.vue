<template>
  <div class="column">
    <div class="row justify-between mt-2">
      <div class="m-1 p-2 font-semibold bg-surface shadow-md rounded-md">
        {{ formattedDate }}
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="row items-center justify-between">
          <div class="row items-center">
            <div class="m-2 mr-1 font-bold text-base text-blue-400" color="">
              Profile
            </div>
            <div class="mr-1 text-2xl">></div>
            <div class="text-base">{{ fullName }}</div>
          </div>

          <div>
            <q-btn color="primary" icon="edit" label="Edit" />
          </div>
        </div>
      </div>

      <div class="col-6 bg-surface rounded-md shadow-sm p-3 m-3">
        <div class="row justify-center">
          <q-avatar class="self-center" size="100px" color="orange">J</q-avatar>
        </div>
        <div class="row justify-center">
          <div class="font-semibold text-lg">{{ fullName }}</div>
        </div>
      </div>
      <div class="col-5">
        .col-5<br />Subsequent columns continue along the new line.
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/store/auth";
import { computed, onMounted } from "vue";
import { format } from "date-fns";

export default {
  setup() {
    const authStore = useAuthStore();
    onMounted(() => {
      authStore.getUser();
    });

    return {
      authStore,
      formattedDate: computed(() => {
        const date = new Date();
        return format(date, "h:mm a d MMM yyyy");
      }),
      fullName: computed(() => {
        if (authStore.user) {
          return `${authStore.user.profile[0].firstname} ${authStore.user.profile[0].lastname}`;
        }
        return "Undefined";
      }),
    };
  },
};
</script>


<style lang="scss">
</style>