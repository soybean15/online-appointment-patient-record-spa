<template>
 <div>Services</div>
 <ul>
    <li v-for="service in services" :key="service.id">
    
        {{ service.name }}   {{ service.price }} 
    </li>
 </ul>
</template>

<script>
import {useServiceStore} from '@/store/service'
import { onMounted } from 'vue'
export default {

    setup(){
        const serviceStore = useServiceStore()

        onMounted(()=>{
            serviceStore.getServices()
        })

        return{
            services: serviceStore.services
        }
    }

}
</script>

<style>

</style>