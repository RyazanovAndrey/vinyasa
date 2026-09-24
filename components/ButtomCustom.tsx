import Link from "next/link"

interface Props {
  title: string,
  color: 'blue' | 'white',
  link: string
}

const ButtonCustom = ({ title, color, link }: Props) => {

  const style = {
    blue: 'bg-primary text-white',
    white: 'bg-white text-black'
  }

  const styleCurrent = style[color] || ''

  return (
    <Link href={link} className={`inline-block py-3 px-8 text-sm ${styleCurrent}`}>
      {title}
    </Link>
  )
}

export default ButtonCustom