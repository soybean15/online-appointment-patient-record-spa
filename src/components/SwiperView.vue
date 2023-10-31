<template>
  <div class="">
    <div class="px-10 text-lg">{{title}}</div>
    <swiper-container
      class="flex h-40 sm:h-[400px] mx-1.5 overflow-visible"
      ref="{swiperRef}"
      :slidesPerView="3"
      :initialSlide="1"
      :centeredSlides="true"
      :rewind="true"
      :spaceBetween="10"
      :pagination="{
      hideOnClick: true
    }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        900: {
          initialSlide: 2,
          slidesPerView: 2,
          spaceBetween: 10,
        },

        1190: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1300: {
          initialSlide: 3,
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }"
      :onProgress="onProgress"
      :effect="fade"
      :slideToClickedSlide="true"
      :loading="lazy"
    >
      <slot name="swiper-slide"></slot>
    </swiper-container>
  </div>
</template>

<script>
import { register } from "swiper/element/bundle";
register();
export default {
  props:['title'],
  setup() {
    const spaceBetween = 10;
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
    };
    const onSlideChange = (e) => {
      const [swiper, progress] = e.detail;

      console.log(swiper.activeIndex);
    };

    return {
      spaceBetween,
      onProgress,
      onSlideChange,
    };
  },
};
</script>

<style>
.swiper-slide-active {
  transform: scale(1);

}
swiper-slide:not(.swiper-slide-active) {
  transform: scale(0.9);

}
</style>