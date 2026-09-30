'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../app/globals.css';

import { sliderDataHome } from '@/constants/data';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import ButtonCustom from '@/components/ButtonCustom';

export default function HomeSlider() {

  return (
    <>
      <Swiper
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        loop
        className='mt-24'
      >
        {sliderDataHome.map(item => (
          <SwiperSlide>
            <div style={{ backgroundImage: `url("${item.image}")` }} className='min-h-150'>
              <div className="container flex items-center min-h-150">
                <div className="max-w-150 space-y-5">
                  <h1 className='text-[clamp(1rem,6vw,3rem)] md:leading-16'>{item.title}</h1>
                  <p className='max-w-100'>{item.desc}</p>
                  <Link href={'/classes'} className='inline-block border py-3 px-12 rounded-bdrs-8px'>До класів</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}