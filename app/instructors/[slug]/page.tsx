import BreadCrumbs from "@/components/BreadCrumbs"
import SectionInstructors from "@/partials/SectionInstructors"
import { RiBubbleChartLine, RiInstagramLine, RiMailLine, RiPhoneLine, RiTelegram2Line, RiTwitterLine } from "@remixicon/react"
import { instructorsData } from "@/constants/data"
import Link from "next/link"
import SectionContacts from "@/partials/SectionContacts"
import Image from "next/image"

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    const findData = instructorsData.find(item => item.slug == slug)

    if (!findData) return

    return { title: findData.name }

}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params
    const findData = instructorsData.find(item => item.slug == slug)

    if (!findData) return

    return (
        <>
            <section className="py-36">
                <div className="container">
                    <BreadCrumbs />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <Image src={`/instructors/${findData.slug}.jpg`} width={500} height={500} alt="" className="rounded-bdrs-8px object-cover" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold">{findData.name}</h3>
                            <p className="leading-8 text-section-content my-8">Вітаю. Мене звуть {findData.name}, я інструктор йоги з {findData.direction}. </p>
                            <p className="my-8 leading-8 text-section-content">Моя любов до йоги почалася як особисте відкриття і стала невід'ємною частиною мого життя. З кожним уроком я прагну ділитися не тільки фізичними аспектами йоги, але й допомагати вам набути внутрішнього спокою та рівноваги.</p>
                            <p className="my-8 leading-8 text-section-content">Моє навчання в різних школах йоги та постійне самовдосконалення дозволяють мені створювати уроки, наповнені енергією, розумінням та підтримкою. Моя філософія - в тому, щоб допомогти вам виявити свою силу, гнучкість та внутрішнє світло.</p>
                            <div className="border border-gray-300 p-5 inline-block  rounded-bdrs-8px">Направлення: <span className="font-semibold">{findData.direction}</span></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-top-header text-white p-24">
                <div className="container grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="border p-5 grid place-items-center rounded-bdrs-8px">
                        <RiPhoneLine size={48} />
                        <span className="font-light mt-5">Телефон</span>
                        <span className="font-bold lg:text-2xl">{findData.contacts.tel}</span>
                    </div>
                    <div className="border p-5 grid place-items-center rounded-bdrs-8px">
                        <RiMailLine size={48} />
                        <span className="font-light mt-5">Email</span>
                        <span className="font-bold lg:text-2xl">{findData.contacts.email}</span>
                    </div>
                    <div className="border p-5 grid place-items-center rounded-bdrs-8px">
                        <RiBubbleChartLine size={48} />
                        <span className="font-light mt-5">Соціальні мережі</span>
                        <div className="flex gap-x-5 font-bold lg:text-2xl">
                            <Link href={findData.contacts.socials[0] || ''}>
                                <RiTelegram2Line size={32} className="cursor-pointer" />
                            </Link>
                            <Link href={findData.contacts.socials[1] || ''}>
                                <RiInstagramLine size={32} className="cursor-pointer" />
                            </Link>
                            <Link href={findData.contacts.socials[2] || ''}>
                                <RiTwitterLine size={32} className="cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <SectionInstructors />
            <SectionContacts />
        </>
    )
}