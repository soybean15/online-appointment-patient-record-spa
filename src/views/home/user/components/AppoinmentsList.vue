<template>
    <div class="q-pa-md" style="">
      <q-list class="bg-surface shadow-md rounded-md p-4 "  >
        
    
        <q-item-label class="row items-center justify-between" header>Appointments <AddAppointmentModal/></q-item-label>

  
        <q-item>
          <q-item-section top avatar>
            <q-avatar color="primary" text-color="white" icon="bluetooth" />
          </q-item-section>
  
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>
  
          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
            <q-icon name="star" color="yellow" />
          </q-item-section>
        </q-item>
  
        <q-separator spaced inset="item" />
  
        <q-item>
          <q-item-section top avatar>
            <q-avatar color="primary" text-color="white" square icon="bluetooth" />
          </q-item-section>
  
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>
  
          <q-item-section side top>
            <q-item-label caption>meta</q-item-label>
          </q-item-section>
        </q-item>
  
        <q-separator spaced inset="item" />
  
        <q-item>
          <q-item-section top avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
  
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>
  
          <q-item-section side top>
            <q-badge label="10k" />
          </q-item-section>
        </q-item>
  
        <q-separator spaced inset="item" />
  
        <q-item>
          <q-item-section top avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
  
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>
  
          <q-item-section side top>
            <q-item-label caption>meta</q-item-label>
          </q-item-section>
        </q-item>
        </q-list>
    </div>
  </template>
<script>
import AddAppointmentModal from '../modals/AddAppointmentModal.vue'

export default {

    components:{AddAppointmentModal}

}
</script>

<style>

</style>