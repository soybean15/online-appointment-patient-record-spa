<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Add Doctor" color="primary" @click="persistent = true" />

    <q-dialog
      v-model="persistent"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="" style="width: 700px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">Add Doctor</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            
          <div >
            <q-input
              outlined
              v-model="text"
              label="Search"
              @keydown.enter.prevent="submit"
              v-model.trim="key"
              dense
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="py-2">Double click to select</div>
          <q-scroll-area class="p-2" style="height: 200px; max-width: 100%">
            <div @dblclick="submit(user)" v-for="user in  userStore.users" :key="user.id" class="caption cursor-pointer">
              {{ user.profile[0].firstname }}
            </div>
            <template v-slot:loading>
              <div class="row justify-center q-my-md">
                <q-spinner-dots color="primary" size="40px" />
              </div>
            </template>
          </q-scroll-area>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          
          <q-btn flat label="close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
  
  <script>
import { onMounted, ref } from "vue";
import { useAdminStore } from "@/store/admin";

export default {
  setup() {
    const userStore = useAdminStore().userStore;
    
    const persistent= ref(true)
  
    onMounted(() => {
      userStore.getUsers();
    });

    return {
   persistent,
      userStore,
      onSubmit: () => {
       
      },
      submit: async(user) => {
       console.log(user)
        await userStore.addDoctor(user)

        persistent.value= false
      },
     
      
    };
  },
};
</script>
  