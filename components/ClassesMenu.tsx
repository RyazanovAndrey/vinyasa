'use client'
import { classesData } from "@/constants/data"
import Link from "next/link"

const ClassesMenu = ({ slug }: { slug: string }) => {

  return (
    <div className="">
      <div className="max-w-64">
        {classesData.map(item => (
          <Link href={item.slug} className={`py-2 px-3 block border-l-2 border-gray-100  duration-200 ${item.slug == slug ? 'text-primary border-l-2 border-primary' : 'text-gray-500'}`}>{item.title}</Link>
        ))}
      </div>
    </div>
  )
}

export default ClassesMenu