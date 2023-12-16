<template>
  <div class="">
    <q-btn
      class="mx-1"
      size="10px"
      color="white"
      text-color="primary"
      rounded
      @click="authStore.dialog.register = true"
    >
      <slot></slot>
    </q-btn>

    <q-dialog
      v-model="authStore.dialog.register"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card style="width: 100%">
        <q-card-section>
          <div class="q-pa-md">
            <q-list bordered>
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
                <q-item-section>
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
                <q-item-section>
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
                <q-item-section>
                  <div
                    class="w-full flex justify-center text-red-400"
                    v-if="authStore.errors.password"
                  >
                    {{ authStore.errors.password[0] }}
                  </div>
                  <q-input
                    standout="bg-teal text-white"
                    :type="isPwd ? 'text' : 'password'"
                    v-model="authStore.form.password"
                    label="Password"
                /></q-item-section>
              </q-item>

              <q-item v-ripple>
                <q-item-section>
                  <q-input
                    standout="bg-teal text-white"
                    :type="isPwd ? 'text' : 'password'"
                    v-model="authStore.form.password_confirmation"
                    label="Confirm Password"
                />
                <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                </q-item-section>
              </q-item>

              <q-item v-ripple>
                <q-item-section>
                  <q-btn
                    color="secondary"
                    @click="onRegister"
                    label="Create"
                    :loading="loading"
                  >
                  <template v-slot:loading> Please Wait... </template>
                </q-btn>
                </q-item-section>
              </q-item>

              <div class="row justify-center p-4 text-md">
                 <span class="font-secondary px-2">Already have an account?</span>
                 <span @click="openLogin" class="text-secondary underline cursor-pointer">Sign in</span>
              </div>
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
import { useAuthStore } from "@/store/auth";

export default {
  setup() {
    const authStore = useAuthStore();
    const loading = ref(false);

    const onRegister = async () => {
      loading.value = true;
    
      await authStore.handleRegister();

      if (authStore.success.register) {
        authStore.dialog.register = false;
      }

      loading.value = false;
    };

    return {
      authStore,
      onRegister,
      loading,

      isPwd: ref(false),
      openLogin: () => {
      console.log("Opening register dialog");
      authStore.dialog.register = false;
      setTimeout(() => {
        authStore.dialog.login = true;
      }, 100);
    }
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