
import vueConfig from 'vue.config';
<template>
  <div class="row justify-center  text-bold text-primary text-3xl q-mt-md" >     
            Maxilife Multispecialty Clinic  
    </div>
  
    <div class=" row justify-center text-xl font-secondary" >           
        We help you care with your health         
    </div>

    <div class="row justify-center q-pa-xl" >
        <div class="col-lg-3 gt-sm col-md-1">
        
        </div>
        <div class="col-lg-6 col-md-10 col-12">
          <div >
            <HistorySectionVue/>
          </div>
          <div class="q-pa-md">            
            <div class="row text-h6 text-primary text-bold">Mission</div>
            <div class="row q-py-md">
              To provide accessible, affordable and maximum quality of maternal
              care, child health and family planning services in a committed,
              competent and compassionate manner
            </div>
            <div class="row text-h6 text-primary text-bold">Vision</div>
            <div class="row ">
              To achieve continuous maximum delivery of quality health care services
              that will lessen maternal and child morbidity and mortality with
              improved family planning services in order to attain a better and
              happy community
            </div>
            <div class="q-pt-xl q-mt-md">
              <div class="row text-h6 text-primary text-bold items-center">
                    <q-icon name="location_on" color="black" />Location
                  </div>
              <div class="row justify-start q-px-lg q-pt-sm">
                  <img
                    src="../assets/img/images/clinic3.jpg"
                    style="width: 100%; height: 400px; border-radius: 5px"
                  />
               </div>
              <div class="row  q-py-md  justify-center">
                  
                  <div
                    class="row q-px-lg text-h6 "
                  >
                    Jose Abad Santos Avenue, San Fernando Sur, Cabiao, Philippines, 3107
                  </div>

            </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-1 gt-sm">
          
        </div>
    </div>

</template>

<script>

import HistorySectionVue from './components/about/HistorySection.vue';
export default {

  components: {
    // DoctorCard,
    HistorySectionVue
  },

}
</script>

<style>

</style>