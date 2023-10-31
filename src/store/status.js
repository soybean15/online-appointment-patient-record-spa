import router from "@/router";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useStatusStore = defineStore('status',()=>{

    const title =  ref('')
    const message = ref('')

    const redirect = (name ,callback)=>{
        router.push({name:name})
        callback(title,message)
    }

    return {
        title,
        redirect,
        message
    }



})