import { navLinks } from "@/constants/data"
import Link from "next/link"

interface Props {
  isOpen: boolean,
  closeMenu: () => void
}

const MobileMenu = ({ isOpen, closeMenu }: Props) => {
  return (
    <div className={`absolute top-full left-0 bg-white w-full shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
      {navLinks.map(item => (
        <Link href={item.href} onClick={closeMenu} className="block p-5">{item.title}</Link>
      ))}
    </div>
  )
}

export default MobileMenu