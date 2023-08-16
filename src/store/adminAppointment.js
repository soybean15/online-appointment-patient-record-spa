import { defineStore } from 'pinia'
import axios from 'axios'


export const useAppointmentStore = defineStore('admin_appointment', {
    state: () => ({

        //initial data
        stateData:{
            pending:null,
            approved:null,
            attended:null,
            appointments:null,
            canceled_rejected:null
        },

        stateStatus:null,

       
        stateSelectedRow:null

    }),


    getters: {
      pending:(state)=>state.stateData.pending,
      approved:(state)=>state.stateData.approved,
      attended:(state)=>state.stateData.attended,
      selectedRow:(state)=>state.stateSelectedRow,
      status:(state)=>state.stateStatus,
      appointments:(state)=>state.stateData.appointments,
      canceled_rejected:(state)=>state.stateData.canceled_rejected

    },


    actions: {
        setStatus(status){
            this.stateStatus=status
            console.log(this.stateStatus)
        },

        async index() {
            const data = await axios.get('api/admin/appointment')
            this.stateData.approved = data.data.approved
            this.stateData.attended = data.data.attended
            this.stateData.pending = data.data.pending
             this.stateData.appointments = data.data.appointments
            this.stateData.canceled_rejected = data.data.canceled_rejected
        
     

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

        async getData(status,path){
           
        
            const data = await axios.get(path)

            // if(!status){
               
            //     this.stateData['appointments'] = data.data['appointments']
            // }else{
            //     this.stateData[status] = data.data[status]
            // }

            switch (status) {
                case null:
                    console.log('gello')
                    this.stateData['appointments'] = data.data['appointments'];
                    break;
                // case 'pending':
                //     this.stateData['pending'] = data.data['pending'];
                //     break;
                // case 'approved':
                //     this.stateData['approved'] = data.data['approved'];
                //     break;
                // case 'completed':
                //     this.stateData['attended'] = data.data['completed'];
                //     break;
              
                case 'canceled_rejected':
                    this.stateData['canceled_rejected'] = data.data['canceled_rejected'];
                    break;
                // Add more cases as needed for different statuses
                default:
                    this.stateData[status] = data.data[status];
                    break;
            }
            
           
        },

        async getApprovedByRange(dateRange){
            
            const data = await axios.post('api/admin/appointment/approved-with-range',{date:dateRange})

            this.stateData.approved = data.data.approved
        },
        
        async setRow(row){

            this.stateSelectedRow = row

        },
        async search(status, text){
            console.log(status)
            const data = await axios.post('api/admin/appointment/search',{
                status:status,
                search_item:text
            })

          
            // if(!status){
               
            //     this.stateData['appointments'] = data.data['appointments']
            // }else{
            //     this.stateData[status] = data.data[status]
            // }


            switch (status) {

                case null:
                    console.log('appointments')
                    this.stateData['appointments'] = data.data['appointments'];
                    break;
                // case 'pending':
                //     this.stateData['pending'] = data.data['pending'];
                //     break;
                // case 'approved':
                //     this.stateData['approved'] = data.data['approved'];
                //     break;
                // case 'completed':
                //     this.stateData['attended'] = data.data['completed'];
                //     break;
                case 'canceled_rejected':
                    console.log('canceled_rejected')
                    this.stateData['canceled_rejected'] = data.data['appointments'];
                    break;
                // Add more cases as needed for different statuses
                default:
                    console.log(status)
                    this.stateData[status] = data.data['appointments'];
                    break;
            }


        },
        
        async filter(action){
            const data = await axios.post('api/admin/appointment/filter-by-action',{
                status:this.stateStatus,
                action:action
            })
            this.stateData[this.stateStatus] = data.data.appointments
        }
      
       
       

    },
})