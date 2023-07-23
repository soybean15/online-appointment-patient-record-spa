<template>
  <div>
    <div
      class="column p-5 my-4 bg-surface rounded-lg"
      v-if="userStore.selectedUser"
    >
      <div class="row">
        <q-avatar size="100px" class="col self-center">
          <img :src="userStore.selectedUser.profile[0].image" />
        </q-avatar>
      </div>

      <div class="column">
        <div class="row self-center text-2xl">{{ fullname }}</div>
        <div class="row self-center text-lg font-secondary">
          {{ userStore.selectedUser.doctor.specialty }}
        </div>
        <div class="row self-center text-md">
          {{ userStore.selectedUser.profile[0].contact_number }}
        </div>
        <div class="row self-center text-md">
          {{ userStore.selectedUser.email }}
        </div>

        <div class="row">
          <q-expansion-item
            expand-separator
            icon="medical_services"
            label="Service Offered"
            class="w-full"
          >
            <q-card>
              <q-card-section>
                <q-list bordered>
                  <q-item
                    clickable
                    v-ripple
                    v-for="service in userStore.selectedUser.doctor.services"
                    :key="service.id"
                  >
                    <q-item-section avatar>
                      <q-avatar rounded>
                        <img :src="service.image" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>{{ service.name }}</q-item-label>
                      <q-item-label caption
                        >Secondary line text. Lorem ipsum dolor sit amet,
                        consectetur adipiscit elit.</q-item-label
                      >
                    </q-item-section>
                  </q-item>
                </q-list>

                <div>
                  <AddServiceDialog />
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>

        <div class="Schedules">
          <q-expansion-item
            expand-separator
            icon="today"
            label="Schedules"
            class="w-full"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAdminStore } from "@/store/admin";
import { computed } from "vue";
import AddServiceDialog from "../dialog/AddServicesDialog";
export default {
  components: {
    AddServiceDialog,
  },
  setup() {
    const userStore = useAdminStore().userStore;

    return {
      userStore,
      fullname: computed(() => {
        if (userStore.selectedUser) {
          if (userStore.selectedUser.profile[0].gender === "Male") {
            return `Dr. ${userStore.selectedUser.profile[0].firstname}  ${userStore.selectedUser.profile[0].lastname}`;
          } else {
            return `Dra. ${userStore.selectedUser.profile[0].firstname}  ${userStore.selectedUser.profile[0].lastname}`;
          }
        }
      }),
    };
  },
};
</script>

<style>
</style>