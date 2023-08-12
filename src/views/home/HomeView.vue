<template>
  <q-page class="">
    <div class="bg-white ">
      <!-- Hero Section -->
      <div
        class="row bg-primary hero-section relative overflow-auto"
        style="height: 450px"
      >
        <!-- Maxilife Multispecialty Clinic and Diagnostic Center -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -bottom-0"
          viewBox="0 0 1440 320"
        >
          <path
            fill="white"
            fill-opacity="1"
            d="M0,320L80,309.3C160,299,320,277,480,266.7C640,256,800,256,960,218.7C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>

        <div class="col-12 col-lg-10 text-white relative">
          <div
            style="
              text-align: center;
              max-width: 650px;
              margin-right: auto;
              margin-left: auto;
            "
            class="q-pt-md"
          >
            <div class="text-h4 text-bold q-mt-xl q-pt-xl q-pb-lg">
              Let Maxilife Multispecialty Clinic
              <hr />
              Care with your Health
            </div>
            <div class="text-h6 q-px-lg q-pb-sm">
              Book your appointment from the comfort of your own home and
              receive quality care from our expert team
            </div>
            <q-btn
              align="around"
              class="btn-fixed-width q-mb-md"
              to="appointment"
              color="secondary"
              label="Set An Appointment"
              icon="calendar_today"
              outline
            />

            <div class="col gt-sm opacity-85 absolute -bottom-0 -right-20">
              <q-img
                src="../../assets/img/images/doctor2.png"
                style="width: 420px; height: 450px"
                class="row justify-center shadow-b-xl"
              ></q-img>
            </div>
          </div>
        </div>
        <div class="col col-lg-2 gt-sm"></div>
      </div>

      <!--         
      //Second Row -->

      <div class="row q-pa-lg q-mx-md ">
        <div class="col-1 gt-sm"></div>
        <div class="col-12 col-md-12 col-lg-7">
          <div class="row text-primary text-h6">
               What We Can Offer
          </div>
          <div class="row justify-center">
        
          <div class="row justify-start">

            
            <div class="col q-py-lg">
              <div>
                <img
                  src="@/assets/img/images/facility1.jpg"
                  style="height: 180px; border-radius: 20px"
                  
                />
              </div>
              <div class="text-h7 q-my-md  text-gray-800 text-bold">
                Well cleaned and neat facility
              </div>
            </div>

            <div class="col q-py-lg q-px-lg">
              <div>
                <img
                  src="@/assets/img/images/service1.jpg"
                  style="height: 180px; border-radius: 20px"
                />
              </div>
              <div class="text-h7 q-my-sm text-gray-800 text-bold">
                Affordable and Quality Services
              </div>
            </div>

            <div class="col q-py-lg">
              <img
                src="@/assets/img/images/maxilife-staff.jpg"
                style="height: 180px; border-radius: 20px"
              />
              <div class="text-h7 q-my-sm text-gray-800 text-bold">
                Best healthcare providers
              </div>
            </div>  </div>
            <div class="row q-pa-xl ">     
              <div class="flex justify-center">     
                <img src="../../assets/img/images/img8.png" 
                style="height: 300px;">                    
             </div>
            </div>    
          </div>
        </div>
        <div class="col-12 gt-sm col-lg-4">
          <div class="q-mt-xl row justify-center">
            <img src="../../assets/img/images/img5.jpg" style="height: 600px;" class=" border-4 border-primary ">
          </div>
        </div>
      </div>

      <div>
        <SwiperView>
          <template v-slot:swiper-slide>
           
            <swiper-slide v-for="item in swiperItems" :key="item.title" >

              <div class="col q-py-lg">
                <div class="flex q-py-lg ">
                <img
                  :src="item.img"
                  style=" border-radius: 20px; height: 400px;"
                  class="border-2 border-color-primary shadow-xl"
                />
               </div>
                <div class="text-h7 q-my-sm text-gray-800 text-bold">
                {{ item.title}}
                </div>
              </div>
            </swiper-slide>

          </template>
        </SwiperView>
      </div>
    </div>

   

    <!-- third section -->
  </q-page>
</template>

<script>
import SwiperView from "@/components/SwiperView.vue";

export default {
  components: {
    SwiperView,
  },
  setup() {

    return {
      swiperItems: [
        {
          img: require("@/assets/img/images/img3.png"),
          title: "Best healthcare providers",
          description:
            "Book your appointment from the comfort of your own home and receive quality care from our expert team",
        },
        {
          img: require("@/assets/img/images/img6.png"),
          title: "Best healthcare providers",
          description:
            "Book your appointment from the comfort of your own home and receive quality care from our expert team",
        },
        {
          img: require("@/assets/img/images/img2.jpg"),
          title: "Best healthcare providers",
          description:
            "Book your appointment from the comfort of your own home and receive quality care from our expert team",
        },
        {
          img: require("@/assets/img/images/img1.jpg"),
          title: "Best healthcare providers",
          description:
            "Book your appointment from the comfort of your own home and receive quality care from our expert team",
        },
        // {
        //   img: require("@/assets/img/images/img9.png"),
        //   title: "Best healthcare providers",
        //   description:
        //     "Book your appointment from the comfort of your own home and receive quality care from our expert team",
        // },
       
      ],
    };
  },
};
</script>


<style >
/* .hero-section{
    z-index:5;
    background: linear-gradient(-60deg, rgb(253, 252, 252),rgb(247, 249, 247),rgb(149, 149, 151),yellow);
} */
</style>