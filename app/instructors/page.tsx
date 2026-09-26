import BreadCrumbs from "@/components/BreadCrumbs";
import SectionInstructors from "@/partials/SectionInstructors";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Інструктори | Віньяса-йога, заняття для початківців'
};


export default function Page() {
    return (
        <>
            <section className="py-36">
                <div className="container">
                    <BreadCrumbs />
                    <div className="grid grid-cols-2 gap-x-12 items-center">
                        <div className="">
                            <Image src={'/instructors/instructors.jpg'} width={500} height={500} alt="" />
                        </div>
                        <div className="">
                            <h3 className="text-3xl font-bold">Наші досвідчені наставники у йозі</h3>
                            <p className="my-8 leading-8 text-section-content">Зустрічайте наших надихаючих інструкторів, які готові провести вас через захоплюючу подорож йоги.</p>
                            <p className="my-8 leading-8 text-section-content">З кожним нашим інструктором ви відкриєте нові грані практики, знайдете натхнення та підтримку на шляху до фізичного та душевного благополуччя. Дізнайтеся більше про наших лідерів та обирайте саме той стиль, який відповідає вашим цілям та бажанням.</p>
                        </div>
                    </div>
                </div>
            </section>
            <SectionInstructors />
        </>
    )
}