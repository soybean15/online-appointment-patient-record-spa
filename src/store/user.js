// stores/counter.js
import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import { useAuthStore } from './auth'

export const useUserStore = defineStore('user', ()=>{

  const records = ref(null)
  const record = ref(null)
  const pending =ref(null)




  const getRecords = async()=>{
    const authStore = useAuthStore()
  
    await authStore.getUser()
    const user =  authStore.user
    const response = await axios.get(`api/user/records/${user.id}`)

    records.value = response.data.records

  }

  const getRecordDetails= async(id)=>{
    const response = await axios.get(`api/user/record/${id}`)
    record.value= response.data.record
  }

  const getDoctorAppointment = async(id)=>{
      const response = await axios.get(`api/user/doctor/${id}`)
      pending.value = response.data.pendingAppointments

  }




  

  return {
    records,
    record,
    getRecords,
    getRecordDetails,
    getDoctorAppointment,
    pending
  }
  
})