import { defineStore } from 'pinia'
import axios from 'axios'


export const useSystemStore = defineStore('system', {
    state: () => ({

        systemSettings:null
    }),
    getters:{
        settings:(state)=>state.systemSettings
    },
    actions:{
        async index(){
            const data = await axios.get('api')
            this.systemSettings = data.data

            console.log(this.systemSettings)
        }

    }

})