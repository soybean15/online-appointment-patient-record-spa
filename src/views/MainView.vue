<template>
  <q-layout view="hHh LpR fff">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/img/logo/logo.png" />
          </q-avatar>
          Maxilife
        </q-toolbar-title>

        <q-tabs align="justify">
          <q-route-tab to="/home" label="HOME" />
          <q-route-tab :to="{ name: 'home_service' }" label="Services" />
          <q-route-tab to="/about" label="About" />

          <div v-if="!authStore.user">
            <q-route-tab class="ml-10 row">
              <div class="row">
                <LoginView>Sign in</LoginView>
                <RegisterView>Register</RegisterView>
              </div>
            </q-route-tab>
          </div>
          <div v-else>
            <q-route-tab class="ml-10 row">
              <q-btn
                class="mx-1"
                size="10px"
                color="white"
                text-color="primary"
                rounded
                label="Log out"
                @click="authStore.handleLogout"
              />
            </q-route-tab>
          </div>
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <LeftSideBar
    /></q-drawer>

    <q-page-container>
      <router-view />

      <router-view name="details"></router-view>
    </q-page-container>

    <FooterViewVue />
  </q-layout>
</template>

<script>
import { onMounted, ref } from "vue";
import { useQuasar } from "quasar";
import { useAuthStore } from "@/store/auth";
import {useSystemStore} from '@/store/system'
import LeftSideBar from "@/views/components/LeftSideBar.vue";
import FooterViewVue from "./components/FooterView.vue";
import LoginView from "@/views/home/auth/LoginView";
import RegisterView from "@/views/home/auth/RegisterView.vue";


export default {
  components: {
    LeftSideBar,
    FooterViewVue,
    RegisterView,
    LoginView,
  },
  setup() {
    const authStore = useAuthStore();
    const systemStore =useSystemStore()
    onMounted(() => {
      systemStore.index()
      authStore.getUser();
      console.log(authStore.user);
    });
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    const $q = useQuasar();

    // toggle

    return {
      authStore,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      $q,
    };
  },
};
</script>