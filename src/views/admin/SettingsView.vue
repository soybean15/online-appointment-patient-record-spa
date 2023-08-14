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
          <q-input outlined v-model="color.primary" class="my-input">
            <template v-slot:append>
              <q-icon name="colorize" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-color @change="onChange" v-model="color.primary" />
                </q-popup-proxy>
              </q-icon>
            </template>

            <template v-slot:prepend>

              <q-icon  filled name="palette" :style="{color: color.primary}"/>

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
import { onUpdated, ref, watch } from "vue";
import { useSystemStore } from "@/store/system";
export default {
  setup() {
    const color = ref({
      primary:"#FF00FF"
    });
    const systemStore = useSystemStore()
    watch(color, () => {});

    return {
      color,
      onChange: () => {
        console.log(color.value.primary);
         systemStore.changeTheme(color.value)
      },
    };
  },
};
</script>

<style>
</style>