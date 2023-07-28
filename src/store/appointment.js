import { defineStore } from 'pinia'
import axios from 'axios'
import { format } from "date-fns";
import { useAuthStore } from './auth';

export const useAppointmentStore = defineStore('appointment', {
    state: () => ({

        stateServices: null,
        stateSelectedService: null,
        stateSelectedDoctor: null,
        stateDate: null,
        stateLoading: false,
        stateAppointments:null

    }),


    getters: {
        services: (stateDate) => stateDate.stateServices,
        selectedService: (state) => state.stateSelectedService,
        selectedDoctor: (state) => state.stateSelectedDoctor,
        date: (state) => state.stateDate,
        loading: (state) => state.stateLoading,
        appointments:(state)=>state.stateAppointments

    },


    actions: {

        async index() {
            const data = await axios.get('api/user/appointment')
            this.stateServices = data.data.services
            this.stateAppointments = data.data.appointments

        },
        selectService(service) {
            this.stateSelectedService = service
        },
        selectDoctor(doctor) {
            this.stateSelectedDoctor = doctor
        },
        setDate(date) {
            console.log(`date ${date}`)
            this.stateDate = date
        },
        async setAppointment() {

            const authStore = useAuthStore()
            this.stateLoading = true
            try {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                const data = await axios.post('api/user/appointment/add',
                    {
                        service_id: this.stateSelectedService.id,
                        doctor_id: this.stateSelectedDoctor.id,
                        user_id: authStore.user.id,
                        schedule_date: this.stateDate

                    }
                )
                this.stateLoading = false
            } catch (error) {
                    this.stateLoading = false
            }


        }


    },
})