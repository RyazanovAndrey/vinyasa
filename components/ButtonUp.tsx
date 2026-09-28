'use client'
import { RiArrowUpSLine } from "@remixicon/react"
import { useEffect, useState } from "react"

const ButtonUp = () => {

  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const showBtn = () => {
      const currentShow  = window.scrollY
      
      if(currentShow >= document.documentElement.scrollHeight / 2) {
        setIsShow(true)
      } else {
        setIsShow(false)
      }
    }
    window.addEventListener('scroll', showBtn)
    
    return  () => {
      window.removeEventListener('scroll', showBtn)
    }
  }, [])

  return (
    <a href="#" className={`fixed right-4 bottom-4 w-12 h-12 grid place-items-center rounded-full bg-primary ${isShow ? 'block' : 'hidden'}`}>
      <RiArrowUpSLine color="white" />
    </a>
  )
}

export default ButtonUp