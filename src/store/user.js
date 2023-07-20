// stores/counter.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    statePatients:null,
    stateCurrent:null,
   
     

  }),
  getters: {
    patients: (state) => state.statePatients,
    current:(state)=>state.stateCurrent
  },
  actions: {

    async getPatients(path,keyword){
        if(!path){
            path = 'api/admin/patient'
        }
      
         const data = await axios.post(path,{keyword})
     
        
        this.statePatients = data.data.patients
    },

    async searchPatient(keyword){
      const data  = await axios.post('api/admin/patient/search',{keyword})
      this.statePatients = data.data.results

    }
   
  },
})