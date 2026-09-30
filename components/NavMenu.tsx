'use client'

import { navLinks } from '@/constants/data';
import { RiArrowDropDownLine, RiArrowDropUpLine } from '@remixicon/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NavMenu = () => {

  const [isOpen, setIsOpen] = useState<null | number>(null)

  console.log(isOpen)

  const toggleMenu = (id: number) => {
    setIsOpen(id == isOpen ? null : id)
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('[data-nav-menu]')) {
        setIsOpen(null)
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <ul className="hidden lg:flex">
      {navLinks.map(item => (
        item.drop ? (
          <li className='relative' data-nav-menu>
            <span onClick={() => toggleMenu(item.id)} className='py-4 px-6 cursor-pointer flex items-center gap-x-2 text-gray-400 hover:text-gray-700 duration-200'>{item.title}{isOpen == item.id ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</span>

            <ul className={`absolute left-0 bg-white overflow-hidden min-w-48 z-50 shadow-2xl duration-200 rounded-bdrs-8px gap-x-5 ${isOpen == item.id ? 'opacity-100 visible top-[120%]' : 'opacity-0 invisible top-[120%]'}`}>
              {item.drop.map(item => (
                <div><Link href={item.href} onClick={() => setIsOpen(null)} className='block p-3 hover:bg-gray-200 flex-1'>{item.title}</Link></div>
              ))}
            </ul>
          </li>
        ) : <li><Link onClick={() => setIsOpen(null)} href={item.href} className='py-4 px-6 block cursor-pointer duration-200 text-gray-400 hover:text-gray-700'>{item.title}</Link></li>
      ))}
    </ul>
  )
}

export default NavMenu