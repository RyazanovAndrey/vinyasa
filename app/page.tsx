import SectionTitle from "@/components/SectionTitle";
import HomeSlider from "@/partials/HomeSlider";
import Image from "next/image";
import ClasessSlider from "@/partials/ClassesSlider";
import InstructorsSlider from "@/partials/InstructorsSlider";
import GalleryHome from "@/partials/GalleryHome";
import ButtonCustom from "@/components/ButtonCustom";
import Accordion from "@/components/Accordion";
import ReviewsSection from "@/partials/ReviewsSection";
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import SectionClasess from "@/partials/SectionClasess";
import SectionInstructors from "@/partials/SectionInstructors";

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
                            <p className="text-section-content">Ласкаво просимо до студії "Віньяса" – місце, де зливаються елегантність руху та глибока усвідомленість. Наша студія пропонує унікальний простір для тих, хто прагне гармонії тіла та розуму через мистецтво йоги.</p>
                            <p className="text-section-content mt-7">Віньяса - це не просто заняття йогою, це занурення у захоплюючий світ власного тіла, дихання та душі. Наші класи надають можливість кожному учню відкрити для себе свій унікальний шлях до благополуччя та внутрішньої рівноваги.</p>
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
                        <ButtonCustom link="/" color="white" title="Дивитись усі" width="inline-block" />
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
                    <div className="grid grid-cols-4 gap-5 mt-12">
                        <ReviewsSection />
                    </div>
                </div>
            </section>

            {/* Contacts */}
            <section className="" style={{ background: 'url("/contacts-img.jpg")' }}>
                <div className="container bg-[#3D445D]/60 grid grid-cols-2 gap-12 p-12">
                    <div className="flex flex-col items-center">
                        <SectionTitle color="white" title="Залишити заявку" />
                        <p className="mt-3 text-white">Залишились питання? Заповніть форму,</p>

                        <form action="" className="space-y-2 mt-5">
                            <input type="text" placeholder="Ваше ім'я" className="w-full  bg-white h-10 pl-3 outline-0" />
                            <input type="text" placeholder="Ваш телефон" className="w-full  bg-white h-10 pl-3 outline-0" />
                            <input type="text" placeholder="Ваш email" className="w-full  bg-white h-10 pl-3 outline-0" />
                            <textarea className="bg-white w-full outline-0 pl-3 pt-2" rows={5}></textarea>
                            <ButtonCustom color="blue" title="Надіслати" width="full" />
                        </form>
                    </div>
                    <div className="text-white space-y-2">
                        <h3 className="text-3xl font-bold text-white mb-16">Контакты</h3>
                        <span className='flex items-center gap-x-3 p-5 bg-white/20'><RiMapPinLine size={32} />вул. Пилипа Орлика, 18, м. Полтава</span>
                        <span className='flex items-center gap-x-3 p-5 bg-white/20'><RiPhoneLine size={32} />+38 (099) 365-44-89</span>
                        <span className='flex items-center gap-x-3 p-5 bg-white/20'><RiMailLine size={32} />vinyasa@gmail.com</span>
                    </div>

                </div>
            </section>
        </>
    )
}