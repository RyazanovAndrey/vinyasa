import BreadCrumbs from "@/components/BreadCrumbs";
import ButtonCustom from "@/components/ButtonCustom";
import SectionVideo from "@/components/SectionVideo";
import SectionClasess from "@/partials/SectionClasess";
import SectionInstructors from "@/partials/SectionInstructors";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'О нас'
};

export default function Page() {
    return (
        <>
            <section className="py-36">
                <div className="container">
                    <BreadCrumbs />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                        <div className="">
                            <h3 className="text-3xl font-bold mb-10">Йога студія Віньяса</h3>
                            <p className="text-section-content leading-8">Ласкаво просимо до студії "Віньяса" – місце, де зливаються елегантність руху та глибока усвідомленість. Наша студія пропонує унікальний простір для тих, хто прагне гармонії тіла та розуму через мистецтво йоги.</p>
                            <p className="text-section-content my-8 leading-8">Віньяса - це не просто заняття йогою, це занурення у захоплюючий світ власного тіла, дихання та душі. Наші класи надають можливість кожному учню відкрити для себе свій унікальний шлях до благополуччя та внутрішньої рівноваги.</p>
                            <ButtonCustom color="blue" title="Дивитись відео" width="inline-block" />
                        </div>
                        <div className="flex justify-end">
                            <Image src={'/about-1.jpg'} width={400} height={500} alt="" className="rounded-bdrs-8px" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-top-header text-white py-12">
                <div className="container grid grid-cols-2 md:grid-cols-4 gap-x-12">
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
            <section className="py-24">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <SectionVideo />
                    </div>
                    <div className="">
                        <h3 className="text-3xl font-bold mb-10">Віньяса-йога: Синхронізація дихання та руху</h3>
                        <p className="text-section-content my-6 leading-8">Ласкаво просимо до практики Віньяса-флоу! У цьому відео на вас чекає динамічна послідовність асан, де кожен рух плавно перетікає в наступне на хвилі вашого дихання.</p>
                        <p className="text-section-content my-6 leading-8">
                            Цей комплекс допоможе вам: Зміцнити м'язовий корсет і поліпшити гнучкість. Звільнитися від ментальної напруги та стресу.
                        </p>
                        <p className="text-section-content my-6 leading-8">
                            Практика підходить як для продовжуючих, так і для впевнених новачків, які готові рухатися в свідомому темпі. Постеліть килимок, налаштуйтеся на дихання та почнемо!
                        </p>
                    </div>
                </div>
            </section>
            <SectionClasess />
            <SectionInstructors />
        </>

    )
}