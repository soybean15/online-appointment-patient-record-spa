<template>
    <div class="">
      <div label="Click me" color="primary" @click="persistent = true">
        <slot></slot>
      </div>
      <q-dialog
        v-model="persistent"
        persistent
        transition-show="scale"
        transition-hide="scale"
      >
        <q-card class="bg-teal text-white" style="width: 100%">
          <q-card-section>
           
            //add Register form here


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
export default {
    setup(){
        const persistent = ref(false)
        return {persistent}
    }

}
</script>

<style>
.input{
    background-color: gray;
    border-color: grey;
}
</style>