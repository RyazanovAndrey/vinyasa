'use client'

import { navLinks } from "@/constants/data"
import { RiArrowDropDownLine, RiArrowDropUpLine } from "@remixicon/react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Props {
  isOpen: boolean,
  closeMenu: () => void
}

const MobileMenu = ({ isOpen, closeMenu }: Props) => {

  const [isOpenDropMenu, setIsOpenDropMenu] = useState<null | number>(null)

  const toggleMenu = (id: number) => {
    setIsOpenDropMenu(id == isOpenDropMenu ? null : id)
  }

  const closeOpenMenu = () => {
    setIsOpenDropMenu(null)
    closeMenu()
  }

  return (
    <ul className={`absolute top-full left-0 bg-primary text-white w-full ${isOpen ? 'block' : 'hidden'}`}>
      {navLinks.map(item => (
        item.drop ? (
          <li>
            <span onClick={() => toggleMenu(item.id)} className="p-5 inline-flex justify-between w-full">{item.title}{isOpenDropMenu == item.id ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</span>
            <ul className={`bg-sky-500 ${item.id == isOpenDropMenu ? 'block' : 'hidden'}`}>
              {item.drop.map(item => {
                return <Link href={item.href} onClick={closeOpenMenu} className="block p-5">{item.title}</Link>
              })}
            </ul>
          </li>
        ) : <li><Link href={item.href} onClick={closeMenu} className="block p-5">{item.title}</Link></li>
      ))}
    </ul>
  )
}

export default MobileMenu