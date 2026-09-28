import Link from "next/link"

interface Props {
  title: string,
  color: 'blue' | 'white',
  link?: string,
  width?: 'inline-block' | 'full',
}

const ButtonCustom = ({ title, color, link, width = 'inline-block'}: Props) => {

  const style = {
    blue: 'bg-primary text-white',
    white: 'bg-white text-black',
    }

  const styleCurrent = style[color] || ''

  return (
    <Link href={link || ''} className={`py-2.5 px-4 text-sm rounded-bdrs-6px ${styleCurrent} ${width == 'full' ? 'w-full block text-center' : 'inline-block'}`}>
      {title}
    </Link>
  )
}

export default ButtonCustom