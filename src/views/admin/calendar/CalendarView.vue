<template>
  <div class="p-5">
    <div class="text-lg px-5">Calendar </div>
    <Calendar :events="appointments" />
  </div>
</template>
  
  <script>
import Calendar from "@/components/Calendar.vue";
import {useCalendarStore} from '@/store/calendar'
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
export default {
  name: "app",
  components: {
    Calendar,
  },
  setup() {
    const calendarStore = useCalendarStore()
    const {appointments}  = storeToRefs(calendarStore)
    onMounted(()=>{
      calendarStore.getAppointments()
    })
    return {
      appointments
    };
  },
};
</script>