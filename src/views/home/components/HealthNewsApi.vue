<template>
  
  <div class="text-sm " v-if="news">

    <q-list  padding class="" >
        
     <q-item-label class="text-primary" header>Health news</q-item-label>

    
     <q-scroll-area style="height: 400px; ">
      <q-item clickable v-for="item in news.articles" :key="item.url" @click="redirect(item.url) ">
        <q-item-section top thumbnail >
          <img :src="item.urlToImage">
        </q-item-section>

        <q-item-section>
          <q-item-label>{{item.title}}</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top >
          <q-item-label class="text-primary" caption>{{item.source.name}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-scroll-area>

    </q-list>

  </div>
</template>

<script>
import {useNewsStore} from '@/store/newsapi'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
export default {
    setup(){
        const newsStore = useNewsStore()
        const {news}= storeToRefs(newsStore)
        onMounted(()=>{
            newsStore.getNews()
        })

        return {
            news,
            redirect:(url)=>{

                window.open(url, '_blank');
            }
        }
    }
}
</script>

<style>

</style>