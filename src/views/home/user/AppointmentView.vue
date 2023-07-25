<template>
    <div class="row">

        <div class="col-5"> 
            <AppoinmentsList/>
        </div>
      
        <div class="col-4"> 
            <AppoinmentsList/>
        </div>

    </div>

</template>

<script>
import AppoinmentsList from './components/AppoinmentsList.vue'

export default {
    components:{AppoinmentsList}

}
</script>

<style>

</style>