'use client'
import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Image from 'next/image';

const images = [
  '/gallery/gallery-1.jpg',
  '/gallery/gallery-2.jpg',
  '/gallery/gallery-3.jpg',
  '/gallery/gallery-4.jpg',
  '/gallery/gallery-5.jpg',
  '/gallery/gallery-6.jpg',
  '/gallery/gallery-7.jpg',
  '/gallery/gallery-8.jpg',
];

function GalleryHome() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });

  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    });
  }

  return (
    <div>
      <div className='grid-gallery-home'>
        {images.map((item, index) => (
          <div className={`image-${index + 1} rounded-bdrs-8px`}>
            <Image src={item} alt='' onClick={() => openLightboxOnSlide(index + 1)} className='img-home' width={500} height={500} />
          </div>
        ))}
      </div>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={images}
        slide={lightboxController.slide}
      />
    </div>
  );
}

export default GalleryHome;
