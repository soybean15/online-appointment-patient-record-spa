import { defineStore } from 'pinia'
import axios from 'axios'


export const useAppointmentStore = defineStore('admin_appointment', {
    state: () => ({

        statePending:null,
        stateApproved:null,
        stateCompleted:null

    }),


    getters: {
      pending:(state)=>state.statePending,
      approved:(state)=>state.stateApproved,
      completed:(state)=>state.stateCompleted

    },


    actions: {

        async index() {
            const data = await axios.get('api/admin/appointment')
            this.stateApproved = data.data.approved
            this.stateCompleted = data.data.completed
            this.statePending = data.data.pending
     

        },

        //gamitin na naten to
        async approve(row){
            const data = await axios.post('api/admin/appointment/approve',{
                id: row.id
            })//yan ang payload

        },
        async reject(row){
            const data = await axios.post('api/admin/appointment/reject',{
                id:row.id
            })
        },
        async getPending(path){
            console.log(path)
            const data = await axios.get(path)
           this.statePending = data.data.pending
        }
       

    },
})