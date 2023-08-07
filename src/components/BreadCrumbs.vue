<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el
        class="cursor-pointer"
        :label="route"
        v-for="route in routes"
        :key="route"
        @click="redirect(prefix,route)"
      
      />

    
    </q-breadcrumbs>

  </div>
</template>

<script>
import router from "@/router";
export default {

  //need to pass parent route name ex :appointment
  props: ["prefix"],
  setup() {
    const routes = router.currentRoute.value.fullPath.split("/")
    .filter(segment => segment !== '')
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1));



    return {
      redirect:(prefix, path)=>{

        if(prefix === path.toLowerCase()){
          router.push({name:prefix})
        }else{
          router.push({name:prefix+path})
        }
       
      },

    routes
    };
  },
};
</script>

<style>
</style>