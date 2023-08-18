<template>
  <Bar :data="data" :options="options" />
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {

  components: {
    Bar
  },
  setup() {
    return {
      data: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] , backgroundColor: [
              'rgba(255, 99, 132, 0.5)', // Color for January
              'rgba(54, 162, 235, 0.5)', // Color for February
              'rgba(75, 192, 192, 0.5)', // Color for March
            ]}]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    }
  }
}
</script>