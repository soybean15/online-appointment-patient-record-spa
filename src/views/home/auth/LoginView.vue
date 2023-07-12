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
      <q-card class="bg-teal text-white" style="width: 100%">
        <q-card-section>
          <div class="q-pa-md">
            <q-list bordered>
              <q-item>
                <q-item-section avatar>
                  <q-avatar
                    class="text-lg"
                    color="teal"
                    text-color="white"
                    icon="key"
                  />
                </q-item-section>

                <q-item-section class="text-lg font-bolf">
                  Login
                </q-item-section>
              </q-item>

              <q-item v-ripple>
                <q-item-section
                  ><q-input
                    standout="bg-teal text-white"
                    v-model="authStore.loginForm.email"
                    label="Email"
                /></q-item-section>
              </q-item>

              <q-item v-ripple>
                <q-item-section>
                  <q-input
                    standout="bg-teal text-white"
                    v-model="authStore.loginForm.password"
                    label="Password"
                  />
                </q-item-section>
              </q-item>
              <q-item v-ripple>
                <q-item-section>
                  <q-btn
                    :loading="loading"
                    color="secondary"
                    @click="onLogin"
                    label="Login"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";
export default {
 
  setup() {
    const authStore = useAuthStore();
    const loading = ref(false);
    const persistent =ref(false)
    const onLogin = async () => {
      loading.value = true;
      await authStore.handleLogin();
      console.log(authStore.user);

      await authStore.getUser();

      if (authStore.user) {
        persistent.value =false
      }

      loading.value = false;
    };

    return {
      authStore,
      onLogin,
      loading,
      persistent
    };
  },
};
</script>

<style>
</style>