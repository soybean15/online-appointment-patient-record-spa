<template>
  <div class="q-pa-lg text-h5">Services</div>
  <ul>
    <div class="row q-px-xl q-mx-xl">
      <div class="col">
        <div class="row">
          <li
            v-for="service in serviceStore.services"
            :key="service.id"
            class="col-md-4 col-sm-6 col-lg-2 row justify-center q-py-md q-px-sm"
          >
            <q-card
              class="my-card text-gray-7 q-ma-sm shadow-3 row items-end justify-center"
              style="border-radius: 10px; width: 230px"
            >
              <q-img
                style="height: 170px; max-width: 300px"
                :src="service.image"
              >
                <div class="absolute-bottom text-center">
                  {{ service.name }}<br>&#8369; {{ service.price }}
                </div>
              </q-img>
            </q-card>
          </li>
        </div>
      </div>
    </div>
  </ul>
</template>

<script>
import { useServiceStore } from "@/store/service";
import { onMounted } from "vue";
export default {
  setup() {
    const serviceStore = useServiceStore();

    onMounted(() => {
      serviceStore.getServices();
    });

    return {
      serviceStore,
    };
  },
};
</script>

<style>
</style>