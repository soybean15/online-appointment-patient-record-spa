<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="../../assets/logo.png" />
          </q-avatar>
           Maxilife
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered class="mt-10">
      
          <q-item         
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>

            <q-item-section> Dashboard </q-item-section>
          </q-item>

      
          <q-item         
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="pending_actions" />
            </q-item-section>

            <q-item-section> Appointments </q-item-section>
          </q-item>


          <q-item         
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="calendar_today" />
            </q-item-section>

            <q-item-section> Calendar </q-item-section>
          </q-item>

          <q-item         
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="medical_services" />
            </q-item-section>

            <q-item-section> Services </q-item-section>
          </q-item>

          <q-item         
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section> User </q-item-section>
            <q-btn-dropdown  auto-close>
                  <q-list padding>

                    <q-item clickable v-close-popup @click="onItemClick">
                      <q-item-section>
                        <q-item-label>Patients</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="onItemClick">
                      <q-item-section>
                        <q-item-label>Doctor</q-item-label>
                      </q-item-section>
                    </q-item>

                    
                  </q-list>
          </q-btn-dropdown>

          </q-item>

          <hr />
          <q-item         
            clickable
            v-ripple
            
          >
            <q-item-section avatar>
              <q-icon name="exit_to_app" />
            </q-item-section>

            <q-item-section> Exit </q-item-section>
          </q-item>



    </q-drawer>





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
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>