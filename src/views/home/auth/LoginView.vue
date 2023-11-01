<template>
  <div class="">
    <q-btn
      class="mx-1"
      size="10px"
      
      text-color="primary"
      rounded
      @click="authStore.dialog.login = true"
      style="background-color: white !important;"
    >
      <slot></slot>
    </q-btn>

    <q-dialog
      v-model="authStore.dialog.login"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card style="width: 100%">
        <q-card-section>
          <q-form @submit="onLogin" class="q-pa-md">
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
                <q-item-section>
                  <div
                    class="w-full flex justify-center text-red-400"
                    v-if="authStore.errors.email"
                  >
                    {{ authStore.errors.email[0] }}
                  </div>
                  <q-input
                    dense
                    standout="bg-teal text-white"
                    v-model="authStore.form.email"
                    label="Email"
                /></q-item-section>
              </q-item>

              <q-item v-ripple>
                <q-item-section>
                  <div
                    class="w-full flex justify-center text-red-400"
                    v-if="authStore.errors.password"
                  >
                    {{ authStore.errors.password[0] }}
                  </div>
                  <q-input
                    dense
                    :type="isPwd ? 'text' : 'password'"
                    standout="bg-teal text-white"
                    v-model="authStore.form.password"
                    label="Password"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>


              <q-item clickable  :to="'forgot-password'" @click="authStore.dialog.login=false">
                <q-item-section>
                  <span class="underline  text-secondary">Forgot Password</span>
                </q-item-section>
              </q-item>

              <q-item v-ripple>
                <q-item-section>
                  <q-btn
                    :loading="loading"
                    color="secondary"
                    type="submit"
                    label="Login"
                  >
                    <template v-slot:loading> Please Wait... </template>
                  </q-btn>
                </q-item-section>
              </q-item>

              <div class="row justify-center p-4 text-md">

                 <span class="font-secondary px-2">No Account?</span>
                 <span @click="openRegister" class="text-secondary underline cursor-pointer">Register</span>
              </div>
            </q-list>
          </q-form>
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
import { useAuthStore } from "@/store/auth";
export default {
  setup() {
    const authStore = useAuthStore();
    const loading = ref(false);

    const onLogin = async () => {
      loading.value = true;
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await authStore.handleLogin();

      await authStore.getUser();

      loading.value = false;
    };

    return {
      authStore,
      onLogin,
      loading,

      isPwd: ref(false),
      openRegister:()=>{
        authStore.dialog.login = false
        authStore.dialog.register =  true
      }
    };
  },
};
</script>

<style >
</style>