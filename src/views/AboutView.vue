<template>
    <q-page class="" style="">
   
      <div class="">
    <q-parallax :height="400" :speed="0.5">
      <template v-slot:media>
        <img src="../../src/assets/image1.jpg" style="height: 800px;">
      </template>

      <h1 class=" text-h4 row justify-center text-white">Maxilife Multispecialty Clinic and Diagnostic Center </h1>
    </q-parallax>
   </div>





<!-- History -->
<div class="row q-mb-md q-pa-xl bg-primary text-gray-700">
  

  <div class="col q-py-md">
    <div class="row text-h4">History
    </div>
    <div class="row q-py-md q-mr-xl q-pr-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.           
    </div>
  </div>
</div>

<!-- Mission Vision -->
<div class="row q-my-md q-pa-xl">     
  <div class="col q-py-md justify-center q-pl-xl">
    <div class="row text-h4 text-red-600 q-pl-xl">Mission </div>
    <div class="row q-py-md q-mr-xl q-pl-xl">
          To provide accessible, affordable and maximum quality of maternal care, child health and family planning services in a committed, competent and compassionate manner
    </div>
    <div class="row text-h4 text-blue-800 q-pl-xl">Vision </div>
    <div class="row q-py-md q-mr-xl q-pl-xl">
      To achieve continuous maximum delivery of quality health care services that will lessen maternal and child morbidity and mortality with improved family planning services in order to attain a better and happy community    </div>
    </div>

  <div class="col items-center q-py-sm q-px-md justify-center">
      <div class="row justify-center"> 
        <img src="../assets/img/logo/logo.png"  style="width: 450px; height: 400px; border-radius: 5px;">
      </div>
  </div> 
</div>


<!-- Doctors -->

<div class="row justify-center  q-mt-md q-pa-md  text-gray-700 text-h4 q-mx-xl ">Doctors</div>
<div class="row q-px-md text-gray-700 justify-center items-center q-mx-xl">
   <DoctorCard />

</div>


<!-- Branches -->
<div class="row q-my-sm q-pa-xl justify-center relative"> 
     
  <div class="col-12 col-lg-6 q-py-md  q-pl-xl justify-center">
     
     
        <div class="row text-h4 q-pl-xl q-mt-lg items-center justify-center">
          <q-icon name="location_on"/>Location 
        </div>
        <div class="row q-py-sm q-mr-xl q-pl-xl items-center justify-center text-h6">
          Jose Abad Santos Avenue, San Fernando Sur, Cabiao, Philippines, 3107   
         </div>
     

  </div>

  <div class="col-12 col-lg-6 items-start q-py-sm q-px-md justify-start">
      <div class="row justify-start"> 
        <img src="../assets/img/images/clinic3.jpg"  style="width: 100%; height: 400px; border-radius: 5px;">
      </div>
  </div>
  
  <div class="absolute top-10 -right-2 rotate-45 icons">
                    <q-icon name="calendar_today " color="amber" size="50px"/>
                </div>  
                <div class="absolute top-17 left-20 -rotate-45 ">
                    <q-icon name="emergency" color="blue" size="50px"/>
                </div> 
                <div class="absolute bottom-5 -left-2 -rotate-45 ">
                    <q-icon name="local_hospital" color="red" size="50px"/>
                </div> 
</div>







</q-page>
</template>

<script>
  import DoctorCard from "@/views/components/about/DoctorCard.vue"

  export default{
    components: {
      DoctorCard
    },
    setup(){
      return {
         DoctorCard
      }
    }
  }
</script>