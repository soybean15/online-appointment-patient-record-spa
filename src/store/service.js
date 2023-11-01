import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router/index'

export const useServiceStore = defineStore('service', {
    state: () => ({

        stateServices: null,
        stateServiceForm: {
            name: null,
            price: null,
            image: null,
            description: null,
            image: null
        }
    }),
    getters: {
        services: (state) => state.stateServices,
        serviceForm: (state) => state.stateServiceForm

    },
    actions: {

        async getServices() {
            const data = await axios.get('api/services')
            this.stateServices = data.data.services
        },
        async addService(image) {
            this.stateServiceForm.image = image
            const data = await axios.post('api/admin/services/add', this.stateServiceForm,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            this.stateServices.push(data.data.service)
        },
        async updateService(image) {
            this.stateServiceForm.image = image
            const data = await axios.post(`api/admin/services/edit/${this.stateServiceForm.id}`, this.serviceForm,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })

                this.getServices()
        },
        async deleteService(id){
             await axios.delete(`api/admin/services/delete/${id}`)
             this.getServices()
            
        }



    },
})