import BreadCrumbs from "@/components/BreadCrumbs";
import GalleryHome from "@/partials/GalleryHome";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Галарея'
};

export default function Page() {
    return (
        <section className="py-36">
            <div className="container">
                <BreadCrumbs />
                <GalleryHome />
                <GalleryHome />
            </div>
        </section>
    )
}