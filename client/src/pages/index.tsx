import {Inter} from "next/font/google";
import {Seo} from "@/component/seo";
import {Header} from "@/component/structure/header";
import {FooterV2} from "@/component/structure/footer-v2";
import {ShortPresentation} from "@/component/structure/short-presentation";
import {Presentation} from "@/component/structure/presentation";
import {Projects} from "@/component/structure/projects";
import {Skills} from "@/component/structure/skills";
import {Experience} from "@/component/structure/experiences";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <>
            <Seo title="Home" description="Home page"/>
            <Header/>
            <ShortPresentation/>
            <Presentation/>
            <Projects/>
            <Skills/>
            <Experience/>
            <FooterV2/>
        </>
    );
}
