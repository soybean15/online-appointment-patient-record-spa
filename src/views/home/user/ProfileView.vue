<template>
  <div class="column">
    <div class="row justify-between mt-2">
      <div class="m-1 p-2 font-semibold bg-surface shadow-md rounded-md">
        {{ formattedDate }}
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="row items-center justify-between">
          <div class="row items-center">
            <div class="m-2 mr-1 font-bold text-base text-blue-400 font-nonito" color="">
              Profile
            </div>
   
          </div>

          <div>
            <EditProfileModal/>
          </div>
        </div>
      </div>

      <div class="col-6 row bg-surface rounded-md p-3 m-3 shadow-md">
        <div class="col-6 border-r  border-gray-400 column">
          <div class="row justify-center" v-if="authStore.user">
            <q-avatar class="self-center mt-5" size="70px" color="orange"
              ><img :src="authStore.user.profile[0].image"></q-avatar
            >
          </div>
          <div class="row mt-4 justify-center">
            <div class="font-semibold text-lg">{{ fullName }}</div>
          </div>
          <div class="row justify-center items-center">
            <q-icon name="email" size="xs"> </q-icon>
            <span class="ml-1 text-dm font-secondary" v-if="authStore.user">{{
              authStore.user.email
            }}</span>
          </div>
          <div class="row mt-5">
            <div class="col-12 row justify-center">
              <div class="text-md font-semibold">Appointments</div>
            </div>
            <div class="col-5 column items-center">
              <div class="row text-4xl font-bold">1</div>
              <div class="row font-secondary">Upcoming</div>
            </div>
            <div class="col-2 flex justify-center">
              <div class="w-0.5 bg-gray-500 py-3 h-full"></div>
            </div>

            <div class="col-5 column items-center">
              <div class="row text-4xl font-bold">1</div>
              <div class="row font-secondary">Completed</div>
            </div>
          </div>
        </div>

        <div class="col-6 pl-2" v-if="authStore.user">
            <div class="row ">
                <div class="col-5  border-b py-3 border-gray-500 mx-2  ">
                    <div class="row font-secondary py-1">Gender</div>
                    <div class="row text-xs ">{{authStore.user.profile[0].gender}}</div>
                </div>
                <div class="col-5 border-b py-3 border-gray-500 mx-2">
                    <div class="row font-secondary py-1">Phone Number</div>
                    <div class="row text-xs">{{authStore.user.profile[0].contact_number}}</div>
                </div>

            </div>
            <div class="row  ">
             
                <div class="col-5  border-b py-2 border-gray-500 mx-2 ">
                    <div class="row font-secondary py-1">Birthday</div>
                    <div class="row text-xs" >{{authStore.user.profile[0].birthdate}}</div>
                </div>
                <div class="col-5  border-b py-3 border-gray-500 mx-2">
                    <div class="row font-secondary py-1">Age</div>
                    <div class="row text-xs ">{{authStore.user.profile[0].age}}</div>
                </div>
            </div>


            <div class="row  ">
             
             <div class="col-5  border-b py-2 border-gray-500 mx-2 ">
                 <div class="row font-secondary py-1">Status</div>
                 <div class="row text-xs" >{{authStore.user.profile[0].status}}</div>
             </div>
            
         </div>


            <div class="row mx-2">
                <div class="col-12 py-3 border-b border-gray-500 ">
                    <div class="row font-secondary py-1">Address(Home)</div>
                    <div class="row text-xs">{{authStore.user.profile[0].address_home}}</div>
                </div>
                
            </div>
            <div class="row mx-2">
                <div class="col-12 py-3 border-b border-gray-500 ">
                    <div class="row font-secondary py-1">Address(Office)</div>
                    <div class="row text-xs">{{authStore.user.profile[0].address_office}}</div>
                </div>
                
            </div>
        </div>
      </div>
      <div class="col-4 column row bg-surface rounded-md p-3 m-3 shadow-md ">
        <div class="column col-3 ">
            <div class="row font-bold text-lg"> Notes</div>
            <div class="row justify-between">
                <div>Last updated</div>
                <div class="font-secondary">2020-08-02</div>
            </div>
        </div>
        <div class="row  col-9 bg-onSurface rounded-md p-2 pl-4">
            <ul style="list-style-type: disc;">
                <li>Patient is in good Condition</li>
            </ul>
        </div>
       
      </div>
    </div>




  </div>

</template>



<script>

import { useAuthStore } from "@/store/auth";
import { computed, onMounted } from "vue";
import { format } from "date-fns";

import EditProfileModal from './modals/EditProfileModal.vue';

export default {
    components:{EditProfileModal},
  setup() {
    const authStore = useAuthStore();
    onMounted(() => {
      authStore.getUser();
    });

    return {
      authStore,
      formattedDate: computed(() => {
        const date = new Date();
        return format(date, "h:mm a d MMM yyyy");
      }),
      fullName: computed(() => {
        if (authStore.user) {
          return `${authStore.user.profile[0].firstname} ${authStore.user.profile[0].lastname}`;
        }
        return "Undefined";
      }),
    };
  },
};
</script>


<style lang="scss">
</style>