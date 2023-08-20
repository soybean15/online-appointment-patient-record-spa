
import { ref } from "vue";
import { defineStore } from 'pinia'
// const getConfig =  () => {


//   const primary = localStorage.getItem('primary')

//   return { primary };
// };

// export default getConfig;


export const useConfigStore = defineStore('config', () => {
  const primary = ref(localStorage.getItem('primary'))

  const isDark = ref(localStorage.getItem('darkmode'))



  if (isDark == 'null') {
    isDark.value = true
  }
  
  const darkModeToggle = () => {
    console.log('darkmode toggle')
    isDark.value = !isDark.value
    console.log(isDark.value)
    localStorage.setItem('darkmode',isDark.value)


  }



  return { primary, isDark, darkModeToggle };
})