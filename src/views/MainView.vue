<template>
  <q-layout view="hHh LpR fff">
    <q-header reveal  elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/img/logo/logo.png" />
          </q-avatar>
           Maxilife
        </q-toolbar-title>

      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/home" label="HOME" />
        <q-route-tab :to="{name:'home_service'}" label="Services" />
        <q-route-tab to="/about" label="About" />
      </q-tabs>
    </q-header>
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <LeftSideBar
    /></q-drawer>

   
    <q-page-container>
     
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { onMounted, ref } from "vue";
import { useQuasar } from "quasar";
import { useAuthStore } from "@/store/auth";
import LeftSideBar from "@/views/components/LeftSideBar.vue";
export default {
  components: { LeftSideBar },
  setup() {
    const authStore = useAuthStore();
    onMounted(() => {
      authStore.getUser();
      console.log(authStore.isAdmin)
    });
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    const $q = useQuasar();

    // toggle

    return {
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