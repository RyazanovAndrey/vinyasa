import SectionTitle from "@/components/SectionTitle"
import ClasessSlider from "./ClassesSlider"

const SectionClasess = () => {
  return (
    <section className="py-24 bg-section-bg">
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <SectionTitle title="Класи" color="black" />
          <p className="text-[#525050] mt-3">Різноманітність практик для всіх рівнів</p>
        </div>
        <ClasessSlider />
      </div>
    </section>
  )
}

export default SectionClasess