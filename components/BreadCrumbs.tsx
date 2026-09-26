'use client'

import { RiArrowRightSLine } from "@remixicon/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { breadCrumbsList } from "@/constants/breadCrumbsList"

const BreadCrumbs = () => {

  const path = usePathname()

  function createBreadCrumbs(path: string) {
    const list = path.split('/').filter(item => item)

    const breadCrumbs = [
      { href: '/', title: 'Головна' }
    ]

    let hrefLink = ''

    for (let index = 0; index < list.length; index++) {
      const title = breadCrumbsList(list[index]);
      hrefLink = hrefLink + `/${list[index]}`

      breadCrumbs.push({
        href: hrefLink, title
      })
    }

    return breadCrumbs
  }

  const breadCrumbs = createBreadCrumbs(path)

  return (
    <div className="flex gap-x-3 mb-5">
      {breadCrumbs.map((item, index) => (
        <div className="flex items-center gap-x-3">
          {index > 0 && <RiArrowRightSLine size={16} />}
          {index == breadCrumbs.length - 1 ? <span className="">{item.title}</span> : <Link href={item.href} className="text-gray-400">{item.title}</Link>}
        </div>
      ))}
    </div>
  )
}

export default BreadCrumbs