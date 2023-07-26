<template>
    <div class="row">

        <div class="col-9"> 
            <AppoinmentsList/>
        </div>
      
        <div class="col-3"> 
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