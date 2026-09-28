import BreadCrumbs from "@/components/BreadCrumbs";
import Link from "next/link";
import { blogData } from "@/constants/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Блог'
};


export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

    const sortData = [
        { href: '/blog/all', title: 'Всі', slug: 'all' },
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
                <div className="grid grid-cols-[1fr_300px] gap-x-5">
                    <div className="grid grid-cols-2 gap-5">
                        {sortDataBlog.map(item => (
                            <div className="bg-gray-100 mb-2 rounded-bdrs-8px overflow-hidden">
                                {item.src ? <img src={item.src} alt="" /> : <div className="bg-gray-500 h-48"></div>}
                                <div className="p-5">
                                    <div className="text-sm">{item.date}</div>
                                    <div className="my-2 text-lg">{item.title}</div>
                                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus amet commodi necessitatibus est, ducimus ab dignissimos laudantium iste voluptatem dolor beatae vitae eligendi. Nostrum odit incidunt rerum a. Eligendi modi tenetur repellendus aut soluta aspernatur! Voluptatem, harum magni cupiditate blanditiis minima sit repudiandae iure asperiores, eius laudantium corporis praesentium consequatur.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="bg-[#EEEEEE] rounded-bdrs-8px overflow-hidden">
                            <div className="text-xl p-3">Категорії</div>
                            {sortData.map(item => {
                                return <Link href={item.href} className={`p-3 block ${item.slug == slug ? 'bg-primary text-white' : ''}`}>{item.title}</Link>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}