<template>
    <div class="q-pa-md q-gutter-sm">
      <div  label="Click me" color="primary" @click="persistent = true" ><slot></slot></div>
  
      <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
        <q-card class="bg-teal text-white" style="width: 100%">
          <q-card-section>
            <LoginViewVue @onClose = 'closeDialog' />
          </q-card-section>
  
          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

  </template>
  
  <script>
  import { ref } from 'vue'
  
import LoginViewVue from '@/views/home/auth/LoginView.vue'
  
  export default {
    components:{LoginViewVue},
    setup () {
        const persistent =ref(false)

        const closeDialog=()=>{
            persistent.value = false
          
        }
      return {
        persistent,
        closeDialog
      }
    }
  }
  </script>
  