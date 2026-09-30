import { reviewsData } from "@/constants/data"
import Image from "next/image"

const ReviewsSection = () => {
  return (
    <>
      {reviewsData.map(item => (
        <div className="bg-white relative top-0 cursor-pointer rounded-bdrs-8px overflow-hidden hover:shadow-2xl hover:-top-1 duration-200">
          <Image src={item.image} width={500} height={500} alt="" className="w-full" />
          <div className="py-5 px-12 text-center">
            <div className="font-semibold pb-3">{item.name}</div>
            <div className="border-t border-gray-200 pt-3">
              <div className="text-sm text-gray-500 text-left">{item.desc}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ReviewsSection