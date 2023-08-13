import { defineStore } from 'pinia'
import axios from 'axios'


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
            this.systemPrimaryColor = data.data.theme_color == null ? "#49b265" : this.systemSettings.theme_color


            console.log( `${localStorage.getItem('primary')} ${data.data.theme_color}`)
            if(localStorage.getItem('primary')==='null'  || localStorage.getItem('primary') != data.data.theme_color ){
                console.log('no COlor')
              
                console.log(localStorage.getItem('primary'))
                localStorage.setItem('primary',data.data.theme_color);
            }

            console.log(localStorage.getItem('primary'))
            // if (primary.value !== systemStore.primaryColor) {
            //     primary.value = systemStore.primaryColor;
            //     localStorage.setItem('primary', primary.value);
            // }

         
        }

    }

})