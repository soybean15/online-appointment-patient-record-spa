<template>
  <div class="q-pa-md">
    <q-list
      bordered
      class="bg-surface rounded-borders"
      style="max-width: 350px"
    >
      <q-item-label header>Doctors</q-item-label>

      <div
        v-if="
          appointmentStore.appointments && appointmentStore.doctors.length > 0
        "
      >
        <div v-for="doctor in appointmentStore.doctors" :key="doctor.key">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img :src="doctor.user.profile[0].image" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">{{ doctor.full_name }}</q-item-label>
              <q-item-label caption lines="2">
                <span class="text-weight-bold">Janet</span>
                -- I'll be in your neighborhood doing errands this weekend. Do
                you want to grab brunch?
              </q-item-label>
            </q-item-section>

            <q-item-section side top> 1 min ago </q-item-section>
          </q-item>

          <q-separator inset="item" />
        </div>
      </div>
      <div v-else>
        <q-item-label header>No Available Doctor</q-item-label>
      </div>



      <div class="row justify-between items-center">
        <q-item-label header>Services</q-item-label>
        <router-link
          :to="{ name: 'home_service' }"
          class="text-blue-400 px-2"
          header
          >See All</router-link
        >
      </div>
      <div v-if="appointmentStore.services">
        <div
          v-for="service in appointmentStore.services.slice(0, 5)"
          :key="service.id"
        >
          <q-item>
            <q-item-section avatar top>
              <q-img
                :src="service.image"
                spinner-color="red"
                style="height: 4rem; width: 4rem"
              />
            </q-item-section>

            <q-item-section top>
              <q-item-label lines="1">
                <span class="text-weight-medium">{{ service.name }}</span>
                <span class="text-grey-8">
                  - {{ `${service.currency_symbol} ${service.price}` }}</span
                >
              </q-item-label>
              <q-item-label caption lines="1">
                {{ service.description }}
              </q-item-label>
              <q-item-label
                lines="1"
                class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
              >
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </div>
    </q-list>
  </div>
</template>

<script>
import { useAppointmentStore } from "@/store/appointment";
export default {
  setup() {
    const appointmentStore = useAppointmentStore();

    return {
      appointmentStore,
    };
  },
};
</script>

<style>
</style>