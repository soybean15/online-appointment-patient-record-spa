import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router/index'

export const useServiceStore = defineStore('service', {
    state: () => ({

        stateServices:null,
        stateServiceForm :{
            name:null,
            price:null
        }
    }),
    getters: {
        services:(state)=>state.stateServices,
        serviceForm:(state)=>state.stateServiceForm

    },
    actions: {

        async getServices(){
            const data = await axios.get('api/services')
            this.stateServices =data.data.services
        },
        async addService(){
            const data =  await axios.post('api/admin/services/add', this.stateServiceForm)
            this.stateServices.push(data.data.service)
        },
        async updateService(){
        
           const data  = await axios.post(`api/admin/services/edit/${this.stateServiceForm.id}`,this.serviceForm)
        }



    },
})