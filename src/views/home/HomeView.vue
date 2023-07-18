<template>

    <q-page class="bg-deep-purple-1">
        <div class="row bg-primary">
            <!-- Maxilife Multispecialty Clinic and Diagnostic Center -->
            <div class="col">
                <div style="text-align:center; max-width: 650px; margin-right: auto; margin-left: auto;">
                    <div class="text-h4 text-bold text-white q-mt-xl q-pt-xl q-pb-lg" >Let Maxilife Multispecialty Clinic 
                        <hr/>Care with your Health</div>
                    <div class="text-h6 q-px-lg q-pb-sm"> Book your appointment from the comfort 
                        of your own home and receive quality care from our expert team</div>
                    <div class=" bg-white text-grey mb-5 p-px-xl rounded-lg">Set an Apppointment
                        <q-btn color="blue" 
                            icon-right="calendar_today" 
                            label="" 
                            class="q-my-sm "
                            style="align-items: end; margin-left: 10px;"/>
                    </div>
                </div>
            </div>
            <div class="col gt-sm">
                <q-img src="../../assets/img/logo/doc1.png" class="q-pa-xl"
                style="max-height:650px; margin-left:auto; margin-right: auto; display: block;"></q-img>
                
            </div>

        </div>

        <div class="row text-h5 text-bold text-black q-px-md q-pt-md">Offered</div>

        <div class="row">

          <div class="col">
           <div class="q-pa-md ">
            <q-card class="my-card">
             <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="pending_actions" style="height: 100px; width: 100px;" />
                </q-item-section>

                
            </q-item>
               

                <q-card-section>
                    <div class="text-h6">Well cleaned and neat facility</div>
                   
                </q-card-section>

                <q-card-section class="q-pt-none">
                    {{ lorem }}
                </q-card-section>
            </q-card>
          </div>
         </div>


         <div class="col">
           <div class="q-pa-md ">
            <q-card class="my-card">
                <!-- 5 -->

                <q-card-section>
                    <div class="text-h6">Best Doctors</div>
                    
                </q-card-section>

                <q-card-section class="q-pt-none">
                    {{ lorem }}
                </q-card-section>
            </q-card>            
          </div>
         </div>


         <div class="col">
           <div class="q-pa-md ">
            <q-card class="my-card">
                <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg"> -->

                <q-card-section>
                    <div class="text-h6">Good Services</div>
               
                </q-card-section>

                <q-card-section class="q-pt-none">
                    {{ lorem }}
                </q-card-section>
            </q-card>            
          </div>
         </div>




        </div>
    </q-page>
 

</template>

<script>

export default {


}
</script>
