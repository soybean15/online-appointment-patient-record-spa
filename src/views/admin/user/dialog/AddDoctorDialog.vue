<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Add Doctor" color="primary" @click="persistent = true" />

    <q-dialog
      v-model="persistent"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="" style="width: 700px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">Add Doctor</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div>
            <q-input
              outlined
            
              label="Search"
              @keydown.enter.prevent="onSubmit"
              v-model.trim="key"
              dense
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="py-2">Double click to select</div>
          <q-scroll-area
            class="p-2"
            style="height: 200px; max-width: 100%"
            v-if="users"
          >
            <div
              :class="{ 'font-secondary': index === selectedUser }"
              @dblclick="submit(user)"
              @click="selectedUser = index"
              v-for="(user, index) in users"
              :key="index"
              class="caption cursor-pointer items-center row p-1"
            >
              <q-avatar size="40px">
                <img :src="user.profile.image" />
              </q-avatar>

              <div class="px-2">
                {{ `${user.profile.firstname} ${user.profile.lastname}` }}
              </div>
            </div>
            <template v-slot:loading>
              <div class="row justify-center q-my-md">
                <q-spinner-dots color="primary" size="40px" />
              </div>
            </template>
          </q-scroll-area>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog
      v-model="showConfirmationDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card>
        <q-card-section>
          <div class="text-h7 text-bold ">Confirmation</div>
        </q-card-section>

        <q-card-section>
          <div class="q-mb-md">
            Are you sure you want to add this account <strong>{{ selectedUserFullName }}</strong> as doctor?          
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn
            color="primary"
            label="Confirm"
            @click="confirmAddDoctor"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
  
  <script>
import { onMounted, ref, computed } from "vue";

import {useDoctorStore} from '@/store/doctor'
import { storeToRefs } from 'pinia';
export default {
  setup() {

    const doctorStore = useDoctorStore()
    const persistent = ref(false);
    const showConfirmationDialog = ref(false);
    const {users} = storeToRefs(doctorStore)

    const selectedUser = ref();
    const key = ref("");

    onMounted(() => {
      doctorStore.getUsers(key.value);
    });

    return {
      persistent,
      showConfirmationDialog,
      onSubmit: () => {
        doctorStore.getUsers(key.value);
      },
      submit: async (user) => {
        showConfirmationDialog.value = true;
        selectedUser.value = user;
      },
      confirmAddDoctor: async () => {
        await doctorStore.addDoctor(selectedUser.value);
        persistent.value = false;
        showConfirmationDialog.value = false;
      },
      cancelAddDoctor: () => {
        showConfirmationDialog.value = false;
      },
      selectedUser,
      key,
      users,
      selectedUserFullName: computed(() => {
        if (selectedUser.value) {
          return `${selectedUser.value.profile.firstname} ${selectedUser.value.profile.lastname}`;
        }
        return "";
      }),
    };

   
  },
};
</script>
  