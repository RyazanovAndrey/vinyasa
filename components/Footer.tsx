import Image from "next/image"
import Link from "next/link"
import { classesData } from "@/constants/data"
import { navLinks } from '@/constants/data';
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";

const Footer = () => {

  return (
    <footer className="bg-[#333743] pt-12 text-white">
      <div className="container grid grid-cols-4 gap-12 pb-5">
        <div className="">
          <Image src={'/logo-footer.png'} width={150} height={40} alt="" />
          <p className="text-sm text-[#7c7c7c] mt-5">Знайдіть гармонію тіла і розуму в студії йоги Віньяса. Досліджуйте шлях до внутрішньої рівноваги через уроки йоги, спрямовані на гармонійне поєднання дихання, рух і розвиток душі.</p>
        </div>
        <div>
          <div className="text-xl mb-5">Навігація</div>
          {navLinks.map(item => {
            return <Link href={item.href} className="block text-[#7c7c7c] py-1 hover:text-white duration-200">{item.title}</Link>
          })}
        </div>
        <div>
          <div className="text-xl mb-5">Класи</div>
          {classesData.map(item => {
            return <Link href={item.href} className="block text-[#7c7c7c] py-1 hover:text-white duration-200">{item.title}</Link>
          })}
        </div>
        <div>
          <div className="text-xl mb-5">Контакти</div>
          <span className='flex items-center gap-x-3 mt-5'><RiMapPinLine size={24} />вул. Пилипа Орлика, 18, м. Полтава</span>
          <span className='flex items-center gap-x-3 mt-5'><RiPhoneLine size={24} />+38 (099) 365-44-89</span>
          <span className='flex items-center gap-x-3 mt-5'><RiMailLine size={24} />vinyasa@gmail.com</span>
        </div>
      </div>
      <div className="container text-center py-5 text-sm text-[#D4D4D4] border-t border-white/10">
        <span>&copy;</span> {new Date().getFullYear()} Усі права збережені
      </div>
    </footer>
  )
}

export default Footer