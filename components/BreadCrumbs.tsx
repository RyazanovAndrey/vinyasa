'use client'

import { RiArrowRightSLine } from "@remixicon/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { breadCrumbsList } from "@/constants/breadCrumbsList"

const BreadCrumbs = () => {

  const path = usePathname()

  console.log(path)

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
    <div className="flex justify-center gap-x-3 mt-2">
      {breadCrumbs.map((item, index) => (
        <div className="flex items-center gap-x-3">
          {index > 0 && <RiArrowRightSLine size={16} />}
          {index == breadCrumbs.length - 1 ? <span className="text-white/30">{item.title}</span> : <Link href={item.href}>{item.title}</Link>}
        </div>
      ))}
    </div>
  )
}

export default BreadCrumbs