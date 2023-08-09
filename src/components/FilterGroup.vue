<template>
  <div class="row justify-between items-center">
    <div class="text-xl px-2">Filter:</div>
    <q-btn-group outline>
      <q-btn
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
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date v-model="dateRange" range>
            <div class="row items-center justify-end q-gutter-sm">
              <q-btn label="Cancel" color="primary" flat v-close-popup />
              <q-btn
                label="OK"
                color="primary"
                flat
                @click="onDateRange"
                v-close-popup
              />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-btn>
    </q-btn-group>
  </div>
</template>

<script>
import { ref } from "vue";
import { format } from "date-fns";

export default {
  emits: ["filterByRange"],
  setup(props, { emit }) {
    const currentDate = ref(format(new Date(), "yyyy/MM/dd"));
    const active = ref("all");

    const dateRange = ref({ from: currentDate.value, to: currentDate.value });

    return {
      active,
      currentDate,
      dateRange,
      onClick: (value) => {
        active.value = value;
      },
      onDateRange: () => {
        console.log(dateRange.value)
    
        emit('filterByRange',dateRange.value)
       
      },
    };
  },
};
</script>

<style>
</style>