<template>
  <span>
    <slot :onClick="onClick"></slot>

    <q-dialog
      v-model="persistent"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-teal text-white" style="width: 400px">
        <q-card-section>
          <div class="text-h6">Persistent</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="row justify-center">
            <div class="relative">
              <q-avatar size="100px" rounded class="">
                <img :src="image_blob" />
              </q-avatar>

              <q-file
                ref="fileInputRef"
                clearable
                class="hidden"
                filled
                color="purple-12"
                v-model="imageFile"
                label="Label"
                @update:model-value="print"
              ></q-file>
              <q-icon
                class="absolute bottom-2 right-0 cursor-pointer"
                @click="openFile"
                color="blue-grey-1"
                label="Click"
                name="photo_camera"
                size="2.2em"
              ></q-icon>
            </div>
          </div>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input
              filled
              v-model="serviceStore.serviceForm.name"
              label="Service Name*"
              hint="Service Name"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />

            <q-input
              filled
              fill-mask="0"
              v-model="serviceStore.serviceForm.price"
              label="Your age *"
              reverse-fill-mask
              mask="#.##"
            />

            <q-input
              filled
              type="textarea"
              v-model="serviceStore.serviceForm.description"
              label="Description "
            />

            <div>
              <q-btn
                :loading="loading"
                label="Submit"
                type="submit"
                color="primary"
              />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="Exit" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </span>
</template>
  
  <script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useAdminStore } from "@/store/admin";

export default {
  emit: ["onClick"],
  setup(props, { emit }) {
    const serviceStore = useAdminStore().serviceStore;
    const persistent = ref(false);
    const onEdit = ref(false);
    const loading = ref(false);
    const fileInputRef = ref(null);
    const  imageFile = ref(null)
    const image_blob = ref('https://cdn.quasar.dev/img/avatar.png')

    const delay = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    return {
      onSubmit: async () => {
        //
        loading.value = true;
        if (onEdit.value) {
          await delay(1000);
          await serviceStore.updateService();
        } else {
          await delay(1000);
          await serviceStore.addService(imageFile.value);
        }

        loading.value = false;
        persistent.value = false;
      },
      serviceStore,
    
      persistent,
      fileInputRef,
      imageFile,
      image_blob,
      onClick: (row) => {
        if (row.name) {
          onEdit.value = true;
          image_blob.value = row.image
        } else {
          onEdit.value = false;
        }
        serviceStore.serviceForm.id = row.id;
        serviceStore.serviceForm.name = row.name;
        serviceStore.serviceForm.price = row.price;

        persistent.value = !persistent.value;
      },
      loading,
      openFile: () => {
        fileInputRef.value.pickFiles();
      },
      handleClick: () => {
      },

      
      print: () => {
        image_blob.value = URL.createObjectURL(
          imageFile.value
        );

        
       
      },
    };
  },
};
</script>
  