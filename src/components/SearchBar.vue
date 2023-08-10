<template>
      <q-input    @keydown.enter.prevent="submit" outlined bottom-slots v-model="text" label="Search"  maxlength="16" dense>
        

        
        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
      
        </template>

        <template v-slot:prepend>
        
          <q-icon name="search" />
        </template>
      </q-input>

</template>

<script>
import { ref } from 'vue'
export default {
    emits:['onSearch'],
    setup(props,{emit}){
        const text = ref('')

        return{
            text,
            submit:()=>{
               
                emit('onSearch',text.value)

                
               
            }
        }
    }

}
</script>

<style>

</style>