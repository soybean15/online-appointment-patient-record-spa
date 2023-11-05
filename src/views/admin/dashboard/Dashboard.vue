<template>
  <div class="column p-3">
    <div class="column py-2">
      <div class="text-2xl font-semibold">
        Welcome back, {{ authStore.user.profile[0].firstname }}
      </div>
      <div class="font-secondary text-sm">Here's what happening today</div>
    </div>

    <div class="row">
      <div class="col-3 mx-1">
        <Stat
          class="col-4"
          :title="{ name: 'Users', icon: 'group' }"
          :value="dashboard == null ? 0 : dashboard.user_count"
          v-if="dashboard">
        <template v-slot:helper>
          <div class="row items-center ">
              
              <q-chip size=".8em" dense color="primary" class="text-xs font-secondary ">{{`${dashboard.patient_count} active patient`}}</q-chip>
              <q-chip size=".8em"  dense color="blue" class="text-xs font-secondary ">{{`${dashboard.doctor_count} registered Doctor`}}</q-chip>
            </div>
        </template>
      </Stat>
      </div>

      <div class="col-3 mx-1">
        <Stat
          class="mr-1"
          :title="{ name: 'This Months Total Appointments', icon: 'personal_injury' }"
          :value="dashboard == null ? 0 : dashboard.record_count_current"
          v-if="dashboard">


          <template v-slot:helper>
            <div class="row items-center ">
              <q-icon size="20px" color="green" :name="dashboard.record_count_current>dashboard.record_count_previous?'arrow_drop_up':'arrow_drop_down'" />
              <div class="text-xs font-secondary">{{computeData(dashboard.record_count_current,dashboard.record_count_previous)}}% increase this month</div>
            </div>
          </template>
      </Stat>
      </div>
      <div class="col-3 mx-1">
        <Stat
          class="mr-1"
          :title="{ name: 'This week Appointments', icon: 'pending_actions' }"
          :value="dashboard.current_week"
         v-if="dashboard">
          <template v-slot:helper>
            <div class="row items-center ">
              <q-icon size="20px" color="green" :name="dashboard.current_week>dashboard.last_week?'arrow_drop_up':'arrow_drop_down'" />
              <div class="text-xs font-secondary">{{computeData(dashboard.current_week,dashboard.last_week)}}% increase this week</div>
            </div>
          </template>
        </Stat>
      </div>
    </div>

    <div class="row">
      <div class="col-5 mx-1 my-2 p-1 bg-surface rounded-md">
        <BarChart />
      </div>
      <div class="mx-1 my-2 p-1 bg-surface rounded-md"></div>
    </div>
  </div>
</template>

<script>
import Stat from "@/components/Stat.vue";
import { useAuthStore } from "@/store/auth";
import { onMounted } from "vue";
import BarChart from "@/components/BarChart.vue";
import { useDashboardStore } from "@/store/dashboard";
import { storeToRefs } from "pinia";

export default {
  components: {
    Stat,
    BarChart,
  },

  setup() {
    const authStore = useAuthStore();
    const dashboardStore = useDashboardStore();
    const { dashboard } = storeToRefs(dashboardStore);

    onMounted(() => {
      dashboardStore.index();
    });

    return {
      authStore,
      dashboardStore,
      dashboard,
      computeData:(val1,val2)=>{
        let result = 0

        if (val1>val2){
           result = val1 - val2
          
        }else if(val1<val2){
           result = val2 - val1
        }else{
          return 0
        }

        return (result/val1)*100
      }
    };
  },
};
</script>

<style>
</style>