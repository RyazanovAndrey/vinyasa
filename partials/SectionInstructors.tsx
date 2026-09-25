import SectionTitle from "@/components/SectionTitle"
import InstructorsSlider from "./InstructorsSlider"

const SectionInstructors = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <SectionTitle title="Наші інструктори" color="black" />
          <p className="text-[#525050] mt-3">Натхнюючі ментори студії йоги Віньяса</p>
        </div>
        <InstructorsSlider />
      </div>
    </section>
  )
}

export default SectionInstructors