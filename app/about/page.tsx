import BreadCrumbs from "@/components/BreadCrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'О нас | Віньяса-йога, заняття для початківців'
};

export default function Page() {
    return (
        <section className="">
            <div className="bg-primary text-center p-5 text-white space-y-2 ">
                <h3 className="text-4xl">О нас</h3>
                <BreadCrumbs />
            </div>
        </section>
    )
}