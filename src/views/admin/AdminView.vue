<template>
  <q-layout view="hHh lpR fFf">
    <!-- :style="{'background-color': config.primary}" -->
    <q-header elevated class="bg-primary text-white"  >
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="../../assets/img/logo/logo.png" />
          </q-avatar>
          Maxilife
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <q-item :to="{ name: 'dashboard' }" clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="dashboard" />
        </q-item-section>

        <q-item-section> Dashboard </q-item-section>
      </q-item>

      <q-item :to="{ name: 'adminAppointment' }" clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="pending_actions" />
        </q-item-section>

        <q-item-section> Appointments </q-item-section>
      </q-item>

      <q-item :to="{name:'calendar'}" clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="calendar_today" />
        </q-item-section>

        <q-item-section> Calendar </q-item-section>
      </q-item>

      <q-item :to="{ name: 'services' }" clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="medical_services" />
        </q-item-section>

        <q-item-section> Services </q-item-section>
      </q-item>

      <q-expansion-item icon="perm_identity" label="Users">
        <q-card>
          <q-card-section
            ><q-item :to="{ name: 'patients' }" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="masks" />
              </q-item-section>

              <q-item-section> Patients </q-item-section>
            </q-item>
            <q-item :to="{ name: 'doctors' }" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="vaccines" />
              </q-item-section>

              <q-item-section> Doctors </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <hr />
      <q-item to="/" clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="exit_to_app" />
        </q-item-section>

        <q-item-section> Exit </q-item-section>
      </q-item>

      <q-item :to="{ name: 'settings' }" clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="settings" />
        </q-item-section>

        <q-item-section> Settings </q-item-section>
      </q-item>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <FooterView />
  </q-layout>
</template>
  
  <script>
import FooterView from "../components/FooterView.vue";
import { onMounted, ref } from "vue";
import { useAdminStore } from "@/store/admin";
import {useConfigStore} from '@/data/config'
export default {
  components: {
    FooterView,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const adminStore = useAdminStore();

    const config = useConfigStore()
  
    onMounted(async () => {
      adminStore.index();
      
    });

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      config
    };
  },
};
</script>

<style >


</style>