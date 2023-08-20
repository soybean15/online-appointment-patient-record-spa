<template>
  <div class="column">
    <div>
      <div>Diagnosis</div>
      <q-list bordered separator>
        <q-item v-for="(d_item, index ) in diagnosis" :key="index">
          <q-item-section> {{ `${index +1}. ${d_item}` }}</q-item-section> 
        </q-item>
        <q-input outlined bottom-slots v-model="d_text" label="Label" counter maxlength="12" dense>
        <template v-slot:before>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </template>

        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          <q-icon name="schedule" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>

        <template v-slot:after>
          <q-btn @click="onSend('diagnosis')" round dense flat icon="send" />
        </template>
      </q-input>

      </q-list>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const  diagnosis =ref([])
    const d_text = ref('')

    return {
        diagnosis,
        d_text,
        onSend:(action)=>{
            if(action==='diagnosis'){
                diagnosis.value.push(d_text.value)
                d_text.value=''
            }else{

            }
        }
    }

  },
};
</script>

<style>
</style>