<template>
  <q-layout view="hHh LpR fff"  class="q-responsive-md-sm">
    <q-header reveal elevated class=" text-white" height-hint="98" :style="{'background-color':$primary} ">
      <q-toolbar class="">
        <q-toolbar-title >
          <router-link to="/">
            <div class="row items-center justify-start">
              <div class="">
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
                <q-avatar  class="cursor-pointer ml-1"   >
                <img src="../assets/img/logo/logo.png" style="width:35px; height:35px;" />
                </q-avatar>
                
              </div>
              <div class="gt-sm">
                Maxilife
              </div>
              
            </div>
          
         
          </router-link>
  
        </q-toolbar-title>

        <q-tabs align="justify" >
          <q-route-tab to="/home" label="HOME" />
          <q-route-tab :to="{ name: 'home_service' }" label="Services" />
          <q-route-tab to="/about" label="About" />

          <div v-if="!authStore.user">
            <q-route-tab class=" row">
              <div class="row">
                <div class="col">
                  <LoginView>Sign in</LoginView>
                </div>
                <div class="col gt-sm" >
                  <RegisterView>Register</RegisterView>
                </div>
                
                
              </div>
            </q-route-tab>
          </div>
          <div v-else>
            <q-route-tab>
              <q-btn
                class=""
                size="10px"
                style="background-color: white !important;"
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
    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
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
import {useConfigStore} from '@/data/config'
import { onMounted, ref } from "vue";
import { useQuasar } from "quasar";
import { useAuthStore } from "@/store/auth";
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
    const config= useConfigStore()




    onMounted(() => {

      authStore.getUser();
  
    
    });
    const leftDrawerOpen = ref(false);


    const $q = useQuasar();
   
    // toggle

    return {
      authStore,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },


      $q,
      config
    };
  },
};
</script>

<style >



</style>