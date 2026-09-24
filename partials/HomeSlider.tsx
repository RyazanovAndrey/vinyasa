'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../app/globals.css';

import { sliderDataHome } from '@/constants/data';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

export default function App() {

  return (
    <>
      <Swiper
        effect={'fade'}
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        loop
      >
        {sliderDataHome.map(item => (
          <SwiperSlide>
            <div style={{ backgroundImage: `url("${item.image}")` }} className='min-h-150'>
              <div className="container flex items-center min-h-150">
                <div className="max-w-1/2 space-y-5">
                  <h1 className='text-5xl'>{item.title}</h1>
                  <p>{item.desc}</p>
                  <Link href={item.href} className='btn inline-block'>Про студію</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}