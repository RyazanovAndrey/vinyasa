'use client'

import { faqList } from "@/constants/data"
import { RiAddLargeLine } from "@remixicon/react"
import { useRef, useState } from "react"

const Accordion = () => {

  const [isOpen, setIsOpen] = useState<null | number>(null)
  const refLink = useRef<HTMLDivElement>(null)

  const toggleBox = (id: number) => {
    setIsOpen(id == isOpen ? null : id)
  }

  return (
    <div className="w-250">
      {faqList.map(item => (
        <div className="mt-3">
          <div onClick={() => toggleBox(item.id)} className="bg-[#E9EEFF] p-5 text-xl flex justify-between cursor-pointer rounded-bdrs-8px">
            <span>{item.title}</span>
            <div className={`size-8 grid place-items-center duration-200 ${item.id == isOpen ? 'rotate-45' : ''}`}>
              <RiAddLargeLine />
            </div>
          </div>

          <div className={`overflow-hidden max-h-0 duration-200 bg-[#E9E9E9] rounded-bdrs-8px mt-2`} style={item.id == isOpen ? { maxHeight: refLink.current?.scrollHeight } : { maxHeight: '0px' }} ref={refLink}>
            <p className="p-5">{item.desc}</p>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Accordion