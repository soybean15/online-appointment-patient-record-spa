<template>
  <BreadCrumbs :prefix="'record'" />
  <div class="p-2">
    
    <q-list bordered>
      <q-item-label header>Record History</q-item-label>

      <div v-for="item in records" :key="item.id">
        <q-item  clickable @dblclick="router.push({name:'recordDetails', params:{id:item.id}})">
        <q-item-section>
          <q-item-label>{{
            formatDate(item.date_diagnosed, "MMM DD YYYY")
          }}</q-item-label>
          <q-item-label class="font-secondary" caption lines="2">
            {{ item.service.name }}
            <div class="font-bold text-md text-primary">{{ item.doctor }}</div>
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{ item.diagnosed_date_human }}</q-item-label>
          <q-chip outline :color="getType(item.type).color" dense text-color="white">
                {{getType(item.type).label}}
    </q-chip>
        </q-item-section>
        
      </q-item>
      <q-separator spaced inset />
      </div>
   

     
    </q-list>

  </div>
</template>

<script>
import { useUserStore } from "@/store/user";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import {useRouter}   from 'vue-router'
import formatDate from "@/composables/dateFormat";

import BreadCrumbs from '@/components/BreadCrumbs.vue';
export default {
  components:{BreadCrumbs},
  setup() {
    const userStore = useUserStore();
    //        const authStore = useAuthStore()//did dis because IM lazy to convert authstoore from option api to composition api
    const { records } = storeToRefs(userStore);

    const router = useRouter()
    onMounted(async () => {
      userStore.getRecords();
    });

    return {
      records,
      formatDate,
      router,
      getType: (type) => {
        const types = {
          online: { label: "Online", color: "primary" },
          walk_in: { label: "Walk in", color: "blue" },
        };

        return types[type];
      },
    };
  },
};
</script>

<style>
</style>