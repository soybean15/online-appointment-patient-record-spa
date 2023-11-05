import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useCalendarStore = defineStore('calendar',()=>{

    const appointments = ref(null)

    const getAppointments = async()=>{
        const response = await axios.get('api/admin/calendar')

        appointments.value = response.data.appointments
    }



    return {

        appointments,
        getAppointments
    }

})