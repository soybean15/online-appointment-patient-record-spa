import { defineStore } from 'pinia'
import axios from 'axios'


export const useAppointmentStore = defineStore('appointment', {
    state: () => ({

        stateServices:null

    }),


    getters: {
        services: (state) => state.stateServices
   
    },


    actions: {

        async index(){
            const data = await axios.get('api/user/appointment')
            this.stateServices = data.data.services

        }



    },
})