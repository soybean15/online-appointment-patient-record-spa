<template>
  <div>
    <q-date
      style="width: 100%"
      v-model="currentDate"
      :events="events"
      :options="allDatesInCurrentMonth"
      landscape
    />
  </div>
</template>
  
  <script>
import { ref } from "vue";
import { useAppointmentStore } from "@/store/appointment";
import {  format } from "date-fns";
export default {
  setup() {
    const appointmentStore = useAppointmentStore();
    const allDatesInCurrentMonth = ref([]);

    const currentDate = ref(format(new Date(), "yyyy-MM-dd"));

    const eventsFn = () => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();

      const start = new Date(currentYear, currentMonth, currentDate.getDate()); // Set start to current date


      const end = new Date(currentYear + 2, 0, 0);
      const allDates = [];
      for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
        const day = date.getDay();
        let isDateValid = appointmentStore.selectedDoctor.schedules.some(
          (schedule) => schedule.day_of_week === day
        );

        if (isDateValid) {
          allDates.push(format(new Date(date), "yyyy/MM/dd"));
        }
      }

    
      allDatesInCurrentMonth.value = allDates;
    };
    eventsFn();


    return {
      currentDate,
      events: [
        "2019/02/01",
        "2019/02/05",
        "2019/02/06",
        "2019/02/09",
        "2019/02/23",
      ],
      allDatesInCurrentMonth,
    };
  },
};
</script>
  