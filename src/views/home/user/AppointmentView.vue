 <template>
  <div>
    <div class="row">
      <BreadCrumbs :prefix="'appointment'" />
    </div>
    <div class="row justify-center">
      <div class="col-lg-8 col-md-7 col-sm-12 col-12 q-pa-sm">       
          <AppoinmentsList />    
      </div>
      <div class="col-lg-4 col-md-5 gt-sm q-py-sm">
         <div class="row">
          <AppointmentSidePanel />
         </div>
      </div>
    </div>
  </div>
 


</template>

<script>
import { onMounted } from "vue";
import AppoinmentsList from "./components/AppoinmentsList.vue";
import {useAppointmentStore} from '@/store/userAppointment'
import AppointmentSidePanel from "./components/AppointmentSidePanel.vue";
import BreadCrumbs from '@/components/BreadCrumbs'
export default {
  components: { 
    AppoinmentsList,
    AppointmentSidePanel,
    BreadCrumbs
  },
  setup() {

    const appointmentStore = useAppointmentStore()
    onMounted(() => {
      appointmentStore.index();
    });

   
  },
};
</script>

<style>
</style>