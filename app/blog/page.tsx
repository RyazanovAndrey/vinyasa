import BreadCrumbs from "@/components/BreadCrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Блог'
};

export default function Page() {
    return (
        <section className="py-36">
            <div className="container">
                <BreadCrumbs />
            </div>
        </section>
    )
}