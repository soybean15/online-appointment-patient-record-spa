<template>
  <q-list padding>
    <q-item
      :active="activeSideBar === 'profile'"
      @click="activeSideBar = 'profile'"
      clickable
      v-ripple
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
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-icon name="book_online" />
      </q-item-section>

      <q-item-section> Records </q-item-section>
    </q-item>

    <q-item clickable class="" v-ripple>
      <q-item-section avatar>
        <q-icon name="dark_mode" />
      </q-item-section>

      <q-item-section> Dark Mode </q-item-section>
      <q-item-section>
        <q-toggle v-model="value" color="primary" @click="$q.dark.toggle()" />
      </q-item-section>
    </q-item>

    <div v-if="authStore.isAdmin">
      <q-item
      to="admin"
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-icon name="admin_panel_settings" />
      </q-item-section>

      <q-item-section> Administrator </q-item-section>
    </q-item>

    </div>
   


    <q-item>
      <q-item-section>
        <AuthDialog>Account</AuthDialog>
      </q-item-section>
    </q-item>
    <hr />
    <div v-if="!authStore.user">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="login" />
        </q-item-section>

        <q-item-section>
          <LoginView>Sign in</LoginView>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="person_add_alt" />
        </q-item-section>

        <q-item-section>
          <RegisterView> Register</RegisterView>
        </q-item-section>
      </q-item>
    </div>
    <div v-else>
      <q-item clickable @click="authStore.handleLogout" v-ripple>
        <q-item-section avatar>
          <q-icon name="logout" />
        </q-item-section>

        <q-item-section> Logout </q-item-section>
      </q-item>
    </div>
  </q-list>
</template>

<script>
import LoginView from "@/views/home/auth/LoginView";
import RegisterView from "@/views/home/auth/RegisterView.vue";
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";
export default {
  components: { LoginView, RegisterView },

  setup() {
    const authStore = useAuthStore();

    return {
      activeSideBar: ref(),
      authStore,
    };
  },
};
</script>

<style>
</style>