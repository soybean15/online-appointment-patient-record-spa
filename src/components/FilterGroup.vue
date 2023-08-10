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

      <slot name="pop-up"> </slot>
      <!-- <q-btn
        dense
        :outline="active != 'all'"
        @click="onClick('all')"
        color="brown"
        label="All"
        icon-right="calendar_month"
      />
      <q-btn
        dense
        color="brown"
        label="Today"
        icon-right="today"
        @click="onClick('today')"
        :outline="active != 'today'"
      />
      <q-btn
        dense
        :outline="active != 'missed'"
        @click="onClick('missed')"
        color="brown"
        label="Missed"
        icon-right="pending_actions"
      />
      <q-btn
        dense
        :outline="active != 'range'"
        @click="onClick('range')"
        color="brown"
        label="Date(s)"
        icon-right="date_range"
      >
        
      </q-btn> -->
    </q-btn-group>


  </div>
</template>

<script>
import { ref } from "vue";


export default {
  props: ['buttons'],
  setup(props) {


    const active = ref(props.buttons[0].action);

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