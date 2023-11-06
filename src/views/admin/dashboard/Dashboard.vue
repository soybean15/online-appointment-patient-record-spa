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
          v-if="dashboard"
        >
          <template v-slot:helper>
            <div class="row items-center">
              <q-chip
                size=".8em"
                dense
                color="primary"
                class="text-xs font-secondary"
                >{{ `${dashboard.patient_count} active patient` }}</q-chip
              >
              <q-chip
                size=".8em"
                dense
                color="blue"
                class="text-xs font-secondary"
                >{{ `${dashboard.doctor_count} registered Doctor` }}</q-chip
              >
            </div>
          </template>
        </Stat>
      </div>

      <div class="col-3 mx-1">
        <Stat
          class="mr-1"
          :title="{
            name: 'This Months Total Appointments',
            icon: 'personal_injury',
          }"
          :value="dashboard == null ? 0 : dashboard.record_count_current"
          v-if="dashboard"
        >
          <template v-slot:helper>
            <div class="row items-center">
              <q-icon
                size="20px"
                :color="
                  dashboard.record_count_current >
                  dashboard.record_count_previous
                    ? 'green'
                    : 'red'
                "
                :name="
                  dashboard.record_count_current >
                  dashboard.record_count_previous
                    ? 'arrow_drop_up'
                    : 'arrow_drop_down'
                "
              />
              <div class="text-xs font-secondary">
                {{
                  computeData(
                    dashboard.record_count_current,
                    dashboard.record_count_previous,
                    "month"
                  )
                }}
              </div>
            </div>
          </template>
        </Stat>
      </div>
      <div class="col-3 mx-1">
        <Stat
          class="mr-1"
          :title="{ name: 'This week Appointments', icon: 'pending_actions' }"
          :value="dashboard.current_week"
          v-if="dashboard"
        >
          <template v-slot:helper>
            <div class="row items-center">
              <q-icon
                size="20px"
                :color="
                  dashboard.current_week > dashboard.last_week ? 'green' : 'red'
                "
                :name="
                  dashboard.current_week > dashboard.last_week
                    ? 'arrow_drop_up'
                    : 'arrow_drop_down'
                "
              />
              <div class="text-xs font-secondary">
                {{
                  computeData(
                    dashboard.current_week,
                    dashboard.last_week,
                    "week"
                  )
                }}
              </div>
            </div>
          </template>
        </Stat>
      </div>
    </div>

    <div class="row">
      <div class="col-8 p-1 rounded-md">
        <LineChart
          :title="'Appointments by Month'"
          :data="lineChartData"
          v-if="lineChartData"
        />
      </div>
      <div class="col-4 column p-1 rounded-md">
        <PieChart
          :series="[
            dashboard.online_record_count_current,
            dashboard.walkin_record_count_current,
          ]"
          :labels="['Online', 'Walk in']"
          :title="'Appointment Details'"
          v-if="dashboard"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Stat from "@/components/Stat.vue";
import { useAuthStore } from "@/store/auth";
import { onMounted } from "vue";
import { useDashboardStore } from "@/store/dashboard";
import { storeToRefs } from "pinia";

import LineChart from "@/components/LineChart.vue";
import PieChart from "@/components/PieChart.vue";

export default {
  components: {
    Stat,
    LineChart,
    PieChart,
  },

  setup() {
    const authStore = useAuthStore();
    const dashboardStore = useDashboardStore();
    const { dashboard, lineChartData } = storeToRefs(dashboardStore);

    onMounted(() => {
      dashboardStore.index();
      dashboardStore.appointmentByMonth();
    });

    return {
      authStore,
      dashboardStore,
      lineChartData,
      dashboard,
      computeData: (val1, val2, label) => {
        let result = 0;

        console.log(val1, val2);
        if (val1 > val2) {
          result = val1 - val2;
          return `${(result / val1) * 100}% increase this ${label}`;
        } else if (val1 < val2) {
          result = val2 - val1;

          return `${(result / val2) * 100}% decrease this ${label}`;
        } else {
          return "No Changes";
        }
      },
    };
  },
};
</script>

<style>
</style>