import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const  useNewsStore = defineStore('news',()=>{


    const news = ref(null)


    const getNews= async()=>{

        const response = await axios.get('api/news')
        news.value = response.data

    }

    return {
        getNews,
        news
    }


})