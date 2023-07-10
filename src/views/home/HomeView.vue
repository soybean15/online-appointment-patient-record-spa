<template>
  <div class="home">
    
  </div>
</template>

<script>
import {useAuthStore} from '@/store/auth'


export default {
  name: 'HomeView',
  components: {
    
  },
  setup(){
    const authStore = useAuthStore()
    authStore.getUser()
  }
}
</script>
