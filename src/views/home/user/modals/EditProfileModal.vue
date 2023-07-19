<template>
  <div class="q-gutter-sm" v-if="authStore.user">
    <q-btn
      label="Edit"
      icon="edit"
      color="primary"
      @click="persistent = true"
    />

    <q-dialog
      v-model="persistent"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="" style="width: 700px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">Edit Profile</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="column">
            <div class="row mb-5 self-center">
              <div class="relative">
                <q-avatar size="100px">
                  <img :src="authStore.user.profile[0].blob_image" />
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
                  @click="testClick"
                  color="blue-grey-1"
                  label="Click"
                  name="photo_camera"
                  size="2.2em"
                ></q-icon>
              </div>
            </div>

            <q-form @submit.prevent="onSubmit" class="q-gutter-md">
              <div class="column">
                <q-item class="column">
                  <div
                    class="self-end text-red-400"
                    v-if="authStore.errors.firstname"
                  >
                    {{ `*${authStore.errors.firstname[0]}` }}
                  </div>
                  <q-input
                    class="w-full"
                    label="Firstname"
                    v-model="authStore.user.profile[0].firstname"
                    filled
                    dense
                  />
                </q-item>
                <q-item class="column">
                  <div
                    class="self-end text-red-400"
                    v-if="authStore.errors.lastname"
                  >
                    {{ `*${authStore.errors.lastname[0]}` }}
                  </div>
                  <q-input
                    class="w-full"
                    label="Lastname"
                    filled
                    v-model="authStore.user.profile[0].lastname"
                    dense
                  />
                </q-item>
                <q-item>
                  <q-input
                    class="w-full"
                    label="Middlename"
                    filled
                    v-model="authStore.user.profile[0].middlename"
                    dense
                  />
                </q-item>

                <q-item class="items-center justify-between">
                  <div class="w-full column max-w-xs">
                    <div
                      class="self-end text-red-400"
                      v-if="authStore.errors.contact_number"
                    >
                      {{ `*${authStore.errors.contact_number[0]}` }}
                    </div>
                    <q-input
                      label="Contact Number"
                      filled
                      v-model="authStore.user.profile[0].contact_number"
                      dense
                    />
                  </div>

                  <div>
                    <span class="font-secondary">Gender</span>
                    <q-radio
                      v-model="authStore.user.profile[0].gender"
                      val="Male"
                      label="Male"
                    />
                    <q-radio
                      v-model="authStore.user.profile[0].gender"
                      val="Female"
                      label="Female"
                    />
                  </div>
                </q-item>

                <q-item class="items-center  justify-between">
                  <div class="w-full max-w-xs column">
                    <div
                      class="self-end text-red-400"
                      v-if="authStore.errors.birthdate"
                    >
                      {{ `*${authStore.errors.birthdate[0]}` }}
                    </div>
                    <q-input
                      filled
                      v-model="authStore.user.profile[0].birthdate"
                      mask="date"
                      label="Birth Date"
                      dense
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              v-model="authStore.user.profile[0].birthdate"
                            >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>

                  <div class="column">
                    <div
                      class="self-end text-red-400"
                      v-if="authStore.errors.status"
                    >
                      {{ `*${authStore.errors.status[0]}` }}
                    </div>
                    <q-select
                      filled
                      dense
                      v-model="authStore.user.profile[0].status"
                      label="Status"
                      :options="status"
                      style="width: 250px"
                      behavior="menu"
                    />
                  </div>
                </q-item>

                <q-item>
                  <q-input
                    class="w-full"
                    label="Address(home)"
                    filled
                    v-model="authStore.user.profile[0].address_home"
                    type="textarea"
                    resize
                    dense
                  />
                </q-item>
                <q-item>
                  <q-input
                    class="w-full"
                    label="Address(office)"
                    filled
                    v-model="authStore.user.profile[0].address_office"
                    type="textarea"
                    resize
                    dense
                  />
                </q-item>
              </div>

              <q-item class="justify-end">
                <q-btn label="Submit" type="submit" color="primary" />
              </q-item>
            </q-form>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useAuthStore } from "@/store/auth";

const status = [
  'Single',
  'Married',
  'Widowed',
  'Separated',
  'Divorced'

]

export default {
  setup() {
    const persistent = ref(false);
    const fileInputRef = ref(null);

    const authStore = useAuthStore();
    const imageFile = ref(null);

    return {
      persistent,
      authStore,
      fileInputRef,
      imageFile,
      testClick: () => {
        fileInputRef.value.pickFiles();
      },
      print: () => {
        authStore.user.profile[0].blob_image = URL.createObjectURL(
          imageFile.value
        );

        console.log(authStore.user.profile[0].image);
        console.log(authStore.user.profile[0].blob_image);
      },
      dateValidationRule: (val) => {
        if (!val) {
          return "Birth Date is required";
        }

        return (
          /^\d{4}-\d{2}-\d{2}$/.test(val) || "Invalid date format (YYYY-MM-DD)"
        );
      },
      onSubmit: async () => {
        await authStore.updateProfile(imageFile.value);
        if (authStore.success.update) {
          persistent.value = false;
        }
      },
      status
    };
  },
};
</script>
<style>
</style>