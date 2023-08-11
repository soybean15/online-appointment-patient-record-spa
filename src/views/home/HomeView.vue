<template>

    <q-page class="">
        <!-- Hero Section -->
        <div class="row bg-teal-4">
            <!-- Maxilife Multispecialty Clinic and Diagnostic Center -->
            <div class="col text-white">
                <div style="text-align:center; max-width: 650px; margin-right: auto; margin-left: auto;" class="q-pt-md  ">
                    <div class="text-h4 text-bold  q-mt-xl q-pt-xl q-pb-lg" >Let Maxilife Multispecialty Clinic 
                        <hr/>Care with your Health</div>
                    <div class="text-h6 q-px-lg q-pb-sm"> Book your appointment from the comfort 
                        of your own home and receive quality care from our expert team</div>
                    <q-btn align="around" class="btn-fixed-width q-mb-md" to="appointment" color="primary" label="Set An Appointment" icon="calendar_today" outline />
                   
                </div>
            </div>
            <div class="col gt-sm q-px-sm q-py-xl q-mx-xl  opacity-85">
                <q-img src="../../assets/img/images/doctor2.png" 
                style="max-height:650px; margin-left:auto; margin-right: auto; display: block; border-radius: 10px; width:500px; height: 550px; "></q-img>
                
            </div>

        </div>

<!--         
      //Second Row -->

        <div class="">
            <div class="flex justify-center">What We Can Offer</div>

            <Swiper />

        </div>


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


<style scoped>


</style>