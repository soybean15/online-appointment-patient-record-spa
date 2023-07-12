<template>
  <div class="">
    <div label="Click me" color="primary" @click="persistent = true">
      <slot></slot>
    </div>
    <q-dialog
      v-model="persistent"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card style="width: 100%">
        <q-card-section>
          <div class="q-pa-md " >
            <q-list bordered >

              <q-item>
                <q-item-section avatar>
                  <q-avatar
                    class="text-lg"
                    color="teal"
                    text-color="white"
                    icon="person_add"
                  />
                </q-item-section>

                <q-item-section class="text-lg font-bolf">
                  Register
                </q-item-section>
              </q-item>

              <q-item v-ripple>
                <q-item-section
                  >
                  <div
                    class="w-full flex justify-center text-red-400"
                    v-if="authStore.errors.email"
                  >
                    {{ authStore.errors.email[0] }}
                  </div>
                  
                  <q-input
                    standout="bg-teal text-white"
                    v-model="authStore.form.email"
                    label="Email"
                /></q-item-section>
              </q-item>


              <q-item v-ripple>
                <q-item-section
                  >
                  <div
                    class="w-full flex justify-center text-red-400"
                    v-if="authStore.errors.name"
                  >
                    {{ authStore.errors.name[0] }}
                  </div>
                  <q-input
                    standout="bg-teal text-white"
                    v-model="authStore.form.name"
                    label="Username"
                /></q-item-section>
              </q-item>


              <q-item v-ripple>
                <q-item-section
                  >
                  <div
                    class="w-full flex justify-center text-red-400"
                    v-if="authStore.errors.password"
                  >
                    {{ authStore.errors.password[0] }}
                  </div>
                  <q-input
                    standout="bg-teal text-white"
                    v-model="authStore.form.password"
                    label="Password"
                /></q-item-section>
              </q-item>


              <q-item v-ripple>
                <q-item-section
                  >
                  
                
                  <q-input
                    standout="bg-teal text-white"
                    v-model="authStore.form.password_confirmation"
                    label="Confirm Password"
                /></q-item-section>
              </q-item>


              <q-item v-ripple>
                <q-item-section>
                  <q-btn
                    
                    color="secondary"
                    @click="onRegister"
                    label="Create"
                    :loading="loading"
                  />
                </q-item-section>
              </q-item>



              
            </q-list>
            <div class="q-gutter-y-md column w-full"></div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from '@/store/auth';

export default {
  setup() {
    const persistent = ref(false);
    const authStore = useAuthStore()
    const loading = ref(false);


    const onRegister = async () => {
      loading.value = true;
      await authStore.handleRegister();

       if (authStore.success.register) {
         persistent.value =false
       }

      loading.value = false;
    };



    return { 
      persistent,
      authStore,
      onRegister
     };
  },
};
</script>

<style>
.input {
  background-color: gray;
  border-color: grey;
}
</style>