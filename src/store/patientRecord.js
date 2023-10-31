import { defineStore } from 'pinia'
import axios from 'axios'
import { useAppointmentStore } from './adminAppointment'

export const usePatientRecordStore = defineStore('patientRecord',{

    state:()=>({

        statePatientRecords:null,
        statePatientRecord:{
            blood_type:null,
            height:null,
            weight:null,
            date_diagnosed:null,
            recommendation:[],
            diagnosis:[],
            appointment_id:null,
            user_id:null,
            blood_pressure:null
        },
        stateSelectedRow:null,
        stateDialog:{
           state: false
        }


    }),
    getters:{
        patientRecord:(state)=>state.statePatientRecord,
        selectedRow:(state)=>state.stateSelectedRow,
        dialog:(state)=>state.stateDialog
        
    },
    actions:{
        setData(row){
            
            this.stateSelectedRow = row
            this.statePatientRecord.user_id =row.user_id 
            this.statePatientRecord.appointment_id = row.id
            this.statePatientRecord.date_diagnosed =row.date_diagnosed
        },
        async addRecord(){
            const data = await axios.post('api/admin/patient/record/add',this.statePatientRecord)
        },

        
    }

})