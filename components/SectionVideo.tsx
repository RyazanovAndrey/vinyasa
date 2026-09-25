'use client'

import { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { RiPlayCircleLine } from "@remixicon/react";

function SectionVideo() {
  const [toggler, setToggler] = useState(false);

  return (
    <div>
      <button onClick={() => setToggler(!toggler)} className="relative grid place-items-center cursor-pointer">
        <RiPlayCircleLine className="absolute z-50" size={256} color="white" />
        <div className="bg-black/50 absolute inset-0"></div>
        <Image src={'/gallery/gallery-4.jpg'} width={700} height={500} alt="" />
      </button>
      <FsLightbox
        toggler={toggler}
        sources={[
          'https://youtu.be/JHDsBYt_gOI'
        ]}
      />
    </div>
  );
}

export default SectionVideo;