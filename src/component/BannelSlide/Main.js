import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import B1 from '../../assets/baners/1.png';
import B2 from '../../assets/baners/2.png';
import B3 from '../../assets/baners/3.png';
import B4 from '../../assets/baners/4.png';
import B6 from '../../assets/baners/banner2.webp';

const BannerSlide = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mt-2"
    >
      <SwiperSlide><img src={B4} alt="" className="w-full" /></SwiperSlide>
      <SwiperSlide><img src={B3} alt="" className="w-full" /></SwiperSlide>
      <SwiperSlide><img src={B2} alt="" className="w-full" /></SwiperSlide>
      <SwiperSlide><img src={B4} alt="" className="w-full" /></SwiperSlide>
      <SwiperSlide><img src={B1} alt="" className="w-full" /></SwiperSlide>
      <SwiperSlide><img src={B6} alt="" className="w-full" /></SwiperSlide>
    </Swiper>
  )
}

export default BannerSlide