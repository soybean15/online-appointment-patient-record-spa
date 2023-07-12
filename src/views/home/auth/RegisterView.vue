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
        <q-card class="bg-cyan text-black" style="width: 100%">
          <q-card-section>
           
            <div class="q-pa-md w-full" style="max-width: 500px">

                <q-list bordered class="flex justify-center w-full">
                    <q-item class="flex justify-center w-96"  >
                       <q-input standout v-model="ph" label="Name " class="bg-cyan-8 rounded mt-3 "     />

                    </q-item>
              
                    
                    <q-item>
                        <q-input standout v-model="ph" label="Email " class="bg-cyan-8 rounded  mt-3"  :dense="dense" />
                    </q-item>

                    <q-item>
                        <q-input standout v-model="ph" label="Password " class="bg-cyan-8 rounded mt-3" :dense="dense" />
                    </q-item>

                    <q-item>
                        <q-input standout v-model="ph" label=" Confirm Password" class="bg-cyan-8 rounded mt-3"  :dense="dense" />
                    </q-item>


                    <q-item >
                
                     <q-btn
                    :loading="loading"
                    color="secondary"
                    @click="onLogin"
                    label="Login"
                     />
        
                     </q-item>
             </q-list>
                <div class="q-gutter-y-md column w-full" >
            
            
                

               
              
            
               
    
            
                </div>
            </div>



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