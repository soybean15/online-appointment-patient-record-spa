<template>
    <AddDoctorDialog/>
    <DoctorsTable/>

</template>

<script>
import DoctorsTable from './components/DoctorsTable.vue';
import AddDoctorDialog from './dialog/AddDoctorDialog.vue';
import { useAdminStore } from '@/store/admin';
import { onMounted } from 'vue';
export default {

    components:{
        DoctorsTable,
        AddDoctorDialog
    },
    setup(){
        const userStore = useAdminStore().userStore

        onMounted(()=>{
            userStore.getDoctors()
        })
    }
}
</script>

<style>

</style>