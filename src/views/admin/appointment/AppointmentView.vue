<template>
  <div class="row">

    <div class="col-12">
        <TablesContainer/>
    </div>

  </div>
</template>

<script>
import TablesContainer from './components/TablesContainer.vue';
import {useAppointmentStore} from '@/store/adminAppointment'
import { onMounted } from 'vue';
export default {
    components:{
        TablesContainer
    },
    setup(){
        const appointmentStore = useAppointmentStore()

        onMounted(()=>{
            appointmentStore.index()
        })


    }

}
</script>

<style>

</style>