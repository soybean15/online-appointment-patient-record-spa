import { defineStore } from 'pinia'
import axios from 'axios'


export const useAppointmentStore = defineStore('admin_appointment', {
    state: () => ({

        statePending:null,
        stateApproved:null,
        stateAttended:null,
        stateSelectedRow:null

    }),


    getters: {
      pending:(state)=>state.statePending,
      approved:(state)=>state.stateApproved,
      attended:(state)=>state.stateAttended,
      selectedRow:(state)=>state.stateSelectedRow

    },


    actions: {

        async index() {
            const data = await axios.get('api/admin/appointment')
            this.stateApproved = data.data.approved
            this.stateAttended = data.data.attended
            this.statePending = data.data.pending
     

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
           this.statePending = data.data.pending
        },
        async getAttended(path){
          
            const data = await axios.get(path)
           this.stateAttended = data.data.attended
        },

        async getApprovedByRange(dateRange){

            const data = await axios.post('api/admin/appointment/approved-with-range',{date:dateRange})

            this.stateApproved = data.data.approved
        },
        
        async setRow(row){

            this.stateSelectedRow = row

        }
       
       

    },
})