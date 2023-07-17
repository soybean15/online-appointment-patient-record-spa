import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router/index'
import { useServiceStore } from './service'

export const useAdminStore = defineStore('admin', {
    state: () => ({

        stateServices: null



    }),


    getters: {
        service: (state) => state.stateServices,
        serviceStore: () => useServiceStore()

    },


    actions: {

        // getServices() {

        //     const serviceStore = useServiceStore()
        //     serviceStore.getServices()
        //     this.stateServices = serviceStore.services


        // }



    },
})