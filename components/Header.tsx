import Image from 'next/image';
import Link from 'next/link';
import NavMenu from './NavMenu';
import { RiMailLine, RiMapPinLine, RiMenuLine, RiPhoneLine, RiTimeLine } from '@remixicon/react';
import ButtonCustom from './ButtonCustom';

const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 z-999 bg-white border-b border-gray-200">

      <div className="bg-top-header text-white py-2 text-sm">
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center justify-between">
          <div className="flex gap-x-5">
            <span className='flex items-center gap-x-3 text-[12px] md:text-[14px]'><RiTimeLine size={16} />Пн-Пт з 10:00 до 19:00</span>
            <span className='flex items-center gap-x-3 text-[12px] md:text-[14px]'><RiMailLine size={16} />vinyasa@gmail.com</span>
          </div>
          <div className="flex gap-x-5 lg:justify-end">
            <span className='flex items-center gap-x-3 text-[12px] md:text-[14px]'><RiPhoneLine size={16} />+38 (099) 365-44-89</span>
            <span className='flex items-center gap-x-3 text-[12px] md:text-[14px]'><RiMapPinLine size={16} />вул. Пилипа Орлика, 18, м. Полтава</span>
          </div>
        </div>
      </div>

      <div className='my-2'>
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-x-20">
            <Link href={'/'}>
              <Image src={'/logo-main-1.png'} alt='' width={150} height={40} />
            </Link>
            <NavMenu />
          </div>
          <div className="bg-primary p-2 rounded-bdrs-8px lg:hidden"><RiMenuLine color='white' /></div>
          <ButtonCustom link="/" color="blue" title="Записатись" width='inline-block' />
        </div>
      </div>
    </header>
  )
}

export default Header