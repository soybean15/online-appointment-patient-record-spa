<template>
  <Line :data="data" :options="options" />
</template>
  
  <script >
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  components: {
    Line,
  },
  setup() {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#f87979",
          borderColor: "#32a83a", // Change the line color here
          data: [40, 39, 10, 40, 39, 80, 40],
        },
      ],
    };

    const options = {
        responsive: true,
     maintainAspectRatio: false
    }
    return {data , options};
  },
};
</script>
  