import BreadCrumbs from "@/components/BreadCrumbs"
import SectionInstructors from "@/partials/SectionInstructors"
import { RiBubbleChartLine, RiInstagramLine, RiMailLine, RiPhoneLine, RiTelegram2Line, RiTwitterLine } from "@remixicon/react"
import Image from "next/image"
import { instructorsData } from "@/constants/data"
import Link from "next/link"

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    const findData = instructorsData.find(item => item.slug == slug)

    if (!findData) return

    return { title: findData.name }

}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params
    const findData = instructorsData.find(item => item.slug == slug)

    console.log(findData?.contacts.socials[0])

    if (!findData) return

    return (
        <>
            <section className="py-36">
                <div className="container">
                    <BreadCrumbs />
                    <div className="grid grid-cols-2 gap-x-12">
                        <div className="">
                            <Image src={`/instructors/${findData.slug}.jpg`} width={500} height={500} alt="" />
                        </div>
                        <div className="">
                            <h3 className="text-3xl font-bold">{findData.name}</h3>
                            <p className="leading-8 text-section-content my-8">Вітаю. Мене звуть Ава Міллер, та інструктор йоги з Хатха Йоги. </p>
                            <p className="my-8 leading-8 text-section-content">Моя любов до йоги почалася як особисте відкриття і стала невід'ємною частиною мого життя. З кожним уроком я прагну ділитися не тільки фізичними аспектами йоги, але й допомагати вам набути внутрішнього спокою та рівноваги.</p>
                            <p className="my-8 leading-8 text-section-content">Моє навчання в різних школах йоги та постійне самовдосконалення дозволяють мені створювати уроки, наповнені енергією, розумінням та підтримкою. Моя філософія - в тому, щоб допомогти вам виявити свою силу, гнучкість та внутрішнє світло.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-top-header text-white p-24">
                <div className="container grid grid-cols-3 gap-x-5">
                    <div className="border p-5 grid place-items-center">
                        <RiPhoneLine size={48} />
                        <span className="font-light mt-5">Телефон</span>
                        <span className="font-bold text-2xl">{findData.contacts.tel}</span>
                    </div>
                    <div className="border p-5 grid place-items-center">
                        <RiMailLine size={48} />
                        <span className="font-light mt-5">Email</span>
                        <span className="font-bold text-2xl">{findData.contacts.email}</span>
                    </div>
                    <div className="border p-5 grid place-items-center">
                        <RiBubbleChartLine size={48} />
                        <span className="font-light mt-5">Соціальні мережі</span>
                        <div className="flex gap-x-5 font-bold text-2xl">
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
        </>
    )
}