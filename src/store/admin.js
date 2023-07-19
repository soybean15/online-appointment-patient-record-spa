import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router/index'
import { useServiceStore } from './service'
import { useUserStore } from './user'

export const useAdminStore = defineStore('admin', {
    state: () => ({

        stateServices: null



    }),


    getters: {
        service: (state) => state.stateServices,
        serviceStore: () => useServiceStore(),
        userStore:()=> useUserStore()

    },


    actions: {

        // getServices() {

        //     const serviceStore = useServiceStore()
        //     serviceStore.getServices()
        //     this.stateServices = serviceStore.services


        // }



    },
})