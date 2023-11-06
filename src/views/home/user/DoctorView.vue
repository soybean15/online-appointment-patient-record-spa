<template>
  <div class="p-4">
    <div class="text-lg"> My Appointments</div>

    <q-list>
        <q-separator spaced inset />
      <q-item v-for="item in pending" :key="item.id">
       
        <q-item-section>
          <q-item-label>{{formatDate(item.schedule_date, 'MMM DD YYYY')}}</q-item-label>
          <q-item-label caption lines="2">{{item.service.name}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{item.time_ago}}</q-item-label>
          <q-icon name="star" color="yellow" />
        </q-item-section>
      </q-item>


    </q-list>

  </div>
</template>

<script>
import { onMounted } from 'vue'
import {  useRoute } from 'vue-router'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

import formatDate from '@/composables/dateFormat'
export default {


    setup(){
        const route = useRoute()
        const userStore = useUserStore()
        const id = route.params.id
        const {pending} = storeToRefs(userStore)

        onMounted(()=>{
            userStore.getDoctorAppointment(id)
        })


        return {
            pending,
            formatDate
        }

    }
}
</script>

<style>

</style>