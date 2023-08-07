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

    <q-footer elevated class="bg-grey-8 text-white q-pa-xl">
    
      <div class="row">
        <div class="col-6 q-pa-lg  col-md-6 col-lg-4">
          <div class="text-h5 q-pa-md ">Maxilife Multispecialty Clinic and Diagnostic Center</div>
          <div class="q-px-md"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</div>
            
                
        </div>
        <div class="col-6 q-pa-lg justify-center flex q-px-lg col-md-6 col-lg-4">
          <div>
          <div class="row justify-center text-h5 q-pa-md">Address</div>
          <div class="row justify-center">Jose Abad Santos Avenue, San Fernando Sur 3107 Cabiao, Philippines</div>
        </div>
      </div>
      <div class="col-6 q-pa-lg q-px-lg q-pl-xl col-md-6 col-lg-4 ">
         <div class="row text-h5 q-pa-md">Contacts</div>
         <div class="row">
            <div class="q-px-sm"> <q-icon name="phone" size="25px"/></div>
            <div class="q-px-sm">0956 875 8900</div>            
         </div>
         <div class="row q-py-md">
            <div class="q-px-sm"> <q-icon name="email" size="25px"/></div>
            <div class="q-px-sm">maxilife_clinic2018@yahoo.com</div>            
         </div>
         <div class="row">
            <div class="q-px-sm"> <q-icon name="phone" size="25px"/></div>
            <div class="q-px-sm">Facebook Page</div>            
         </div>
      </div>
      </div>
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
      console.log(authStore.user)
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