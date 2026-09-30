import BreadCrumbs from "@/components/BreadCrumbs";
import Link from "next/link";
import { blogData } from "@/constants/data";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Блог'
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

    const sortData = [
        { href: '/blog/all', title: 'Всі категорії', slug: 'all' },
        { href: '/blog/fitness', title: 'Фітнес', slug: 'fitness' },
        { href: '/blog/vinyasa', title: 'Віньяса', slug: 'vinyasa' },
        { href: '/blog/asanyi', title: 'Асани', slug: 'asanyi' },
    ]

    const { slug } = await params
    const sortDataBlog = blogData.filter(item => item.category == slug || slug == 'all')

    return (
        <section className="py-36">
            <div className="container">
                <BreadCrumbs />
                <div className="grid grid-cols-[4fr_1fr] gap-x-12">
                    <div className="grid grid-cols-2 gap-5">
                        {sortDataBlog.map(item => (
                            <div className="bg-gray-100 mb-2 rounded-bdrs-8px overflow-hidden">
                                {item.src ? <Image src={item.src} width={500} height={500} alt="" /> : <div className="bg-gray-500 h-48"></div>}
                                <div className="p-5">
                                    <div className="text-sm">{item.date}</div>
                                    <div className="my-2 text-lg">{item.title}</div>
                                    <p className="text-gray-500">{item.content.slice(0, 100) + '...'}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="rounded-bdrs-8px overflow-hidden">
                            <div className="text-xl p-3">Категорії</div>
                            {sortData.map(item => {
                                return <Link href={item.href} className={`py-2 px-3 block border-l-2 border-gray-100  duration-200 ${item.slug == slug ? 'text-primary border-l-2 border-primary' : 'text-gray-500'}`}>{item.title}</Link>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}