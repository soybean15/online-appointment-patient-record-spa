<template>
    <span>
        <slot name="button" :open="open" ></slot>
      
      <q-dialog v-model="dialog" position="top">
        <q-card style="width: 350px">

            <slot name="title"></slot>
        <slot name="prompt"></slot>
         <slot name="actions" :close="close"></slot>
        </q-card>
      </q-dialog>
    </span>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup () {
      const dialog = ref(false)

  
      return {
        dialog,
     
        open () {
         
          dialog.value = true
        },
        close(){
            dialog.value=false
        }
      }
    }
  }
  </script>
  