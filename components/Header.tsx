import Image from 'next/image';
import Link from 'next/link';
import NavMenu from './NavMenu';
import { RiMailLine, RiMapPinLine, RiPhoneLine, RiTimeLine } from '@remixicon/react';
import ButtonCustom from './ButtonCustom';

const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 z-50 border">

      {/* <div className="bg-top-header text-white py-2">
        <div className="container flex items-center justify-between text-sm">
          <div className="flex gap-x-5">
            <span className='flex items-center gap-x-3'><RiTimeLine size={16} />Пн-Пт з 10:00 до 19:00</span>
            <span className='flex items-center gap-x-3'><RiMailLine size={16} />vinyasa@gmail.com</span>
          </div>
          <div className="flex gap-x-5">
            <span className='flex items-center gap-x-3'><RiPhoneLine size={16} />+38 (099) 365-44-89</span>
            <span className='flex items-center gap-x-3'><RiMapPinLine size={16} />вул. Пилипа Орлика, 18, м. Полтава</span>
          </div>
        </div>
      </div> */}

      <div className='my-5 border'>
        <div className="container flex items-center justify-between border">
          <div className="flex items-center gap-x-20">
            <Link href={'/'}>
              <Image src={'/logo-main.png'} alt='' width={150} height={40} />
            </Link>
            <NavMenu />
          </div>
          <ButtonCustom link="/" color="blue" title="Записатись" width='inline-block' />
        </div>
      </div>
    </header>
  )
}

export default Header