// stores/counter.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    statePatients:null

    

  }),
  getters: {
    patients: (state) => state.statePatients
  },
  actions: {

    async getPatients(path){
        if(!path){
            path = 'api/admin/patient'
        }
        const data = await axios.get(path)
        this.statePatients = data.data.patients


    }
   
  },
})