<template>
  <div class="q-pa-md">
    <q-list bordered padding>
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="thumb_up" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Theme Color</q-item-label>
          <q-item-label caption
            >Allow notification when uploading images</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          

            <q-input
            outlined
        
        v-model="color"
        class="my-input"
      >
        <template v-slot:append>
          <q-icon  name="colorize" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-color v-model="color" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>


        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="contacts" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Contacts</q-item-label>
          <q-item-label caption>Allow notification</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="green" v-model="notif2" val="friend" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="thumb_up" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Socials</q-item-label>
          <q-item-label caption
            >Allow notification when uploading images</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="red" v-model="notif3" val="picture" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {

    
    setup(){
        


        return {
            color: ref('#FF00FF'),
        }
    }
};
</script>

<style>

</style>