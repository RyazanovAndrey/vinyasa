'use client'
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { instructorsData } from "@/constants/data";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../app/globals.css';

const InstructorsSlider = () => {
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
      {instructorsData.map(item => (
        <SwiperSlide>
          <div className=" bg-section-bg cursor-pointer overflow-hidden rounded-bdrs-8px">
            <div className="w-full h-72 overflow-hidden">
              <img src={`/instructors/${item.slug}.jpg`} alt="" className='w-full h-full object-cover scale-100 hover:scale-105 duration-200' />
            </div>
            <div className="py-5 px-12 text-center">
              <div className="font-semibold pb-3">{item.name}</div>
              <div className="border-t border-gray-200 pt-3">
                <div className='text-sm'>Направлення</div>
                <div className="font-bold text-xl">{item.direction}</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default InstructorsSlider