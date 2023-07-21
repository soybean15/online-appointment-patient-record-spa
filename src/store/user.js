// stores/counter.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    statePatients:null,
    stateCurrent:null,
    stateUsers:null,
    stateDoctors:null,
    stateSelectedUser:null
   
     

  }),
  getters: {
    patients: (state) => state.statePatients,
    current:(state)=>state.stateCurrent,
    users:(state)=>state.stateUsers,
    doctors:(state)=>state.stateDoctors ,
    selectedUser:(state)=>state.stateSelectedUser
  },
  actions: {

    async getUsers(){
      const data = await axios.get('api/admin/doctor/users')
      this.stateUsers=data.data.users
    },

    async addDoctor(user){
      const data = await axios.post('api/admin/doctor/add',{user})

    },
    async getDoctors(){
      const data = await axios.get('api/admin/doctor')
      this.stateDoctors = data.data.doctors
    },

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

    },
    setUser(user){
      this.stateSelectedUser = user
      console.log(this.stateSelectedUser)
    }
   
  },
})