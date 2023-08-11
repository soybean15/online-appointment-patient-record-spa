<template>
    <div class="text-black">
        <swiper-container
    :slides-per-view="3"
    :space-between="spaceBetween"
    :centered-slides="true"
    :rewind="true"
    :pagination="{
      hideOnClick: true
    }"
     :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
     :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
    :breakpoints="{
      768: {
        slidesPerView: 3,
      },
    }"
    @progress="onProgress"
    :effect="'coverflow'"
    :slideToClickedSlide="true"
    @slidechange="onSlideChange"
  >
   <slot name="swiper-slide"></slot>
   
  </swiper-container>

</div>
  
</template>

<script>
import { register } from 'swiper/element/bundle';
register()
export default {
    setup() {
      const spaceBetween = 10;
      const onProgress = (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress)
      };

      const onSlideChange = (e) => {
        console.log('slide changed')
      }

      return {
        spaceBetween,
        onProgress,
        onSlideChange,
      };
    }

}
</script>

<style>

</style>