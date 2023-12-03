<template>
  <q-list padding class="font-nonito font-bold">
    <div v-if="authStore.user">
      <q-item
        :active="activeSideBar === 'profile'"
        @click="activeSideBar = 'profile'"
        clickable
        v-ripple
        :to="{ name: 'profile' }"
      >
        <q-item-section avatar>
          <q-icon class="" name="person" />
        </q-item-section>

        <q-item-section> Profile </q-item-section>
      </q-item>

      <q-item
        :active="activeSideBar === 'appointment'"
        @click="activeSideBar = 'appointment'"
        clickable
        :to="{ name: 'appointment' }"
        v-ripple
      >
        <q-item-section avatar>
          <q-icon name="book_online" />
        </q-item-section>

        <q-item-section> Appointments </q-item-section>
      </q-item>

      <q-item
        :active="activeSideBar === 'records'"
        @click="activeSideBar = 'records'"

        :to="{ name: 'record' }"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-icon name="receipt_long" />
        </q-item-section>

        <q-item-section> Records </q-item-section>
      </q-item>

      <q-item
        :active="activeSideBar === 'doctor'"
        @click="activeSideBar = 'doctor'"
        :to="{ name: 'doctorAppointment',params:{id:authStore.user.id} }"
        clickable
        v-ripple
         v-if="authStore.user.isDoctor">
        <q-item-section avatar>
          <q-icon name="receipt_long" />
        </q-item-section>
        <q-item-section> My Appointments </q-item-section>
      </q-item>
    </div>

    <q-item clickable class="" v-ripple>
      <q-item-section avatar>
        <q-icon name="dark_mode" />
      </q-item-section>

      <q-item-section> Dark Mode </q-item-section>
      <q-item-section>
        <q-toggle v-model="dark" color="primary" @click="$q.dark.toggle()" />
      </q-item-section>
    </q-item>
    <div v-if="authStore.isAdmin">
      <q-item to="admin" clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="admin_panel_settings" />
        </q-item-section>

        <q-item-section> Administrator </q-item-section>
      </q-item>
    </div>
  </q-list>
</template>

<script>
import LoginView from "@/views/home/auth/LoginView";
import RegisterView from "@/views/home/auth/RegisterView.vue";

import { ref, watch } from "vue";
import { useAuthStore } from "@/store/auth";
import { useConfigStore } from "@/data/config";
import { storeToRefs } from 'pinia';

export default {
  components: { LoginView, RegisterView },

  setup() {
    const authStore = useAuthStore();
    

    const { $q } = useConfigStore();
    const {dark } = storeToRefs(useConfigStore())
  

    watch(
      () => $q.dark.isActive,
      (val) => {
        localStorage.setItem('dark', val);
        $q.dark.set(val)
       
      }
    );

    return {
      activeSideBar: ref(),
      authStore,  
      $q,
      dark,
    };
  },
};
</script>

<style>
.q-item.q-router-link--active,
.q-item--active {
  color: v-bind(primary);
}
</style>