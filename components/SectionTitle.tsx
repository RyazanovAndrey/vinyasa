import Image from "next/image"

interface Props {
  title: string,
  color: 'black' | 'white'
}

const SectionTitle = ({ title, color }: Props) => {

  const colorTitle = () => {
    if (color == 'black') return 'text-black'
    if (color == 'white') return 'text-white'
  }

  const currentCollor = colorTitle()

  return (
    <div className="flex items-center gap-x-5">
      <Image src={'/lotus.png'} alt="" width={60} height={45} />
      <h3 className={`text-3xl font-bold ${currentCollor}`}>{title}</h3>
    </div>
  )
}

export default SectionTitle