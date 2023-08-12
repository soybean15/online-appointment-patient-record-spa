<template>
    <q-page class="" style="">
   
      <div class="row bg-primary">
        <div class="col-12 col-lg-6 q-pa-xl">
    <q-parallax :height="400" :speed="0.5">
      <template v-slot:media>
        <img src="../../src/assets/image1.jpg" style="height: 1000px;">
      </template>

      </q-parallax>
      <h1 class=" text-h4 row justify-end  text-white">Maxilife Multispecialty Clinic and Diagnostic Center </h1>
    
  </div>





<!-- History -->
      <div class="col-12 col-lg-6 first-letter:q-mb-md q-pa-xl bg-primary text-gray-700">
        

        <div class="row ">
          <div class="row text-h4">History
          </div>
          <div class="row q-py-md q-mr-xl q-pr-md">
            <p>
            Maxilife is a healthcare facility more popularly known as birthing center in San Fernando Sur, Cabiao, Neva Ecija which was established by Dr. Emerson D.C. Garcia and Dr. Kristina T. Vergara-Garcia, started its construction on May 2, 2017 through the help and supervision of Arch. Medel D.C. Garcia and Arch. Kristel R. Garcia. It formally opened its doors to the public on February 2, 2018 when it started the out-patient services staffed by Nurses, Midwives, Pediatricians, Obstetricians and other subspecialty doctors such as Urosurgeon, Medical Internist & Radiologist/Sonologist. It was the only private birthing facility of its kind in San Fernando Sur, Cabiao, Nueva Ecija when it was first established.
      <br /> The site where the healthcare facility stands which has an approximate area of 240 square meters along the highway just beside Eastern Gas Station was given by their beloved parents Ernesto and Maxima Garcia. The facility operations commenced amidst problems and difficulties which usually beset a new undertaking. Nurses, attendants and other personel were mobilized to go on the vicinity to announce that the facility was already in operation. soon enough, there was a gradual increase in th number of patients and different cases treated in the facility.
      <br />Later, because of the increasing number of patients seeking for a diagnostic ultrasound, the institution decided to procure such equipment to better serve and attend to patient needs. Maxilife as a birthing facility presents a more home-like comfortable environment than a hospital labor ward, typically with more options labor:food/drink, music, and the attendance of family and frie desired. Other characteristics can also include a fully air-condi labor and delivery room with very clean comfort rooms large e for patients who are wheelchair dependent. The décor is mea emphasize the normality of birth.
             <br />In Maxilife, pregnant women are free to act more spontaneously during their birth, such as squatting, walking and performing other postures that can help assist in labor. Its primary purpose of reaching out to the sick and the needy was achieved in line of patient satisfaction. True to its vision and mission, Maxilife Maternity Lying-in and Multispecialty Clinic Co. is committed to serve all patients regardless of creed, color, religion and socio-economic status.    
          </p></div>
        </div>
      </div> </div>

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