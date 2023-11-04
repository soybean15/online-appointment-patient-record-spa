<template>
    <div>
        {{serviceStore.activeServices}}
    </div>
  
</template>

<script>
import {useServiceStore} from '@/store/service'

export default {
    setup(){
        const serviceStore = useServiceStore()

        return{
            serviceStore
        }
    }
}
</script>

<style>

</style>