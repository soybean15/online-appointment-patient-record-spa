<template>
  <div class="q-pa-md" style="max-width: 700px">
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Doctors</q-toolbar-title>
    </q-toolbar>

    <q-list bordered>
      <q-item
        @click="userStore.setUser(doctor)"
        v-for="doctor in userStore.doctors"
        :key="doctor.id"
        class="q-my-sm"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            <img :src="doctor.profile[0].image" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{
            `${doctor.profile[0].firstname} ${doctor.profile[0].lastname}`
          }}</q-item-label>
          <span class="font-secondary">{{doctor.doctor.specialty}}</span>
          <q-item-label caption lines="1">{{ doctor.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="add_circle" color="green">
            <q-tooltip anchor="center right" self="center start">
              Add Specialty
            </q-tooltip>

            <q-popup-edit  v-slot="scope">
              <q-input
              v-model="specialty"
               
                dense
                autofocus
                @keyup.enter="save(doctor, scope.set)"
              />
            </q-popup-edit>
          </q-icon>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
  
  <script>
import { useAdminStore } from "@/store/admin";
import { onMounted,ref } from "vue";

export default {
  setup() {
    const userStore = useAdminStore().userStore;
    const specialty = ref('')

    return {
      userStore,
      specialty,
      save:(doctor,close)=>{
        userStore.addDoctor(doctor, specialty.value)
        specialty.value=''
        console.log(specialty.value)
        close()
        
      }
    };
  },
};
</script>
  