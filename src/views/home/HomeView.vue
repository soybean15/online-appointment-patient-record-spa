<template>

    <q-page class="">
        <div class="bg-white">
        <!-- Hero Section -->
        <div class="row bg-primary hero-section relative overflow-auto" style="height: 450px; ">
            <!-- Maxilife Multispecialty Clinic and Diagnostic Center -->
           <svg xmlns="http://www.w3.org/2000/svg" class="absolute -bottom-0 " viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,320L80,309.3C160,299,320,277,480,266.7C640,256,800,256,960,218.7C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
           
            <div class="col-12  col-lg-10 text-white relative ">
                <div style="text-align:center; max-width: 650px; margin-right: auto; margin-left: auto;" class="q-pt-md  ">
                    <div class="text-h4 text-bold  q-mt-xl q-pt-xl q-pb-lg" >Let Maxilife Multispecialty Clinic 
                        <hr/>Care with your Health</div>
                    <div class="text-h6 q-px-lg q-pb-sm"> Book your appointment from the comfort 
                        of your own home and receive quality care from our expert team</div>
                      <q-btn align="around" class="btn-fixed-width q-mb-md" to="appointment" color="secondary" label="Set An Appointment" icon="calendar_today" outline />
                       
                      <div class="col gt-sm opacity-85 absolute  -bottom-0 -right-20">
                        <q-img src="../../assets/img/images/doctor2.png" 
                          style="width:420px; height: 450px; ;" class="row justify-center shadow-b-xl"></q-img>
                      </div>
                </div>
            </div>
            <div class="col col-lg-2 gt-sm"></div>
           
        
        </div>
 
<!--         
      //Second Row -->

           <div class="row q-pa-lg q-mx-xl">
            <div class="col-1 gt-sm"></div>
             <div class="col-12 col-md-12 col-lg-7 q-px-xl">
                <div class="flex justify-start text-secondary text-h6">What We Can Offer</div>
                <div class="row">
                    <div class="col q-py-lg ">
                          <div>
                            <img src="@/assets/img/images/facility1.jpg" style="height: 180px; border-radius: 20px;" />
                           </div>
                            <div class="text-h7 q-my-sm text-gray-800 text-bold">
                                Well cleaned and neat facility
                            </div>                                                                              
                    </div>

                    <div class="col q-py-lg q-px-sm">  
                        <div>                     
                            <img src="@/assets/img/images/service1.jpg" style="height: 180px; border-radius: 20px;" />      </div>                     
                            <div class="text-h7 q-my-sm text-gray-800 text-bold">
                                Affordable and Quality Services
                            </div>
                   </div>

                    <div class="col q-py-lg ">              
                            <img src="@/assets/img/images/maxilife-staff.jpg"  style="height: 180px; border-radius: 20px;" />                       
                            <div class="text-h7 q-my-sm text-gray-800 text-bold">
                                Best healthcare providers
                            </div>                                         
                    </div>
                </div>
             </div>
             <div class="col-12 col-md-12 col-lg-4"></div>
           </div>  


            
            </div>
             <div class="flex justify-center text-primary">What We Can Offer</div>

              <Swiper />

        <!-- third section -->
        <div class="row justify-center text-h6 q-py-xl q-pt-md q-my-xl ">Book Your Appointment </div>

        <div class="row q-mx-xl">
     
        
                 <div class="col-12 col-lg-6 justify-center q-pl-md q-py-sm  ">
                        <q-img src="../../assets/img/images/doctor4.jpg" style="max-height: 600px; height: 470px;">
                            <div class="absolute-full">
                                <div class="row opacity-75 q-pt-md q-pl-md">
                                    <img src="../../assets/img/images/logo1.png" style="width: 130px; height: 100px; ">
                                </div>
                                <div class="row text-h3 text-teal-2 q-py-lg q-px-xl">
                                    Time-saving, book with a click. <br /> Book Online!
                                </div>                              
                            </div>
                        </q-img>
                 </div> 
                     
                 
                
                     
        </div>
        




        
    
     
        
    </q-page>
 

</template>

<script>


import Swiper from "@/components/Swiper.vue"
export default {
    components: {
        Swiper
    }


}
</script>


<style >

/* .hero-section{
    z-index:5;
    background: linear-gradient(-60deg, rgb(253, 252, 252),rgb(247, 249, 247),rgb(149, 149, 151),yellow);
} */


</style>