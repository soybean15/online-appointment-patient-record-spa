<template>
  <div class="column">
    <div class="row justify-between mt-2">
      <div class="m-1 p-2 font-semibold bg-surface shadow-md rounded-md">
        {{ formattedDate }}
      </div>
    </div>

    <div class="row q-pa-md">
      <div class="col-12">
        <div class="row items-center justify-between">
          <div class="row items-center">
            <div class="m-2 mr-1 font-bold text-base text-primary font-nonito" color="">
              Profile
            </div>
   
          </div>

          <div class="">
            <EditProfileModal/>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-center">
        <div class="col-lg-6 col-md-6 col-12 row bg-surface rounded-md q-pa-sm q-ma-sm shadow-md ">
        <div class="col-lg-6 col-md-6 col-12 border-r  border-gray-400 ">
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

        <div class="col-lg-6 col-md-6 col-12 pl-2" v-if="authStore.user">
            <div class="row ">
                <div class="col-sm-12 col-lg-5 col-5 border-b py-3 border-gray-500 mx-2  ">
                    <div class="row font-secondary py-1">Gender</div>
                    <div class="row text-xs ">{{authStore.user.profile[0].gender}}</div>
                </div>
                <div class="col-sm-12 col-lg-5 col-5 border-b py-3 border-gray-500 mx-2">
                    <div class="row font-secondary py-1">Phone Number</div>
                    <div class="row text-xs">{{authStore.user.profile[0].contact_number}}</div>
                </div>

            </div>
            <div class="row  ">
             
                <div class="col-lg-5 col-sm-12 col-5  border-b py-2 border-gray-500 mx-2 ">
                    <div class="row font-secondary py-1">Birthday</div>
                    <div class="row text-xs" >{{authStore.user.profile[0].birthdate}}</div>
                </div>
                <div class="col-lg-5 col-sm-12 col-5 border-b py-3 border-gray-500 mx-2">
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
        <div class=" column col-lg-4 row col-md-4 col-12 bg-surface rounded-md q-pa-md q-ma-sm shadow-md " >
         <div>Notes </div>
         <div>Last Update: <span class="font-secondary"> {{last? last.date_diagnosed : 'N/A'}}</span> </div>
         <div>Assigned Doctor: <span class="font-secondary"> {{last? last.doctor : 'N/A'}}</span> </div>

         <div class="bg-onSurface p-3 my-5 rounded-lg h-52 ">

          <div v-if="last">
            <div v-if="last.recommendation.length>0">
              <ul>
                <li v-for="item in last.recommendation">
                    {{item}}
                </li>
              </ul>

            </div>
            <div v-else>

              No Notes

            </div>

          </div>

         </div>
        
        </div>
   
    </div>
    




  </div>

</template>



<script>

import { useAuthStore } from "@/store/auth";
import { computed, onMounted, ref, watchEffect } from "vue";
import { format } from "date-fns";

import EditProfileModal from './modals/EditProfileModal.vue';
import axios from 'axios';

export default {
    components:{EditProfileModal},
  setup() {
    const authStore = useAuthStore();


    const last = ref(null)
    watchEffect(async() => {


      if(authStore.user){
        const response = await axios.get(`api/user/last-record/${authStore.user.id}`)
        last.value = response.data.last
      }
   
      
      
    });

    return {
      authStore,
      last,
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