<template>
  <div class="font-nonito">
    <router-view></router-view>
  </div>
</template>

<script>
import { useSystemStore } from "./store/system";
import { onMounted, ref } from "vue";
import { useConfigStore } from "./data/config";

export default {
  setup() {
    const systemStore = useSystemStore();


    const config = useConfigStore();
    const primary = ref(config.primary);

    onMounted(() => {
      systemStore.index();
    });

    return {
      primary,
    };
  },
};
</script>
<style >
.q-btn {
  background-color: v-bind(primary) !important;
  
  
}
</style>