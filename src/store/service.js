import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router/index'

export const useServiceStore = defineStore('service', {
    state: () => ({

        stateServices:null
    }),
    getters: {
        services:(state)=>state.stateServices

    },
    actions: {

        async getServices(){
            const data = await axios.get('api/services')
            this.stateServices =data.data.services
        },
        async addService(){
            
        }



    },
})