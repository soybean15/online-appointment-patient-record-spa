<template>
  <div class="column">
    <div class="row justify-between mt-2">
      <div class="m-1 p-2 font-semibold bg-surface shadow-md rounded-md">
        {{ formattedDate }}
      </div>
    </div>

    <div class="row">
      <div class="col-7">
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

      <div class="col-7  row bg-surface rounded-md p-3 m-3 shadow-md">
        <div class="col-6 border-r  border-gray-400 column">
          <div class="row justify-center">
            <q-avatar class="self-center" size="70px" color="orange"
              >J</q-avatar
            >
          </div>
          <div class="row justify-center">
            <div class="font-semibold text-lg">{{ fullName }}</div>
          </div>
          <div class="row justify-center items-center">
            <q-icon name="email" size="xs"> </q-icon>
            <span class="ml-1 text-md font-secondary" v-if="authStore.user">{{
              authStore.user.email
            }}</span>
          </div>
          <div class="row mt-5">
            <div class="col-12 row justify-center">
              <div class="text-lg font-semibold">Appointments</div>
            </div>
            <div class="col-5 column items-center">
              <div class="row text-4xl font-bold">1</div>
              <div class="row font-secondary">Upcoming</div>
            </div>
            <div class="col-2 flex justify-center">
              <div class="w-0.5 bg-gray-500 py-3 h-full"></div>
            </div>

            <div class="col-5 column items-center">
              <div class="row text-4xl font-bold">1</div>
              <div class="row font-secondary">Completed</div>
            </div>
          </div>
        </div>

        <div class="col-6 pl-2">
            <div class="row h-20">
                <div class="col-6  ">
                    <div class="row font-secondary">Gender</div>
                    <div class="row">Male</div>
                </div>
                <div class="col-6  ">
                    <div class="row font-secondary">Birthday</div>
                    <div class="row">March 15, 2000</div>
                </div>
            </div>
            <div class="row  h-20">
                <div class="col-6  ">
                    <div class="row font-secondary">Phone Number</div>
                    <div class="row">0923423465</div>
                </div>
                <div class="col-6  ">
                    <div class="row font-secondary">Address</div>
                    <div class="row">Sinasajan Penarada Nueva Ecija</div>
                </div>
            </div>
        </div>
      </div>
      <div class="col-4">
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