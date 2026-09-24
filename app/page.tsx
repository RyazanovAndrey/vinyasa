import SectionTitle from "@/components/SectionTitle";
import HomeSlider from "@/partials/HomeSlider";
import Image from "next/image";
import ClasessSlider from "@/partials/ClassesSlider";
import InstructorsSlider from "@/partials/InstructorsSlider";
import GalleryHome from "@/partials/GalleryHome";
import ButtonCustom from "@/components/ButtomCustom";
import Accordion from "@/components/Accordion";

export default function Page() {
    return (
        <>
            {/* Home */}
            <section className="min-h-150">
                <HomeSlider />
            </section>

            {/* About */}
            <section className="py-24">
                <div className="container">
                    <SectionTitle title="Про нашу студію" color="black" />
                    <div className="grid grid-cols-2 gap-5 mt-12">
                        <div className="">
                            <p className="text-[#565353]">Ласкаво просимо до студії "Віньяса" – місце, де зливаються елегантність руху та глибока усвідомленість. Наша студія пропонує унікальний простір для тих, хто прагне гармонії тіла та розуму через мистецтво йоги.</p>
                            <p className="text-[#565353] mt-7">Віньяса - це не просто заняття йогою, це занурення у захоплюючий світ власного тіла, дихання та душі. Наші класи надають можливість кожному учню відкрити для себе свій унікальний шлях до благополуччя та внутрішньої рівноваги.</p>
                            <div className="bg-top-header text-white grid grid-cols-2 p-12 gap-y-12 mt-12">
                                <div className="text-center">
                                    <div className="text-6xl font-bold">20</div>
                                    <div className="">Років досвіду</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-6xl font-bold">500</div>
                                    <div className="">Навчених студентів</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-6xl font-bold">900</div>
                                    <div className="">Проведених занять</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-6xl font-bold">15</div>
                                    <div className="">Досвідчених інструкторів</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex justify-end">
                            <img src="/about-1.jpg" alt="" />
                            <Image className="absolute -bottom-12 left-0 z-50 border-12 border-white" src={'/about-2.jpg'} width={375} height={315} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Clasess */}
            <section className="py-24 bg-section-bg">
                <div className="container">
                    <div className="flex justify-center flex-col items-center">
                        <SectionTitle title="Класи" color="black" />
                        <p className="text-[#525050] mt-3">Різноманітність практик для всіх рівнів</p>
                    </div>
                    <ClasessSlider />
                </div>
            </section>

            {/* Instructors */}
            <section className="py-24">
                <div className="container">
                    <div className="flex justify-center flex-col items-center">
                        <SectionTitle title="Наші інструктори" color="black" />
                        <p className="text-[#525050] mt-3">Натхнюючі ментори студії йоги Віньяса</p>
                    </div>
                    <InstructorsSlider />
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 bg-top-header">
                <div className="container">
                    <div className="flex justify-center flex-col items-center">
                        <SectionTitle title="Галерея" color="white" />
                        <p className="text-white mt-3">Відображення моментів гармонії у нашій галереї</p>
                    </div>
                    <GalleryHome />
                    <div className="flex justify-center mt-5">
                        <ButtonCustom link="/" color="white" title="Дивитись усі" />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24">
                <div className="container">
                    <div className="flex justify-center flex-col items-center">
                        <SectionTitle title="Часті питання" color="black" />
                        <p className="mt-3">FAQ для легкості та ясності вашого йогічний досвід у студії Віньяса.</p>
                    </div>
                    <div className="mt-12 flex justify-center">
                        <Accordion />
                    </div>
                </div>
            </section>
        </>
    )
}