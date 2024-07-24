import Image from "next/image";
import {Inter} from "next/font/google";
import {Footer} from "@/component/structure/footer";
import {Seo} from "@/component/seo";
import {Header} from "@/component/structure/header";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <>
            <Seo title="Home" description="Home page"/>
            <Header/>
            <Footer/>
        </>
    );
}
