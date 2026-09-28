import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import GalleryHome from "@/partials/GalleryHome";
import ButtonCustom from "@/components/ButtonCustom";
import Accordion from "@/components/Accordion";
import ReviewsSection from "@/partials/ReviewsSection";
import SectionClasess from "@/partials/SectionClasess";
import SectionInstructors from "@/partials/SectionInstructors";
import SectionContacts from "@/partials/SectionContacts";
import HomeSlider from "@/partials/HomeSlider";

export default function Page() {
    return (
        <>
            {/* Home */}
            <HomeSlider />

            {/* About */}
            <section className="py-24">
                <div className="container">
                    <SectionTitle title="Про нашу студію" color="black" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">
                        <div className="">
                            <p className="text-section-content">Ласкаво просимо до студії "Віньяса" – місце, де зливаються елегантність руху та глибока усвідомленість. Наша студія пропонує унікальний простір для тих, хто прагне гармонії тіла та розуму через мистецтво йоги.</p>
                            <p className="text-section-content mt-7">Віньяса - це не просто заняття йогою, це занурення у захоплюючий світ власного тіла, дихання та душі. Наші класи надають можливість кожному учню відкрити для себе свій унікальний шлях до благополуччя та внутрішньої рівноваги.</p>
                            <div className="bg-top-header text-white grid grid-cols-2 p-12 gap-y-12 mt-12 rounded-bdrs-8px">
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
                            <img src="/about-1.jpg" alt="" className="rounded-bdrs-8px" />
                            <Image className="absolute -bottom-12 left-0 z-50 border-12 border-white rounded-bdrs-8px" src={'/about-2.jpg'} width={375} height={315} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Clasess */}
            <SectionClasess />

            {/* Instructors */}
            <SectionInstructors />

            {/* Gallery */}
            <section className="py-24 bg-top-header">
                <div className="container">
                    <div className="flex justify-center flex-col items-center">
                        <SectionTitle title="Галерея" color="white" />
                        <p className="text-white mt-3">Відображення моментів гармонії у нашій галереї</p>
                    </div>
                    <GalleryHome />
                    <div className="flex justify-center mt-5">
                        <ButtonCustom link="/gallery" color="white" title="Дивитись усі" width="inline-block" />
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

            {/* Reviews */}
            <section className="py-24 bg-section-bg">
                <div className="container">
                    <div className="flex justify-center flex-col items-center">
                        <SectionTitle title="Відгуки" color="black" />
                        <p className="mt-3">Відгуки та враження наших учнів про студію Віньяса</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
                        <ReviewsSection />
                    </div>
                </div>
            </section>

            {/* Contacts */}
            <SectionContacts />
        </>
    )
}