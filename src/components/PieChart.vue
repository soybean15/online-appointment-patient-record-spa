<template>
    
  <div class="p-4 bg-surface rounded-md" >
    <div>{{title}} </div>
    <apexchart
      type="donut"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: ["series", "labels","title"],
  setup(props) {
    return {
      chartOptions: {
        chart: {
          type: "donut",
        },

        labels: props.labels,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>