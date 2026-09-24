'use client'
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { classesData } from "@/constants/data";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../app/globals.css';
import Link from 'next/link';

const ClasessSlider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      loop
      className='mt-12'
    >
      {classesData.map(item => (
        <SwiperSlide>
          <Link href={item.href} className='bg-white cursor-pointer overflow-hidden block'>
            <img src={item.image} alt="" className="w-full" />
            <div className="text-center my-6 font-semibold">{item.title}</div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ClasessSlider