<template>
    <div class="p-10">
        <div class="text-lg">{{title}}</div>
        <div class="font-secondary"> {{message}}</div>
        <a class="cursor-pointer text-primary underline" @click="statusStore.redirect('home')">Back to Home </a>
    </div>

</template>

<script>
import {useStatusStore} from '@/store/status'

import { storeToRefs } from 'pinia'
export default {
    setup(){
        const statusStore = useStatusStore()

        const {title,message} = storeToRefs(statusStore)


        return {
            title,
            message,
            statusStore
        }
    }
}
</script>

<style>

</style>