<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el
      class="cursor-pointer"
        :label="route.name"
        v-for="route in routes"
        :key="route.name"
        @click="redirect(route.route)"
      />
    </q-breadcrumbs>
  </div>
</template>

<script>
import router from "@/router";
export default {
  props: ["routes"],
  setup() {
 

    return {
      redirect: (path) => {
        router.push({ name: path });
      },
    };
  },
};
</script>

<style>
</style>