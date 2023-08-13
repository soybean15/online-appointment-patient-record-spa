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
                <div
                  class="fit row wrap justify-start items-start content-start"
                >
                  <div
                    class=""
                    v-for="(day, index) in userStore.selectedUser.doctor
                      .available_schedules"
                    :key="day"
                  >
                    <q-checkbox
                      class=""
                      v-model="day.selected"
                      @click="setSchedule(index + 1)"
                      :label="day.name"
                    />
                  </div>
                </div>

                <div class="row justify-around">
                  <q-input  label="Start time" class="col-5" dense outlined v-model="userStore.selectedUser.doctor.from" mask="time" :rules="['time']">
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-time v-model="userStore.selectedUser.doctor.from">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              />
                            </div>
                          </q-time>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input> 
                  <q-input  label="End time" class="col-5" dense outlined v-model="userStore.selectedUser.doctor.to" mask="time"  :rules="[val => !!val || 'End time is required']">
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-time v-model="userStore.selectedUser.doctor.to">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              />
                            </div>
                          </q-time>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                 
                </div>
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
import { computed, onMounted, ref } from "vue";
import AddServiceDialog from "../dialog/AddServicesDialog";

const mapSchedule = (week, days) => {
  days.array.forEach((element) => {
    console.log(element);
  });
};
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

      setSchedule: (index) => {
        console.log(index);
        userStore.setSchedule(index);
      },
      start:ref('08:00:00'),
      end:ref()
    };
  },
};
</script>

<style>
</style>