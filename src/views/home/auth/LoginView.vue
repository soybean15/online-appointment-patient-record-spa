<template>
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

        <q-item-section class="text-lg font-bolf"> Login </q-item-section>
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
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";
export default {
  emits: ["onClose"],
  setup(props, { emit }) {
    const authStore = useAuthStore();
    const loading = ref(false)

    const onLogin = async () => {
      loading.value = true
      await authStore.handleLogin();
      console.log(authStore.user);

      await authStore.getUser()

      if (authStore.user) {
        emit("onClose");
        console.log("close");
      }

      loading.value= false
    };

    return {
      authStore,
      onLogin,
      loading
    };
  },
};
</script>

<style>
</style>