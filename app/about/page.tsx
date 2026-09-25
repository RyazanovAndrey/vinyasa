import BreadCrumbs from "@/components/BreadCrumbs";
import ButtonCustom from "@/components/ButtonCustom";
import SectionVideo from "@/components/SectionVideo";
import SectionClasess from "@/partials/SectionClasess";
import SectionInstructors from "@/partials/SectionInstructors";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'О нас | Віньяса-йога, заняття для початківців'
};

export default function Page() {
    return (
        <>
            <section className="bg-primary text-center p-5 text-white space-y-2 ">
                <h3 className="text-4xl">О нас</h3>
                <BreadCrumbs />
            </section>
            <section className="p-24">
                <div className="container grid grid-cols-2 gap-x-5 items-center">
                    <div className="">
                        <h3 className="text-3xl font-bold mb-10">Йога студія Віньяса</h3>
                        <p className="text-section-content leading-8">Ласкаво просимо до студії "Віньяса" – місце, де зливаються елегантність руху та глибока усвідомленість. Наша студія пропонує унікальний простір для тих, хто прагне гармонії тіла та розуму через мистецтво йоги.</p>
                        <p className="text-section-content my-8 leading-8">Віньяса - це не просто заняття йогою, це занурення у захоплюючий світ власного тіла, дихання та душі. Наші класи надають можливість кожному учню відкрити для себе свій унікальний шлях до благополуччя та внутрішньої рівноваги.</p>
                        <ButtonCustom color="blue" title="Дивитись відео" width="inline-block" />
                    </div>
                    <div className="flex justify-end">
                        <Image src={'/about-1.jpg'} width={400} height={500} alt="" />
                    </div>
                </div>
            </section>
            <section className="bg-top-header text-white py-12">
                <div className="container grid grid-cols-4 gap-x-12">
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
            </section>
            <section className="grid place-items-center py-24">
                <SectionVideo />
            </section>
            <SectionClasess />
            <SectionInstructors />
        </>

    )
}