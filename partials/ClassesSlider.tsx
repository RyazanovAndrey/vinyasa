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
import Image from 'next/image';

const ClasessSlider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1.5}
      navigation
      loop
      className='mt-12'
      breakpoints={{
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
        1100: {
          slidesPerView: 4
        }
      }}
    >
      {classesData.map(item => (
        <SwiperSlide>
          <Link href={`/classes/${item.slug}`} className='bg-white cursor-pointer overflow-hidden block rounded-bdrs-8px'>
          <div className="overflow-hidden">
            <Image src={item.image} width={500} height={500} alt='' className='scale-100 hover:scale-105 duration-200' />
          </div>
            <div className="text-center my-6 font-semibold">{item.title}</div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ClasessSlider