<template>
  <apexchart
    width="500"
    type="bar"
    :options="options"
    :series="series"
  ></apexchart>
</template>

<script>
import ApexCharts from 'vue3-apexcharts'; // Import the ApexCharts component

export default {
  components: {
    apexchart: ApexCharts, // Register the ApexCharts component
  },
  data() {
    return {
      options: {
        chart: {
          type: 'bar',
          height: 500,
          
        },
        plotOptions: {
          bar: {
            
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: true,
        },
        xaxis: {
          categories: [
            'Januay',
            'February',
            'March',
            'April',
            'Italy',
            'France',
            'Japan',
            'United States',
            'China',
            'Germany',
          ],
        },
       
      },
      series: [
        {
          data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        },
      ],
    };
  },
};
</script>

<style>
</style>
