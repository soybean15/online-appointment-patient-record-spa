<template>
    <div class=" q-gutter-sm">
      <q-btn label="Edit" icon="edit"  color="primary" @click="persistent = true" />
  
      <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
        <q-card class="bg-teal text-white" style="width: 700px; max-width: 80vw;" >
          <q-card-section>
            <div class="text-h6">Edit Profile</div>
          </q-card-section>
  
          <q-card-section class="q-pt-none">
           
            


            Your Code here


          </q-card-section>
  
          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="Close" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      persistent: ref(false)
    }
  }
}
</script>
<style>

</style>