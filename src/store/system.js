import { defineStore } from 'pinia'
import axios from 'axios'

import { setCssVar } from 'quasar'

export const useSystemStore = defineStore('system', {
    state: () => ({

        systemSettings: null,
        systemPrimaryColor: null
    }),
    getters: {
        settings: (state) => state.systemSettings,
        primaryColor: (state) => state.systemPrimaryColor
    },
    actions: {
        async index() {
            const data = await axios.get('api')
            this.systemSettings = data.data
            this.systemPrimaryColor = data.data.theme_color.primary == null ? "#49b265" :data.data.theme_color.primary

            if(localStorage.getItem('primary')==='null'  || localStorage.getItem('primary') != data.data.theme_color.primary ){

             
           
                setCssVar('primary', data.data.theme_color.primary)


                localStorage.setItem('primary',data.data.theme_color.primary);
              
            }

          

         
        },
        async changeTheme(theme){
            const data = await axios.post('api/admin/settings/theme',{
                primary:theme.primary
            })
            setCssVar('primary', theme.primary)
        }

    }

})