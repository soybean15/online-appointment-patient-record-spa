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

    async getUsers(keyword){
      console.log(keyword)
      const data = await axios.post('api/admin/doctor/users',{keyword})
      this.stateUsers=data.data.users.data
    },

    async addDoctor(user,specialty){
  
      const data = await axios.post('api/admin/doctor/add',{user,specialty})
      
       this.getDoctors()
       this.getUsers('')

   
     

    },
    async getDoctors(){
      const data = await axios.get('api/admin/doctor')
      this.stateDoctors = data.data.doctors
    },

   
    async addServices(services){
  
      const data = axios.post('api/admin/doctor/services',{
        services:services,
       doctor_id: this.selectedUser.doctor.id
      })

    },
    async setSchedule(dayOfWeek){
      const data = axios.post('api/admin/doctor/schedule',{
        day_of_week:dayOfWeek,
        doctor_id: this.selectedUser.doctor.id
      })
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
    },

   
  },
  
})