<template>
  <div class="q-pa-md">
    <q-list bordered>
      <q-item  >

        <q-item-section avatar>
          <q-avatar class="text-lg" color="teal" text-color="white" icon="key" />
        </q-item-section>
      
      <q-item-section
        class="text-lg font-bolf">
        Login
      </q-item-section>
    </q-item>

      <q-item  v-ripple>
      
        <q-item-section
          ><q-input standout="bg-teal text-white" v-model="email" label="Email"
        /></q-item-section>
      </q-item>

      <q-item  v-ripple>
      

        <q-item-section>
          <q-input
            standout="bg-teal text-white"
            v-model="password"
            label="Password"
          />
        </q-item-section>
      </q-item>
      <q-item  v-ripple>
      

      <q-item-section>
        <q-btn 
        :loading="loading[0]" 
        color="secondary"
         @click="simulateProgress(0)" label="Button" />
      </q-item-section>
    </q-item>
    </q-list>
  </div>
</template>

<script>
import { ref } from "vue";
import {useAuthStore} from '@/store/auth'
export default {
  setup() {
    return {
      email: ref(""),
      password: ref(""),
    };
  },
};
</script>

<style>
</style>