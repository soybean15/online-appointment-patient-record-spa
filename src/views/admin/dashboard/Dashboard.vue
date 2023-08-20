<template>
  <div class="column p-3">
    <div class="column py-2">
      <div class="text-2xl font-semibold">Welcome back, {{ authStore.user.profile[0].firstname }}</div>
      <div class="font-secondary text-sm">Here's what happening today</div>
    </div>

    <div class="row">
      <div class="col-3 mx-1">
        <Stat class="col-4 "
        :title="{name:'Users',icon:'group'}"
        value="20,000"
      ></Stat>
      </div>
   
      <div class="col-3 mx-1">
      <Stat class="  mr-1"
        :title="{name:'Total Patients',icon:'personal_injury'}"
        value="46"
      ></Stat>
      </div>
      <div class="col-3 mx-1">
      <Stat class=" mr-1"
        :title="{name:'Today\'s Appointment',icon:'pending_actions'}"
        value="46"
      ></Stat>
      </div>
   
    </div>

    


    <div class="row">
      <div class="  col-5 mx-1 my-2 p-1 bg-surface rounded-md ">
        <apexchart width="400" type="bar" :options="options" :series="series"></apexchart>
      </div>
      <div class=" mx-1 my-2 p-1 bg-surface rounded-md ">
        <apexchart width="400" type="line" :options="options" :series="series"></apexchart>
      </div>

    </div>
  </div>
</template>

<script>
import Stat from "@/components/Stat.vue";
import { useAuthStore } from "@/store/auth";
import { onMounted, onUnmounted } from 'vue';


export default {
  components: {
    Stat,
  
  },

  setup() {
    const authStore = useAuthStore();
    console.log('dashboard Setup')
    onMounted(()=>{
      console.log('dashboard mounted')
    })

    onUnmounted(()=>{
      console.log('dashboard unmounted')
    })
    

    return { 
      authStore,
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    };
  },
};
</script>

<style>
</style>