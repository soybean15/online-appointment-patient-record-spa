<template>
   
      <q-list padding>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon class="" name="book" />
          </q-item-section>

          <q-item-section> Appointment </q-item-section>
        </q-item>

        <q-item :active="false" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="event" />
          </q-item-section>

          <q-item-section> Calendar </q-item-section>
        </q-item>

        <q-item :active="true"  clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>

          <q-item-section> Logs </q-item-section>
        </q-item>

        <q-item clickable class="" v-ripple>
          <q-item-section avatar>
            <q-icon name="dark_mode" />
          </q-item-section>

          <q-item-section> Dark Mode </q-item-section>
          <q-item-section>
            <q-toggle v-model="value" color="primary" @click=" $q.dark.toggle();"/>
          </q-item-section>
        </q-item>

        <q-item >
   

          <q-item-section> 
            <AuthDialog>Account</AuthDialog>
           
          </q-item-section>
        </q-item>
        <hr>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="login" />
          </q-item-section>

          <q-item-section> 
            <LoginView>Sign in</LoginView>
           
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="person_add_alt" />
          </q-item-section>

          <q-item-section> 
            <RegisterView > Register</RegisterView>
           
          </q-item-section>
        </q-item>
      </q-list>
   
</template>

<script>
import LoginView from '@/views/home/auth/LoginView';
import RegisterView from '@/views/home/auth/RegisterView.vue';
export default {
    components:{LoginView, RegisterView},
   
    setup(){
    
    }

}
</script>

<style>

</style>