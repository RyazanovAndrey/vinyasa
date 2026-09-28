'use client'
import { classesData } from "@/constants/data"
import Link from "next/link"

const ClassesMenu = ({ slug }: { slug: string }) => {

  return (
    <div className="">
      <div className="bg-[#EEEEEE] max-w-100 rounded-bdrs-8px overflow-hidden">
        {classesData.map(item => (
          <Link href={item.slug} className={`p-5 block ${item.slug == slug ? 'bg-primary text-white' : ''}`}>{item.title}</Link>
        ))}
      </div>
    </div>
  )
}

export default ClassesMenu