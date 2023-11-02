import { defineStore } from 'pinia'
import axios from 'axios'
import { format } from "date-fns";
import { useAuthStore } from './auth';

export const useAppointmentStore = defineStore('user_appointment', {
    state: () => ({

        stateServices: null,
        stateDoctors:null  ,
        stateSelectedService: null,
        stateSelectedDoctor: null,
        stateDate: null,
        stateLoading: false,
        stateAppointments:null,
        
        stateId:null,
        stateSelectedAppointment:null

    }),


    getters: {
        services: (state) => state.stateServices,
        doctors:(state)=> state.stateDoctors,
        selectedService: (state) => state.stateSelectedService,
        selectedDoctor: (state) => state.stateSelectedDoctor,
        date: (state) => state.stateDate,
        loading: (state) => state.stateLoading,
        appointments:(state)=>state.stateAppointments,
        selectedAppointment:(state)=>state.stateSelectedAppointment,
        referenceId:(state)=>state.stateId

    },


    actions: {

        async index() {
            const data = await axios.get('api/user/appointment')
            this.stateServices = data.data.services
            this.stateAppointments = data.data.appointments
            this.stateDoctors = data.data.doctors.data

        },
        selectService(service) {
            this.stateSelectedService = service
        },
        selectDoctor(doctor) {
            this.stateSelectedDoctor = doctor
        },
        setDate(date) {
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
                        schedule_date: this.stateDate,
                        reference_id : this.stateId

                    }
                )
                this.stateAppointments.push(data.data.appointment)
                this.stateLoading = false
               
            } catch (error) {
                    this.stateLoading = false
            }


        },
        clearData(){
            this.stateSelectedDoctor = null
            this.stateDate =null
            this.stateSelectedService = null
        },

        setSelectedAppointment(appointment){
            this.stateSelectedAppointment = appointment
        },

        async userAction(action){
            const data = await  axios.post('api/user/appointment/action',{
                id: this.stateSelectedAppointment.id,
                action: action
            })

            this.stateSelectedAppointment = data.data.appointment
        }
        ,
        async changeSchedule(date){
            const data = await axios.post('api/user/appointment/change-schedule',{
                id:this.selectedAppointment.id,
                newDate:date
            })
            this.stateSelectedAppointment = data.data.appointment
        },
        async generateId(){
           const response = await axios.get('api/user/appointment/id') 
           this.stateId = response.data.id
        }
     

    },
})