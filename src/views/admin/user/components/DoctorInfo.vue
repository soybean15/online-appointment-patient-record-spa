<template>
  <div>
    <div class="column bg-surface rounded-lg">
        <div>BasicInfo</div>
        
        <div v-if="userStore.selectedUser">
            <div>{{ userStore.selectedUser.email }}</div>
        </div>

    </div>
  </div>
</template>

<script>
import {useAdminStore} from '@/store/admin'
export default {
    setup(){
        const userStore = useAdminStore().userStore

        return {
            userStore
        }

    }

}
</script>

<style>

</style>