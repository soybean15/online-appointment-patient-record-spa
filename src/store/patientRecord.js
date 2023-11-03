import { defineStore } from 'pinia'
import axios from 'axios'


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
            type:null,
            blood_pressure:null
        },
        stateSelectedRow:null,
        stateDialog:{
           state: false
        },
        


    }),
    getters:{
        patientRecord:(state)=>state.statePatientRecord,
        selectedRow:(state)=>state.stateSelectedRow,
        dialog:(state)=>state.stateDialog
        
    },
    actions:{
        setData(row){
            console.log(row)
            
            this.stateSelectedRow = row
            this.statePatientRecord.user_id =row.user_id ? row.user_id :row.id
            this.statePatientRecord.appointment_id = row.id
            this.statePatientRecord.date_diagnosed =row.date_diagnosed
        },
        async addRecord(type){
            this.statePatientRecord.type  = type
            await axios.post('api/admin/patient/record/store',this.statePatientRecord)
        },
        async getLast(){

            try{
                const response= await axios.post(`api/admin/patient/last/${this.statePatientRecord.user_id}`)
                this.statePatientRecord.height = response.data.last.height
                this.statePatientRecord.weight = response.data.last.weight
                this.statePatientRecord.blood_type = response.data.last.blood_type
                this.statePatientRecord.blood_pressure = response.data.last.blood_pressure
    
            }catch(e){

            }
        
        }

        
    }

})