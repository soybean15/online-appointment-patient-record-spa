import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router/index'
import { useServiceStore } from './service'
import { useUserStore } from './user'

export const useAdminStore = defineStore('admin', {
    state: () => ({

        stateServices: null,
        stateCurrentTime:null



    }),


    getters: {
        service: (state) => state.stateServices,
        serviceStore: () => useServiceStore(),
        userStore:()=> useUserStore(),
        currentTime :(state)=>state.stateCurrentTime

    },


    actions: {

        async index(){
            const data = await axios.get('api/admin/')
            this.stateCurrentTime = data.data.current_datetime

        }



    },
})