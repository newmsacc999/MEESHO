import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import C1 from '../../assets/category/c1.webp'
import C2 from '../../assets/category/c2.webp'
import C3 from '../../assets/category/c3.webp'
import C5 from '../../assets/category/c5.webp'
import C6 from '../../assets/category/c6.webp'
import C7 from '../../assets/category/c7.webp'
import C8 from '../../assets/category/c8.webp'
import C9 from '../../assets/category/c9.webp'
import C10 from '../../assets/category/c10.webp'
import C11 from '../../assets/category/c11.webp'
import C12 from '../../assets/category/c12.webp'
import C13 from '../../assets/category/c13.webp'
import C14 from '../../assets/category/c14.webp'
import C15 from '../../assets/category/c15.webp'
import C16 from '../../assets/category/c16.webp'
import C17 from '../../assets/category/c17.webp'
import C18 from '../../assets/category/c18.webp'
import C19 from '../../assets/category/c19.webp'
import C20 from '../../assets/category/c20.webp'
import C21 from '../../assets/category/c21.webp'


const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={5}
      className="bg-white"
    >
      <SwiperSlide><img src={C1} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C2} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C3} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C5} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C6} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C7} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C8} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C9} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C10} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C11} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C12} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C13} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C14} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C15} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C16} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C17} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C18} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C19} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C20} alt="" className="rounded-full" /></SwiperSlide>
      <SwiperSlide><img src={C21} alt="" className="rounded-full" /></SwiperSlide>
    </Swiper>
  )
}

export default Slider