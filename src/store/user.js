// stores/counter.js
import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import { useAuthStore } from './auth'

export const useUserStore = defineStore('user', ()=>{

  const records = ref(null)




  const getRecords = async()=>{
    const authStore = useAuthStore()
  
    await authStore.getUser()
    const user =  authStore.user
    const response = axios.get(`api/user/records/${user.id}`)

  }




  

  return {
    records,
    getRecords
  }
  
})