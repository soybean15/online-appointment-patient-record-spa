<template>
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <q-card class="my-card border-4 relative">
          <img src="../../assets/img/images/facility1.jpg">
          <div class="absolute-bottom shadow-2xl">
              <div class="text-h6 q-my-sm text-white text-bold">
                   Well cleaned and neat facility 
              </div>
             <div class="q-pr-md text-gray-700" >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, .
             </div>
          </div>
       </q-card>
     </swiper-slide>
      
     <swiper-slide>
        <q-card class="my-card shadow-xl">
          <img src="../../assets/img/images/service1.jpg">
          <div class="absolute bottom-4">
              <div class="text-h6 q-my-sm text-white text-bold">
                Affordable and Quality Services 
              </div>
             <div class="q-pr-md text-gray-700" >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, .
             </div>
          </div>      
       </q-card>
     </swiper-slide>

     <swiper-slide>
        <q-card class="my-card">
          <img src="../../assets/img/images/maxilife-staff.jpg">
          <div class="absolute bottom-4">
              <div class="text-h6 q-my-sm text-white text-bold">
                Best healthcare providers
              </div>
             <div class="q-pr-md text-gray-700" >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, .
             </div>
          </div>
       
       </q-card>
     </swiper-slide>
      
     

      
    
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/effect-coverflow';
    import 'swiper/css/pagination';
  
  
    // import required modules
    import { EffectCoverflow, Pagination } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [EffectCoverflow, Pagination],
        };
      },
    };
  </script>

  <style >
 

.swiper {
  width: screen;
  padding-top:50px;
  padding-bottom: 50px;
 
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 500px;
  height: 320px;
}

.swiper-slide img {
  
  width: 100%;
  height: 320px;
  box-shadow: 20px;
}


  </style>
