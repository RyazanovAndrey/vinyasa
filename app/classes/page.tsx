import BreadCrumbs from "@/components/BreadCrumbs";
import SectionClasess from "@/partials/SectionClasess";
import SectionContacts from "@/partials/SectionContacts";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Класи'
};

export default function Page() {
    return (
        <>
            <section className="py-36">
                <div className="container">
                    <BreadCrumbs />
                    <div className="grid grid-cols-2 gap-x-12 items-center">
                        <div className="">
                            <Image src={'/gallery/gallery-4.jpg'} width={600} height={600} alt="" className="rounded-bdrs-8px" />
                        </div>
                        <div className="">
                            <h3 className="text-3xl font-bold">Наші класи</h3>
                            <p className="my-8 leading-8 text-section-content">Дослідіть глибини йогічної практики з нашим різноманітним вибором класів:</p>
                            <ul className="my-8 leading-8 text-section-content">
                                <li>Аштанга йога: Силова та динамічна практика для зміцнення тіла та розуму.</li>
                                <li>Бікрам йога: Інтенсивні заняття у підігрітому залі для максимального розтягування та очищення.</li>
                                <li> Хатха йога: Врівноважування фізичних та ментальних аспектів через статичні пози та дихання.</li>
                                <li>Кундаліні йога: Енергетичні практики та медитації для пробудження внутрішньої сили та усвідомленості.</li>
                                <li>Флай-йога: це сучасний фітнес-напрямок, що поєднує елементи класичних асан, пілатесу, стретчингу та повітряної гімнастики, яке виконується в спеціальних шовкових гамаках, підвішених до стелі.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <SectionClasess />
            <SectionContacts />
        </>
    )
}