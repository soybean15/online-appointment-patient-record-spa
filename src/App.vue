<template>
  <div class=" font-nonito">
  <router-view></router-view>
</div>
</template>

<script>

import { useSystemStore } from './store/system';
import { onMounted, ref } from 'vue';
import { useConfigStore } from './data/config';
import { useQuasar } from "quasar";
export default {
 
  setup(){
    const systemStore = useSystemStore()
    const $q = useQuasar();
  
    const config = useConfigStore()
    const primary =ref(config.primary)

    

  

 
    onMounted(()=>{
      systemStore.index()
    })

    return {
      primary
    }
  }
  
};
</script>
<style >

.bg-main{
  background-color: v-bind(primary)
}

.color-main{
  color:v-bind(primary)
}




</style>