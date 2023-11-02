
import { ref } from "vue";
import { defineStore } from 'pinia'
import { useQuasar } from "quasar";
import { getCssVar } from 'quasar'
export const useConfigStore = defineStore('config', () => {
  
  const primary = ref(getCssVar('primary'))


  const $q = useQuasar();



  const dark = ref(localStorage.getItem('dark') === 'true');
  const darkBg = ref(getCssVar('dark'))
 
  console.log(primary.value)

  $q.dark.set(dark.value);





  return { primary, dark, $q ,darkBg};
})