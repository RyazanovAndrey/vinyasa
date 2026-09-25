import Image from "next/image"

interface Props {
  title: string,
  color: 'black' | 'white'
}

const SectionTitle = ({ title, color }: Props) => {

  const colorTitle = {
    'black': 'text-black',
    'white': 'text-white'
  }

  const currentCollor = colorTitle[color] || ''

  return (
    <div className="flex items-center gap-x-5">
      <Image src={'/lotus.png'} alt="" width={40} height={50} />
      <h3 className={`text-3xl font-bold ${currentCollor}`}>{title}</h3>
    </div>
  )
}

export default SectionTitle