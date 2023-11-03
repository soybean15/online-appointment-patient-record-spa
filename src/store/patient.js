import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";


export const usePatientStore = defineStore('patient',()=>{

    const patients = ref(null)
    const selectedUser = ref(null)

    const record = ref(null)
    const  getPatients =async(path,keyword)=>{
        if(!path){
            path = 'api/admin/patient'
        }
      
         const data = await axios.post(path,{keyword})
     
        
         patients.value = data.data.patients
    
    }

    const selectUser = (user)=>{
        selectedUser.value =user
        if(selectedUser.value.patient_record){
            const rows =selectedUser.value.patient_record
            record.value = selectedUser.value.patient_record[rows.length - 1]
        }      
        

    }



    const  searchPatients = async(keyword)=>{
      const data  = await axios.post('api/admin/patient/search',{keyword})
      patients.value= data.data.results

    }


    

    return{
        patients,
        getPatients,
        searchPatients,
        selectedUser ,
        record,
        selectUser
        
    }


})