import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDoctorStore = defineStore('doctor', () => {


    const doctors = ref(null)

    
    const  users =ref(null)
    const selectedUser = ref(null)
    const getUsers = async (keyword) => {
        const response = await axios.post('api/admin/doctor/users', { keyword })
        users.value = response.data.users.data
    }

    const getDoctors = async () => {
       const response =  await axios.get('api/admin/doctor')
        doctors.value = response.data.doctors
    }


    const addDoctor = async (user, specialty) => {

        await axios.post('api/admin/doctor/add', { user, specialty })

        getDoctors()
        getUsers('')




    }

    const setUser = (user) => {
        console.log(user)
        selectedUser.value = user
    }

    const setDoctorTime = async () => {

        const data = await axios.post('api/admin/doctor/time', {
            id: selectedUser.value.doctor.id,
            from: selectedUser.value.doctor.from,
            to: selectedUser.value.doctor.to
        })


    }

       
    const  addServices = async(services)=>{
  
        const response = await axios.post('api/admin/doctor/services',{
          services:services,
         doctor_id: selectedUser.value.doctor.id
        })
  
        console.log(response)
  
        selectedUser.value.doctor = response.data.doctor
  
      }


    const  setSchedule = async(dayOfWeek)=>{
        axios.post('api/admin/doctor/schedule',{
          day_of_week:dayOfWeek,
          doctor_id: selectedUser.value.doctor.id
        })
      }
  

    //   const  getPatients = async(path,keyword)=>{
    //       if(!path){
    //           path = 'api/admin/patient'
    //       }
        
    //        const data = await axios.post(path,{keyword})
       
          
    //       this.statePatients = data.data.patients
    //   },
  
  
  
    //   async searchPatient(keyword){
    //     const data  = await axios.post('api/admin/patient/search',{keyword})
    //     this.statePatients = data.data.results
  
    //   },



    return {
        getUsers,
        doctors,
        getDoctors,
        addDoctor,
        setUser,
        setDoctorTime,
        setSchedule,
        addServices,
        selectedUser,
        users
    }



})