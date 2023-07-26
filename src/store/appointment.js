import { defineStore } from 'pinia'
import axios from 'axios'


export const useAppointmentStore = defineStore('appointment', {
    state: () => ({

        stateServices:null,
        stateSelectedService:null

    }),


    getters: {
        services: (state) => state.stateServices,
        selectedService :(state)=>state.stateSelectedService
   
    },


    actions: {

        async index(){
            const data = await axios.get('api/user/appointment')
            this.stateServices = data.data.services

        },
        selectService(service){
            this.stateSelectedService=service
        }



    },
})