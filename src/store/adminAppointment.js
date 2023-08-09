import { defineStore } from 'pinia'
import axios from 'axios'


export const useAppointmentStore = defineStore('admin_appointment', {
    state: () => ({

        stateData:{
            pending:null,
            approved:null,
            attended:null,
        },

       
        stateSelectedRow:null

    }),


    getters: {
      pending:(state)=>state.stateData.pending,
      approved:(state)=>state.stateData.approved,
      attended:(state)=>state.stateData.attended,
      selectedRow:(state)=>state.stateSelectedRow

    },


    actions: {

        async index() {
            const data = await axios.get('api/admin/appointment')
            this.stateData.approved = data.data.approved
            this.stateData.attended = data.data.attended
            this.stateData.pending = data.data.pending
     

        },

     
        async approve(){
            const data = await axios.post('api/admin/appointment/approve',{
                id: this.selectedRow.id
            })

            this.stateSelectedRow.done = 'approved'

        },
        async reject(remarks){
            const data = await axios.post('api/admin/appointment/reject',{
               id: this.stateSelectedRow.id,
               remarks:remarks
            })


            this.stateSelectedRow.done = 'rejected'
        },
        async reschedule(newSchedule){
            const  data = await axios.post('api/admin/appointment/change-schedule',{
                id: this.stateSelectedRow.id,
                newSchedule: newSchedule
            })

            this.stateSelectedRow.done = 'rescheduled'

        },

        async getPending(path){
         
            const data = await axios.get(path)
           this.stateData.pending = data.data.pending
        },
        async getAttended(path){
          
            const data = await axios.get(path)
           this.stateData.attended = data.data.attended
        },

        async getApprovedByRange(dateRange){
            console.log(dateRange)

            const data = await axios.post('api/admin/appointment/approved-with-range',{date:dateRange})

            this.stateData.approved = data.data.approved
        },
        
        async setRow(row){

            this.stateSelectedRow = row

        },
        async searchApproved(status, text){

            const data = await axios.post('api/admin/appointment/search',{
                status:status,
                search_item:text
            })
            




        },
      
       
       

    },
})