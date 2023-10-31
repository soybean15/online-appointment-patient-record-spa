
import { ref } from "vue";
import { defineStore } from 'pinia'
import { useQuasar } from "quasar";
import { setCssVar } from 'quasar'
export const useConfigStore = defineStore('config', () => {
  const primary = ref(localStorage.getItem('primary'))

  setCssVar('primary',primary.value)

  const $q = useQuasar();



  const dark = ref(localStorage.getItem('dark') === 'true');

  $q.dark.set(dark.value);




  return { primary, dark, $q };
})