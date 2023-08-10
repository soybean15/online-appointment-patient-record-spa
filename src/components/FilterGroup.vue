<template>
  <div class="row justify-between items-center">
    <div class="text-xl px-2">Filter:</div>
    <q-btn-group outline>
      <q-btn
        v-for="button in buttons"
        :key="button.label"
        :outline="active != button.action"
        @click="onClick(button.onClick, button.action)"
        color="brown"
        :label="button.label"
        :icon-right="button.icon"
      >
      </q-btn>

      <slot name="pop-up" > </slot>
  
    </q-btn-group>


  </div>
</template>

<script>
import { ref, watch } from "vue";


export default {
  props: ['buttons'],
  setup(props) {


    const active = ref(props.buttons[0].action);


    watch(active,()=>{
      console.log(active)
    })
    

    return {
      active,
      onClick: (click, value) => {
        click();
        active.value = value;
      },
     
      
    };
  },
};
</script>

<style>
</style>