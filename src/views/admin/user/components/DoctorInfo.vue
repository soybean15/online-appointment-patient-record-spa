<template>
  <div>
    <div
      class="column p-5 my-4 bg-surface rounded-lg"
      v-if="selectedUser"
    >
      <div class="row">
        <q-avatar size="100px" class="col self-center">
          <img :src="selectedUser.profile[0].image" />
        </q-avatar>
      </div>

      <div class="column">
        <div class="row self-center text-2xl">{{ selectedUser.doctor.full_name }}</div>
        <div class="row self-center text-lg font-secondary">
          {{ selectedUser.doctor.specialty }}
        </div>
        <div class="row self-center text-md">
          {{ selectedUser.profile[0].contact_number }}
        </div>
        <div class="row self-center text-md">
          {{ selectedUser.email }}
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
                    v-for="service in selectedUser.doctor.services"
                    :key="service.id"
                  >
                    <q-item-section avatar>
                      <q-avatar rounded>
                        <img :src="service.image" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>
                        
                        <div class="row justify-between">
                          {{ service.name }}
                          <q-icon @click="deleteService(service.id)" class="hover:text-red-600" name="delete"/>
                        </div>
                      
                      </q-item-label>
                      <q-item-label caption
                        >{{service.description}}</q-item-label
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
                    v-for="(day, index) in selectedUser.doctor
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
                  <q-input  label="Start time" class="col-5" dense outlined v-model="selectedUser.doctor.from" mask="time" :rules="['time']">
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-time v-model="selectedUser.doctor.from">
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
                  <q-input  label="End time" class="col-5" dense outlined v-model="selectedUser.doctor.to" mask="time"  :rules="[val => !!val || 'End time is required']">
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-time v-model="selectedUser.doctor.to">
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
                <div class="row justify-end mx-5">
                  <q-btn color="primary" class="self-end" @click="doctorStore.setDoctorTime()" dense label="submit" />
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

import { computed } from "vue";
import AddServiceDialog from "../dialog/AddServicesDialog";
import { useDoctorStore } from '@/store/doctor';
import { storeToRefs } from 'pinia';

export default {
  components: {
    AddServiceDialog,
  },
  setup() {

    const doctorStore = useDoctorStore()
    const {selectedUser} = storeToRefs(doctorStore)

    return {
 
      selectedUser,
      doctorStore,
      fullname: computed(() => {
        if (selectedUser.value) {
          if (selectedUser.value.profile[0].gender === "Male") {
            return `Dr. ${selectedUser.value.profile[0].firstname}  ${selectedUser.value.profile[0].lastname}`;
          } else {
            return `Dra. ${selectedUser.value.profile[0].firstname}  ${selectedUser.value.profile[0].lastname}`;
          }
        }
      }),

      setSchedule: (index) => {
        doctorStore.setSchedule(index);
      },
      deleteService:(id)=>{
        doctorStore.removeService(id)
      }
     
    };
  },
};
</script>

<style>
</style>