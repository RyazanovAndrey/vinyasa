import BreadCrumbs from "@/components/BreadCrumbs"
import ClassesMenu from "@/components/ClassesMenu"
import { classesData } from "@/constants/data"
import SectionContacts from "@/partials/SectionContacts"
import Image from "next/image"

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    const findData = classesData.find(item => item.slug == slug)

    if (!findData) return
    return { title: findData.title }

}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params
    const findData = classesData.find(item => item.slug == slug)
    if (!findData) return

    return (
        <section className="pt-36">
            <div className="container">
                <BreadCrumbs />
                <div className="grid grid-cols-[300px_1fr] gap-x-12">
                    <ClassesMenu slug={slug} />
                    <div>
                        <div className="w-full h-100 rounded-bdrs-8px overflow-hidden">
                            <Image src={`/classes/${slug}.jpg`} width={1200} height={500} alt="" className="" />
                        </div>
                        <div className="text-2xl font-bold my-5">{findData.title}</div>
                        <p className="leading-8 text-section-content my-8">{findData.desc}</p>
                    </div>
                </div>
            </div>
            <SectionContacts />
        </section>
    )
}