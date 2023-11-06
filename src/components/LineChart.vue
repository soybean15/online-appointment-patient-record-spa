<template>
  <div id="chart">
    <apexchart
      type="line"
      
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
props:['title','data'],
  setup(props) {
    return {
      
        series: [
          {
            name: "Appointments",
            data: props.data.data,
          },
        ],
        chartOptions: {
      
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
            foreColor:'gray'
          },
          dataLabels: {
            enabled: false,
            style: {
          colors: ['#F44336', '#E91E63', '#9C27B0']
        }
          },
          stroke: {
            curve: "straight",
          },
          title: {
            text: props.title?? 'Title',
            align: "left",
          },
          grid: {
            row: {
              colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5,
            },
          },
          xaxis: {
            categories: props.data.categories,
           
          },
        },
      
    };
  },
};
</script>

<style>
.apexcharts-tooltip {
  color: #1b1a1a;
}
</style>