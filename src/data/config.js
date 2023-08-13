
import { ref } from "vue";
import { defineStore } from 'pinia'
// const getConfig =  () => {


//   const primary = localStorage.getItem('primary')

//   return { primary };
// };

// export default getConfig;


export const useConfigStore = defineStore('config', () => {
    const primary = ref(localStorage.getItem('primary'))

    return { primary };
  })