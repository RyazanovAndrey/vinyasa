import ButtonCustom from "@/components/ButtonCustom"
import SectionTitle from "@/components/SectionTitle"
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react"

const SectionContacts = () => {
  return (
    <section className="" style={{ background: 'url("/contacts-img.jpg")' }}>
      <div className="container bg-[#3D445D]/60 grid grid-cols-2 gap-12 p-12">
        <div className="flex flex-col items-center">
          <SectionTitle color="white" title="Залишити заявку" />
          <p className="mt-3 text-white">Залишились питання? Заповніть форму,</p>

          <form action="" className="space-y-2 mt-5">
            <input type="text" placeholder="Ваше ім'я" className="w-full  bg-white h-10 pl-3 outline-0" />
            <input type="text" placeholder="Ваш телефон" className="w-full  bg-white h-10 pl-3 outline-0" />
            <input type="text" placeholder="Ваш email" className="w-full  bg-white h-10 pl-3 outline-0" />
            <textarea className="bg-white w-full outline-0 pl-3 pt-2" rows={5}></textarea>
            <ButtonCustom color="blue" title="Надіслати" width="full" />
          </form>
        </div>
        <div className="text-white space-y-2">
          <h3 className="text-3xl font-bold text-white mb-16">Контакты</h3>
          <span className='flex items-center gap-x-3 p-5 bg-white/20'><RiMapPinLine size={32} />вул. Пилипа Орлика, 18, м. Полтава</span>
          <span className='flex items-center gap-x-3 p-5 bg-white/20'><RiPhoneLine size={32} />+38 (099) 365-44-89</span>
          <span className='flex items-center gap-x-3 p-5 bg-white/20'><RiMailLine size={32} />vinyasa@gmail.com</span>
        </div>

      </div>
    </section>
  )
}

export default SectionContacts